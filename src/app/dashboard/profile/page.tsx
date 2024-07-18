"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
export default function Profile() {
  const [edit, setEdit] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="w-[40%] flex flex-col items-center justify-center border-r-2 border-gray-300">
        <Image src="/batman.webp" alt="Profile" width={300} height={300} />
      </div>
      <div className="w-full flex items-center flex-col justify-center bg-gray-200">
        <h1 className="text-2xl font-bold">Perfil</h1>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Nombre"
            label="Nombre"
            value={"Diego"}
            disabled={!edit}
          />
          <Input
            placeholder="Apellido"
            label="Apellido"
            disabled={!edit}
            value={"Cedrón"}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Email"
            label="Email"
            disabled={!edit}
            value={"diego.cedron@correo.com"}
          />
          <Input
            placeholder="Teléfono"
            label="Teléfono"
            disabled={!edit}
            value={"1234567890"}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Dirección"
            label="Dirección"
            disabled={!edit}
            value={"Calle falsa 123"}
          />
          <Input
            placeholder="Ciudad"
            label="Ciudad"
            disabled={!edit}
            value={"Springfield"}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="País"
            label="País"
            disabled={!edit}
            value={"Estados Unidos"}
          />
          <Input
            placeholder="Código Postal"
            label="Código Postal"
            disabled={!edit}
            value={"12345"}
          />
        </div>
        <div className="flex items-center justify-center p-4 gap-x-4">
          <Button color="primary" onClick={() => setEdit(!edit)}>
            {" "}
            {edit ? "Guardar" : "Editar"}{" "}
          </Button>
          <Button color="warning">Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
