"use client";
import { getAllCategories } from "@/services/categories-service";
import { DeleteIcon } from "@/utils/icons/DeleteIcon";
import { EditIcon } from "@/utils/icons/EditIcon";
import { EyeIcon } from "@/utils/icons/EyeIcon";
import { SearchIcon } from "@/utils/icons/SearchIcon";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import CreateCategoryDashboard from "../components/categories/create-category-dashboard";

export default function CategoriesDashboard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, [categories]);

  const renderCell = useCallback((category: any, columnKey: any) => {
    const cellValue = category[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: category.image }}
            description={category.description}
            name={cellValue}
          />
        );
      case "category":
        return category.category.name;
      case "price":
        return `$${cellValue}`;
      case "stock":
        return `${cellValue} unidades`;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar producto">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar producto">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    {
      name: "Nombre",
      uid: "name",
    },
    {
      name: "Descripcion",
      uid: "description",
    },
    {
      name: "Acciones",
      uid: "actions",
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
        <CreateCategoryDashboard />
      </div>

      <Table aria-label="Category Table - DragonFly">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={categories}>
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
