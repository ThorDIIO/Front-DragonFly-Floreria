"use client";
import { getAllUsers } from "@/services/auth-services";
import { SearchIcon } from "@/utils/icons/SearchIcon";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Input,
  

} from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";

export default function UsersDashboard() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, [Users]);

  const renderCell = useCallback((User: any, columnKey: any) => {
    const cellValue = Users[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: User.image }}
            description={User.description}
            name={cellValue}
          />
        );
      case "firstName":
        return User.name;
      case "lastName":
        return User.lastName;
      case "username":
        return User.firsName;
        
      }
  }, []);

  const columns = [
    {
      name: "Nombre",
      uid: "username",
    },
    {
      name: "Contraseña",
      uid: "password",
    },
    {
      name: "DNI",
      uid: "dni",
    },
    {
      name: "Nombre",
      uid: "firstName",
    },
    {
      name: "Apellido",
      uid: "lastName",
    },
  ];

  return (
    <div className="flex flex-col gap-y-2 p-2">
      <div className="flex justify-between px-10 items-center">
        <Input
          label="Buscador"
          isClearable
          radius="lg"
          className="mr-2"
          placeholder="Escribe para buscar ..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
        <UsersDashboard />
        </div>
      <Table aria-label="Product Table - DragonFly">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={Users}>
          {(item: any) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
