import { getAllCategories } from "@/services/categories-service";
import { getProductById, updateProduct } from "@/services/product-service";
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
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function UpdateDetailProduct({
  id,
  open,
  type,
  onClose,
  handleReload,
}: {
  id: string;
  open: boolean;
  type: string;
  onClose: () => void;
  handleReload: () => void;
}) {
  const [product, setProduct] = useState({} as any);
  const [categories, setCategories] = useState([] as any);

  useEffect(() => {
    if (open) {
      const fetchProduct = async () => {
        try {
          const data = await getProductById(id);
          setProduct(data);
        } catch (error) {
          console.error(error);
        }
      };

      const fetchCategories = async () => {
        try {
          const data = await getAllCategories();
          setCategories(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProduct();
      fetchCategories();
    }
  }, [open, id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProduct((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = async (e: any) => {
    e.preventDefault();
    try {
      await updateProduct(product, id);
      handleReload();
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      <Modal
        isOpen={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) onClose();
        }}
        size="3xl"
      >
        <ModalContent>
          {(closeModal) => (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (type === "update") {
                    handleUpdateProduct(e);
                  }
                  closeModal();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  {type === "update" ? "Actualizar" : "Detalles de "} producto
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-x-2">
                    {/* Nombre */}
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="name"
                      label="Nombre"
                      isRequired
                      value={product.name}
                      onChange={handleInputChange}
                    />

                    {/* Descripción */}
                    <Input
                      disabled={type === "details"}
                      type="textarea"
                      name="description"
                      label="Descripción"
                      isRequired
                      value={product.description}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex gap-x-2">
                    {/* Precio */}
                    <Input
                      disabled={type === "details"}
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
                      value={product.price}
                      onChange={handleInputChange}
                    />

                    {/* Stock */}
                    <Input
                      disabled={type === "details"}
                      label="Stock"
                      name="stock"
                      type="number"
                      placeholder="0"
                      isRequired
                      value={product.stock}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex gap-x-2">
                    {/* Categoría */}
                    <Select
                      disabled={type === "details"}
                      label="Selecciona una categoria"
                      name="category"
                      isRequired
                      value={product.category}
                      onChange={(value: any) => {
                        setProduct((prev: any) => ({
                          ...prev,
                          category: value,
                        }));
                      }}
                    >
                      {categories.map((category: any) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </Select>

                    {/* Color */}
                    <Input
                      disabled={type === "details"}
                      label="Color"
                      name="color"
                      placeholder="Ejemplo: Verde"
                      isRequired
                      value={product.color}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Tipo de Planta */}
                  <Input
                    disabled={type === "details"}
                    label="Tipo de planta"
                    name="plantType"
                    placeholder="Ejemplo: Suculenta"
                    isRequired
                    value={product.flowerType}
                    onChange={handleInputChange}
                  />

                  {/* Descuento */}
                  <Input
                    disabled={type === "details"}
                    label="Descuento"
                    name="discount"
                    placeholder="0.00"
                    type="number"
                    isRequired
                    value={product.discount}
                    onChange={handleInputChange}
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                      </div>
                    }
                  />

                  {/* SKU */}
                  <Input
                    disabled
                    label="SKU"
                    name="sku"
                    placeholder="Ejemplo: 123456"
                    description="El SKU es un código único para cada producto. Autogenerado."
                    isReadOnly
                    defaultValue={product.sku}
                    isDisabled
                  />

                  {/* Imagen */}
                  <Input
                    disabled={type === "details"}
                    name="image"
                    description={
                      type === "details"
                        ? "Imagen de producto"
                        : "Selecciona una imagen para tu producto."
                    }
                    value={product.image}
                    onChange={handleInputChange}
                  />
                  {/* Imagen Hover */}
                  <Input
                    disabled={type === "details"}
                    name="imageHover"
                    description={
                      type === "details"
                        ? "Imagen de hover"
                        : "Selecciona una imagen para tu producto."
                    }
                    value={product.hoverImage}
                    onChange={handleInputChange}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  {type === "update" && (
                    <Button color="success" type="submit">
                      Actualizar
                    </Button>
                  )}
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
