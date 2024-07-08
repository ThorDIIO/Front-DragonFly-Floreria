"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export default function FeaturedProducts() {
  const list = [
    {
      title: "Orange",
      img: "/Orquidea.webp",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/Orquidea.webp",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/Orquidea.webp",
      price: "$10.00",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col w-full gap-y-6">
      <div className="flex items-center w-full px-20">
        <hr className="w-full" />
        <h2 className="font-bold text-center w-1/2">Productos destacados</h2>
        <hr className="w-full" />
      </div>
      <div className="h-full w-1/2 gap-2 gap-x-16 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                width={200}
                height={140}
                className="w-full object-cover shadow-sm rounded-t-md"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
