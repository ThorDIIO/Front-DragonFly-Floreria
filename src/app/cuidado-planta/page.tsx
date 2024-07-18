"use client";
import Image from "next/image";

import { Card, CardBody, CardFooter } from "@nextui-org/react";

export default function CuidadoPlanta() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
  ];

  return (
    <div className="flex items-center flex-col w-full gap-y-6 ">
      <div className="flex flex-col items-center justify-center">
        <h1>Cuidados de la planta</h1>
        <p>Aprende a cuidar tus plantas con estos consejos</p>
      </div>

      <div className="flex flex-row-reverse justify-center gap-x-10 w-full">
        <Image
          src="/mas-vendidos.jpg"
          alt="Orquidea"
          width={400}
          height={300}
          className="border-2 border-gray-200 rounded-md shadow-sm"
        />
        <div className="gap-2 grid grid-cols-2">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  width={200}
                  height={140}
                  alt={item.title}
                  className="w-full object-cover h-[140px] shadow-lg rounded-t-lg"
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
    </div>
  );
}
