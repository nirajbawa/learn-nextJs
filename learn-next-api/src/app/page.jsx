import Image from "next/image";

async function fetchData() {
  const data = await fetch("http://localhost:3000/api/blog/posts")
  return await data.json()
}

export default async function Home() {
  let data = await fetchData()
  console.log(data)

  return (
    <main >
      {
        data.map((value, key) => (
          <div key={key}>
            <p>{value.id}</p>
            <p>{value.title}</p>
          </div>
        ))
      }
    </main>
  );
}
