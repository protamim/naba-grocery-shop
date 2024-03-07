import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex justify-center item-center">
      <h1 className="text-4xl text-blue-600">Hello World</h1>
      <Image src={"https://i.imgur.com/tIKR6B8.jpeg"} alt="dummy" width={400} height={400} />
    </main>
  );
}
