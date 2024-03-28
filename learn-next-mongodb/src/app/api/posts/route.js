import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Post from "@/models/post";

export async function GET(req) {
    try {
        await connectDB()
        const result = await Post.find();
        console.log(result)
        return NextResponse.json({ data: result })
    }
    catch (error) {
        return NextResponse.json({ msg: "something went wrong" }, { status: 500 })
    }

}


export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json();

        const result = await Post.create(body);
        return NextResponse.json({ data: result }, { status: 201 })
    }
    catch (error) {
        return NextResponse.json({ msg: "something went wrong" }, { status: 400 })
    }

}