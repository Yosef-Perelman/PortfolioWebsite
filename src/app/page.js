import Image from "next/image";
import OpenSection from "./components/OpenSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container">
      <div className='container  mx-auto px-12 py-4'>
      <OpenSection />
      </div>
    </main>
  );
}
