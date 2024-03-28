import React from 'react'

async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data.json();
}

const page = async () => {
    const data = await fetchData()
    console.log(data)
    return (
        <div className="p-5">
            {data.map((value, index) => {
                return (<div key={index} className='m-5'>
                    <p>id : {value.id}</p>
                    <p>title: {value.title}</p>
                </div>)
            })}
        </div>
    )
}

export default page