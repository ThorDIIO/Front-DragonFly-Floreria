"use client";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Orchid from "@/../public/orchid.webp";
import Orchid2 from "@/../public/orquidea-fondo-negro.jpg";

export default function CuidadoPlanta() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 m-auto py-3">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="z-0 h-full object-cover"
          width={800}
          src={Orchid2}
        />
      </Card>
      <button
        className="col-span-12 sm:col-span-4 h-[300px]"
        onClick={() => {
          console.log("Si está funcionando");
        }}
      >
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Cuidado para una planta
            </p>
            <h4 className="text-white font-medium text-large">
              ¿Cómo cuidar una orquídea?
            </h4>
          </CardHeader>
          <Image
            alt="Card background"
            className="z-0 h-full object-cover"
            width={400}
            src={Orchid2}
          />
        </Card>
      </button>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Supercharged
          </p>
          <h4 className="text-white font-medium text-large">
            Creates beauty like a beast
          </h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          width={400}
          height={300}
          src={Orchid2}
        />
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 bg-black sm:col-span-5"
      >
        <Image
          alt="Card example background"
          className="z-0 w-full -translate-y-6 object-cover"
          width={400}
          height={300}
          src={Orchid}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Your day your way
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Your checklist for better sleep
          </h4>
        </CardHeader>
        <Image
          alt="Relaxing app background"
          className="z-0 w-full object-cover"
          height={300}
          src={Orchid2}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full bg-black"
              width={40}
              height={40}
              src={Orchid2}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
