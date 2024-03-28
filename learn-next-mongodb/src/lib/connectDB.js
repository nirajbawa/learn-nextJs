import mongoose from "mongoose"

export default async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("db connected successfully")
    } catch (error) {
        console.log(error)
    }
}