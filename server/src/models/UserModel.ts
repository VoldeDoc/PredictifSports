import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    password?: string;
    otp?: string |  number | null;
    otp_exp_at?: Date | null;
    verified?: boolean;
    generateAuthToken: (remember?: boolean) => string;
    comparePassword: (password: string) => Promise<boolean>;
    setProperties: (properties: { [key: string]: string | number | Date | boolean | null }) => void;
    generateOTP: () => Promise<string | number>;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    otp: {
        type: String || Number || null,
        default: null,
    },
    otp_exp_at: {
        type: Date || null,
        default: null,
    },
    verified: {
        type: Boolean,
        default: false,
    },
});

// Hash the password before saving the user to the database
UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password as string, 12); //hash the password before saving it to the database
    }
    next();
})

// Generate a token for the user
UserSchema.methods.generateAuthToken = async function (remember?: boolean) {
    try {
        return jwt.sign({ id: this._id.toString() }, process.env.JWT_SECRET as string, { expiresIn: remember ? "7d" : "1d" }); //generate a token for the user
    } catch (error) {
        console.log(error);
    }
}

// Compare the password with the hashed password
UserSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password); //compare the password with the hashed password
}

// Set the properties of the user object
UserSchema.methods.setProperties = function (properties: { [key: string]: string | number | Date | boolean | null }) {
    for (const key in properties) {
        if (properties.hasOwnProperty(key)) { // Check if the property is directly on the properties object
            this[key] = properties[key]; // Set the property on the user object
        }
    }
}

// Generate otp for the user
UserSchema.methods.generateOTP = async function () {
    let otp;
    let otpExists = true;

    while (otpExists) {
        otp = Math.floor(1000 + Math.random() * 9000); // generate a random 4-digit number
        otpExists = !!(await (this.constructor as mongoose.Model<IUser>).findOne({ otp })); // check if the otp exists in the database
    }

    return otp;
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;