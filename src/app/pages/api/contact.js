import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // Replace with your SMTP host
        port: process.env.SMTP_PORT, // Replace with your SMTP port
        secure: false, // Adjust based on your SMTP server configuration
        auth: {
            user: process.env.SMTP_USER, // Replace with your email address
            pass: process.env.SMTP_PASSWORD // Replace with your email password
        }
    });

    try {
        const mailOptions = {
            from: email,
            to: 'nicolasg99dr@gmail.com', // Your email address
            subject: 'New Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Success! Your message has been sent.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
