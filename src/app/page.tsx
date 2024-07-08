import Carousel from "@/components/carousel/carousel";
import FeaturedProducts from "@/components/home/featured-products";
import MostSelled from "@/components/home/most-selled";
import NewProducts from "@/components/home/new-products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-y-20">
      <Carousel />
      <FeaturedProducts />
      <MostSelled />
      <NewProducts />
    </div>
  );
}
