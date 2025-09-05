// import { NextRequest, NextResponse } from "next/server";
// import jwt from 'jsonwebtoken'

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const {username,password} = data;

//     const userId = 1;
//     const token = jwt.sign({
//         userId,
//     },'JWT_SECRET')

//     console.log(token)

//     return NextResponse.json({
//         token,
//     })

// }