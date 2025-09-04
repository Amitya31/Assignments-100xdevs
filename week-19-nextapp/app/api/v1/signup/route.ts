import { NextRequest, NextResponse,  } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient() 

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data.body);
    await prismaClient.user.create({
        data:{
            username:data.body.username,
            password:data.body.password
        }
    })

    return NextResponse.json({'message':'User created successfully'})
    
}

export async function GET(req:NextRequest){
    const user = await prismaClient.user.findFirst();
    return NextResponse.json({
        user
    })
}