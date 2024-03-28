import Image from "next/image";
import GetData from "./components/GetData";
import PostData from "./components/PostData";

export default function Home() {
  return (
    <main>
      <GetData />
      <br />
      <br />
      <PostData />
    </main>
  );
}
