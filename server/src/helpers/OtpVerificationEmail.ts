import nodemailer from 'nodemailer';

export const sendOtpVerificationEmail = async (name: string, email: string, otp: string | number) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST as string,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        const mailOptions = {
            from: { name: 'Predictif Sports', address: process.env.SMTP_USER as string },
            to: email,
            subject: 'OTP Verification',
            html: `
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                        <title>Static Template</title>

                        <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                        rel="stylesheet"
                        />
                    </head>
                    <body
                        style="
                        margin: 0;
                        font-family: 'Poppins', sans-serif;
                        background: #ffffff;
                        font-size: 14px;
                        "
                    >
                        <div
                        style="
                            max-width: 680px;
                            margin: 0 auto;
                            padding: 45px 30px 60px;
                            background: #f4f7ff;
                            background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
                            background-repeat: no-repeat;
                            background-size: 800px 452px;
                            background-position: top center;
                            font-size: 14px;
                            color: #434343;
                        "
                        >
                        <header>
                            <table style="width: 100%;">
                            <tbody>
                                <tr style="height: 0;">
                                <td>
                                    <img src="https://i.ibb.co/Qjc7F7G/predictif.png" /> 
                                </td>
                                <td style="text-align: right;">
                                    <span
                                    style="font-size: 16px; line-height: 30px; color: #ffffff;"
                                    >
                                    ${new Date().toLocaleDateString('en-NG', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}
                                    </span
                                    >
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </header>

                        <main>
                            <div
                            style="
                                margin: 0;
                                margin-top: 70px;
                                padding: 92px 30px 115px;
                                background: #ffffff;
                                border-radius: 30px;
                                text-align: center;
                            "
                            >
                            <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                                <h1
                                style="
                                    margin: 0;
                                    font-size: 24px;
                                    font-weight: 500;
                                    color: #1f1f1f;
                                "
                                >
                                Your OTP
                                </h1>
                                <p
                                style="
                                    margin: 0;
                                    margin-top: 17px;
                                    font-size: 16px;
                                    font-weight: 500;
                                "
                                >
                                Hey ${name},
                                </p>
                                <p
                                style="
                                    margin: 0;
                                    margin-top: 17px;
                                    font-weight: 500;
                                    letter-spacing: 0.56px;
                                "
                                >
                                Thank you for choosing Predictif Sports. Please use the following OTP
                                to complete the procedure to log in to your account. This OTP is
                                valid for
                                <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
                                Do not share this code with others, including Predictif Sports
                                employees.
                                </p>
                                <p
                                style="
                                    margin: 0;
                                    margin-top: 60px;
                                    font-size: 40px;
                                    font-weight: 600;
                                    letter-spacing: 25px;
                                    color: #ba3d4f;
                                "
                                >
                                ${otp}
                                </p>
                            </div>
                            </div>

                            <p
                            style="
                                max-width: 400px;
                                margin: 0 auto;
                                margin-top: 90px;
                                text-align: center;
                                font-weight: 500;
                                color: #8c8c8c;
                            "
                            >
                            Need help? Ask at
                            <a
                                href="mailto:${process.env.SMTP_USER}"
                                style="color: #499fb6; text-decoration: none;"
                                >
                                ${process.env.SMTP_USER}
                                </a
                            >
                        </main>

                        <footer
                            style="
                            width: 100%;
                            max-width: 490px;
                            margin: 20px auto 0;
                            text-align: center;
                            border-top: 1px solid #e6ebf1;
                            "
                        >
                            <p
                            style="
                                margin: 0;
                                margin-top: 40px;
                                font-size: 16px;
                                font-weight: 600;
                                color: #434343;
                            "
                            >
                                Predictif Sports
                            </p>
                            <p style="margin: 0; margin-top: 8px; color: #434343;">
                            Address 540, Abuja, Nigeria.
                            </p>
                            <div style="margin: 0; margin-top: 16px;">
                            <a href="" target="_blank" style="display: inline-block;">
                                <img
                                width="36px"
                                alt="Facebook"
                                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                                />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                style="display: inline-block; margin-left: 8px;"
                            >
                                <img
                                width="36px"
                                alt="Instagram"
                                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
                            /></a>
                            <a
                                href=""
                                target="_blank"
                                style="display: inline-block; margin-left: 8px;"
                            >
                                <img
                                width="36px"
                                alt="Twitter"
                                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                                />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                style="display: inline-block; margin-left: 8px;"
                            >
                                <img
                                width="36px"
                                alt="Youtube"
                                src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
                            /></a>
                            </div>
                            <p style="margin: 0; margin-top: 16px; color: #434343;">
                            Copyright © ${new Date().getFullYear()} Company. All rights reserved.
                            </p>
                        </footer>
                        </div>
                    </body>
                    </html>

            `,
        };

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    resolve(info);
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
}

