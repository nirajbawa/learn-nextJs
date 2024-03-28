import connectDB from "@/lib/connectDB"
import Post from "@/models/post"

const create = async (formData) => {
    'use server'
    await connectDB()
    const result = await Post.create({
        title: formData.get("title"),
        content: formData.get("content")
    })
    console.log("result", result)
}

const DataActionPost = () => {
    return (
        <div>
            <form action={create}>
                title : <input type="text" className="text-black" name="title" />
                <br />
                <br />
                body : <input type="text" className="text-black" name="content" />
                <br />
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default DataActionPost