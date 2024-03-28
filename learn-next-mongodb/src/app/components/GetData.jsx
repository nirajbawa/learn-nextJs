
const fetchdata = async () => {
    const res = await fetch("http://localhost:3000/api/posts")
    return await res.json()
}



const GetData = async () => {
    const posts = await fetchdata()
    console.log(posts)
    return (
        <div>
            {
                posts.data.map((val, key) => (
                    <div key={key}>
                        <p>title : {val.title}</p>
                        <p>content : {val.content}</p>
                        <p>created at : {val.createdAt}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default GetData