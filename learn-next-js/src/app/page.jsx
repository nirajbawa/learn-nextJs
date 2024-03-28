import Image from "next/image";
import LearnLink from "./componets/LearnLink";
import img from "../../public/next.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl capitalize">niraj bava</h1>
      <Image src={img} />
      <LearnLink />
    </main>
  );
}
