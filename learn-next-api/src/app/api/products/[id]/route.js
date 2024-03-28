import { NextResponse } from "next/server"

export const GET = async (req, context) => {
    // console.log("Req : ", req)
    console.log(context)
    return NextResponse.json({ msg: "hello" })
}