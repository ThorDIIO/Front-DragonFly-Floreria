import { getAllCategories } from "@/services/categories-service";
import { createProduct, deleteProduct } from "@/services/product-service";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function CreateProductDashboard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
      console.log(data);
    });
  }, []);

  const handleCreateProduct = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      price: form.get("price"),
      stock: form.get("stock"),
      category: {
        id: form.get("category"),
      },
      color: form.get("color"),
      flowerType: form.get("plantType"),
      discount: form.get("discount"),
      sku: "123456",
      image: form.get("image"),
      hoverImage: form.get("imageHover"),
    };

    await createProduct(data);
  };

  return (
    <>
      <Button onPress={onOpen} color="success" className="text-white">
        Crear producto
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <form
                onSubmit={(e) => {
                  handleCreateProduct(e);
                  onClose();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  Crear producto
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-x-2">
                    {/* Nombre */}
                    <Input type="text" name="name" label="Nombre" isRequired />

                    {/* Descripción */}
                    <Input
                      type="textarea"
                      name="description"
                      label="Descripción"
                      isRequired
                    />
                  </div>

                  <div className="flex gap-x-2">
                    {/* Precio */}
                    <Input
                      label="Precio"
                      name="price"
                      placeholder="0.00"
                      type="number"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">$</span>
                        </div>
                      }
                      isRequired
                    />

                    {/* Stock */}
                    <Input
                      label="Stock"
                      name="stock"
                      type="number"
                      placeholder="0"
                      isRequired
                    />
                  </div>

                  <div className="flex gap-x-2">
                    {/* Categoría */}
                    <Select
                      label="Selecciona una categoria"
                      name="category"
                      isRequired
                    >
                      {categories.map((category: any) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </Select>

                    {/* Color */}
                    <Input
                      label="Color"
                      name="color"
                      placeholder="Ejemplo: Verde"
                      isRequired
                    />
                  </div>

                  {/* Tipo de Planta */}
                  <Input
                    label="Tipo de planta"
                    name="plantType"
                    placeholder="Ejemplo: Suculenta"
                    isRequired
                  />

                  {/* Descuento */}
                  <Input
                    label="Descuento"
                    name="discount"
                    placeholder="0.00"
                    type="number"
                    isRequired
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                      </div>
                    }
                  />

                  {/* SKU */}
                  <Input
                    label="SKU"
                    name="sku"
                    placeholder="Ejemplo: 123456"
                    description="El SKU es un código único para cada producto. Autogenerado."
                    isReadOnly
                    defaultValue="123456"
                    isDisabled
                  />

                  {/* Imagen */}
                  <Input
                    name="image"
                    description="Selecciona una imagen para tu producto."
                  />
                  {/* Imagen Hover */}
                  <Input
                    name="imageHover"
                    description="Selecciona una imagen para tu producto."
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" type="submit">
                    Crear producto
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
