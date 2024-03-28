import { NextResponse } from "next/server"


export async function GET(req) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return NextResponse.json(await res.json())
}