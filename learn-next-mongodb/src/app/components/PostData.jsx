'use client'
import { useState } from "react"


function PostData() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            body: JSON.stringify(formData)
        })
        console.log("response : ", res)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                title : <input type="text" className="text-black" name="title" onChange={handleChange} value={formData.title} />
                <br />
                <br />
                body : <input type="text" className="text-black" name="content" onChange={handleChange} value={formData.content} />
                <br />
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default PostData