"use client";
import { EditIcon } from "@/utils/icons/EditIcon";
import { Button, Chip, Input, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { BiSave } from "react-icons/bi";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "Diego",
    apellido: "Cedrón",
    email: "diego.cedron@correo.com",
    telefono: "1234567890",
    direccion: "Calle falsa 123",
    ciudad: "Springfield",
    pais: "Estados Unidos",
    codigoPostal: "12345",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex h-screen">
      <div className="w-[40%] flex flex-col items-center justify-center border-r-2 border-gray-300">
        <Image
          src="/batman.webp"
          alt="Profile"
          width={300}
          height={300}
          className="hover:scale-105 transition-all"
        />
      </div>
      <div className="w-full flex items-center flex-col justify-center bg-gray-200">
        <div className="flex p-4 gap-x-4 w-full">
          <div className="flex items-center w-full gap-x-2">
            <Input
              placeholder="Nombre"
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              disabled={!edit}
              onChange={handleInputChange}
            />
            <Chip color="secondary">Usuario</Chip>
          </div>
          <Input
            placeholder="Apellido"
            label="Apellido"
            name="apellido"
            disabled={!edit}
            value={formData.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Email"
            label="Email"
            name="email"
            disabled={!edit}
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Teléfono"
            label="Teléfono"
            name="telefono"
            disabled={!edit}
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Dirección"
            label="Dirección"
            name="direccion"
            disabled={!edit}
            value={formData.direccion}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Ciudad"
            label="Ciudad"
            name="ciudad"
            disabled={!edit}
            value={formData.ciudad}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="País"
            label="País"
            name="pais"
            disabled={!edit}
            value={formData.pais}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Código Postal"
            label="Código Postal"
            name="codigoPostal"
            disabled={!edit}
            value={formData.codigoPostal}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-center p-4 gap-x-4">
          <Tooltip content={edit ? "Guardar" : "Editar"} placement="bottom">
            <Button
              variant="ghost"
              color={edit ? "success" : "secondary"}
              onClick={() => setEdit(!edit)}
              isIconOnly={edit}
            >
              {edit ? <BiSave /> : <EditIcon size={40} />}
            </Button>
          </Tooltip>
          {edit && (
            <Button
              variant="ghost"
              color="danger"
              onClick={() => setEdit(false)}
            >
              Cancelar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
