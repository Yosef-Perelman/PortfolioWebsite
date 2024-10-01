import Image from "next/image";
import OpenSection from "./components/OpenSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container">
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
      <OpenSection />
      </div>
    </main>
  );
}
