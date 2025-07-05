import { NextResponse } from "next/server";


export async function POST(request) {
    const { message } = request.body;

    console.log(request.body
    );

    return NextResponse.json({
        message: message
    })

}