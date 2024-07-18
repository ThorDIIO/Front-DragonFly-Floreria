"use client";
import {
  deleteCategory,
  getAllCategories,
} from "@/services/categories-service";
import { DeleteIcon } from "@/utils/icons/DeleteIcon";
import { EditIcon } from "@/utils/icons/EditIcon";
import { EyeIcon } from "@/utils/icons/EyeIcon";
import { SearchIcon } from "@/utils/icons/SearchIcon";
import {
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import CreateCategoryDashboard from "../components/categories/create-category-dashboard";
import UpdateDetailCategory from "../components/categories/update-detail-category-dashboard";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";

export default function CategoriesDashboard() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDetail, setOpenDetail] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null) as any;
  const [modalType, setModalType] = useState("details");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      handleReload();
    } catch (error) {
      console.error("Error al eliminar una Categoria:", error);
    }
  };

  const handleReload = async () => {
    setLoading(true);
    const data = await getAllCategories();
    setCategories(data);
    setLoading(false);
  };

  const renderCell = useCallback((category: any, columnKey: any) => {
    const cellValue = category[columnKey];
    switch (columnKey) {
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
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setCurrentCategory(category);
                  setModalType("details");
                  setOpenDetail(true);
                }}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar producto">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setCurrentCategory(category);
                  setModalType("update");
                  setOpenDetail(true);
                }}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar producto">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDeleteCategory(category.id)}
              >
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
        <CreateCategoryDashboard
          handleReload={async () => {
            setLoading(true);
            await handleReload();
          }}
        />
      </div>
      {loading ? (
        <div className="mt-8 flex justify-center items-center">
          <FlowerSpinner />
        </div>
      ) : (
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
      )}
      {currentCategory && (
        <UpdateDetailCategory
          id={currentCategory.id}
          open={openDetail}
          type={modalType}
          onClose={() => setOpenDetail(false)}
          handleReload={async () => {
            setLoading(true);
            await handleReload();
          }}
        />
      )}
    </div>
  );
}
