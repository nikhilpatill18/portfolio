import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'


export async function POST(request) {
    try {
        console.log("hi");
        const data = await request.json();

        const { firstname, lastname, message, email, subject } = data
        console.log(data);


        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true, // true for port 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from: `<${email}>`,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: message,
            html: `<p><strong>Name:</strong> ${firstname, lastname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
        });


    } catch (error) {
        console.log(error);


    }
    console.log('done');


    return new Response(JSON.stringify({ success: true }), { status: 200 });


}