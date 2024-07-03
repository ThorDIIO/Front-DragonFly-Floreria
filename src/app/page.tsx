import Carousel from "@/components/carousel/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-sm:hidden">
        <Carousel />
      </div>
      
    </div>
  );
}