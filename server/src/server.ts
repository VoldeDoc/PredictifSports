import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter';
import session from 'express-session';

dotenv.config();

const corsOptions = {
    origin: process.env.CLIENT_URL as string,
    credentials: true,
};

const PORT: string | number = process.env.PORT || 8080;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/PredictifSport';


const app = express();
app.use(cors(corsOptions));
app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' },
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);

(async () => {
    try {
        mongoose.connect(uri).then(() => {
            console.log('Connected to MongoDB');
        });
    } catch (error) {
        console.log(error);
    }
})();


app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});
