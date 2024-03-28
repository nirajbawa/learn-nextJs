import { NextResponse } from "next/server"

export async function GET(req) {
    // console.log(req)

    // headers
    // const requestHeaders = new Headers(req.headers);
    // console.log(requestHeaders);

    // const { searchParams } = new URL(req.url);
    // const searchParams = req.nextUrl.searchParams
    // console.log(searchParams.get("name"))
    // const searchParams = req.nextUrl.searchParams


    const cook1 = req.cookies
    console.log(cook1)

    return NextResponse.json({ msg: "hello this is my response." })
}

export async function POST(req) {
    // const res = await req.json()
    // console.log("Res Json", res)

    const formData = await req.formData()
    console.log("Form data : ", formData.get("title"))
    console.log("Form data : ", formData.get("description"))
    return NextResponse.json({ message: "hello" })
}