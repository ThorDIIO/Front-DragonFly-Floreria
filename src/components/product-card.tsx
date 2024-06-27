"use client";
import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import ProductModal from "./product-modal";

export default function ProductCard({
  image,
  hoverImage,
  productName,
  productDescription,
  productPrice,
}: {
  image: string;
  hoverImage: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}) {
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{productDescription}</p>
        <small className="text-default-500">S/.{productPrice}</small>
        <h4 className="font-bold text-sm">{productName}</h4>
      </CardHeader>
      <div
        onMouseEnter={() => setCurrentImage(hoverImage)}
        onMouseLeave={() => setCurrentImage(image)}
      >
        <CardBody className="overflow-visible py-2 flex items-center cursor-pointer">
          <ProductModal>
            <img
              alt="Card background"
              className="object-cover rounded-xl"
              src={currentImage}
              width={120}
              height={60}
            />
          </ProductModal>
        </CardBody>
      </div>
      <div className="w-full flex items-center justify-center"></div>
    </Card>
  );
}
