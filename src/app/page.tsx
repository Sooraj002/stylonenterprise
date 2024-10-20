import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="card">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        <p>Item 1</p>
      </div>
    </>
  );
}
