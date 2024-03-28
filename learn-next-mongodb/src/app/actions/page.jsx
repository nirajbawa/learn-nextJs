import connectDB from "@/lib/connectDB"
import Post from "@/models/post";
import DataPost from "./DataActionPost";

const page = async () => {
    await connectDB();
    const posts = await Post.find();
    console.log(posts)
    return (
        <div>
            {
                posts.map((val, key) => (
                    <div key={key}>
                        <p>title : {val.title}</p>
                        <p>content : {val.content}</p>
                        <p>created at : {String(val.createdAt)}</p>
                    </div>
                ))
            }
            <br />
            <br />
            <DataPost />
        </div>
    )
}

export default page