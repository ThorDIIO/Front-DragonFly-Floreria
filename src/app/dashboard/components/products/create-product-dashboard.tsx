import { getAllCategories } from "@/services/categories-service";
import { createProduct, updateProduct } from "@/services/product-service";
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
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

export default function CreateProductDashboard({
  handleReload,
  productData, // New prop for the product being edited
}: {
  handleReload: () => void;
  productData?: any; // Optional product data
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(""); // State for the uploaded image URL
  const [hoverImage, setHoverImage] = useState(""); // State for the hover image URL

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
      console.log(data);
    });

    // If productData is provided, set the initial states for editing
    if (productData) {
      setImage(productData.image || ""); // Ensure a default value
      setHoverImage(productData.hoverImage || ""); // Ensure a default value
    }
  }, [productData]); // Re-run effect if productData changes

  const handleFileUpload = (file:any) => {
    if (file && file.allEntries.length > 0) {
      const uploadedFileUrl = file.allEntries[0].cdnUrl;
      setImage(uploadedFileUrl); // Save the uploaded image URL
      console.log('File uploaded:', uploadedFileUrl);
    }
  };

  const handleHoverImageUpload = (file:any) => {
    if (file && file.allEntries.length > 0) {
      const uploadedHoverImageUrl = file.allEntries[0].cdnUrl;
      setHoverImage(uploadedHoverImageUrl); // Save the uploaded hover image URL
      console.log('Hover image uploaded:', uploadedHoverImageUrl);
    }
  };

  const handleCreateOrUpdateProduct = async (e: any) => {
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
      sku: productData ? productData.sku : "123456", // Keep the SKU if editing
      image: image || productData?.image || "", // Use uploaded image or existing one
      hoverImage: hoverImage || productData?.hoverImage || "", // Use uploaded hover image or existing one
    };

    if (productData) {
      await updateProduct(productData.id, data); // Call update function if editing
    } else {
      await createProduct(data); // Call create function if adding new
    }

    handleReload();
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
                  handleCreateOrUpdateProduct(e);
                  onClose();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  {productData ? "Editar producto" : "Crear producto"}
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-x-2">
                    {/* Nombre */}
                    <Input
                      type="text"
                      name="name"
                      label="Nombre"
                      isRequired
                      defaultValue={productData?.name || ""} // Pre-fill for editing
                    />

                    {/* Descripción */}
                    <Input
                      type="textarea"
                      name="description"
                      label="Descripción"
                      isRequired
                      defaultValue={productData?.description || ""} // Pre-fill for editing
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
                      defaultValue={productData?.price || ""} // Pre-fill for editing
                    />

                    {/* Stock */}
                    <Input
                      label="Stock"
                      name="stock"
                      type="number"
                      placeholder="0"
                      isRequired
                      defaultValue={productData?.stock || ""} // Pre-fill for editing
                    />
                  </div>

                  <div className="flex gap-x-2">
                    {/* Categoría */}
                    <Select
                      label="Selecciona una categoria"
                      name="category"
                      isRequired
                      defaultValue={productData?.category.id || ""} // Pre-fill for editing
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
                      defaultValue={productData?.color || ""} // Pre-fill for editing
                    />
                  </div>

                  {/* Tipo de Planta */}
                  <Input
                    label="Tipo de planta"
                    name="plantType"
                    placeholder="Ejemplo: Suculenta"
                    isRequired
                    defaultValue={productData?.flowerType || ""} // Pre-fill for editing
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
                    defaultValue={productData?.discount || ""} // Pre-fill for editing
                  />

                  {/* SKU */}
                  <Input
                    label="SKU"
                    name="sku"
                    placeholder="Ejemplo: 123456"
                    description="El SKU es un código único para cada producto. Autogenerado."
                    isReadOnly
                    defaultValue={productData ? productData.sku : "123456"} // Keep SKU if editing
                    isDisabled
                  />

                  {/* Imagen */}
                  <div>
                    <FileUploaderRegular
                      multiple={false} // Permite cargar un solo archivo
                      onChange={(file) => handleFileUpload(file)}
                      sourceList="local, url, camera, dropbox"
                      classNameUploader="uc-light"
                      pubkey="27e04b0cbb2011c04356"
                    />
                    {/* Vista previa de la imagen actual */}
                    {image || productData?.image ? (
                      <div>
                        <img
                          src={image || productData.image}
                          alt="Vista previa"
                          className="mt-2"
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Imagen Hover */}
                  <div>
                    <FileUploaderRegular
                      multiple={false} // Permite cargar un solo archivo
                      onChange={(file) => handleHoverImageUpload(file)}
                      sourceList="local, url, camera, dropbox"
                      classNameUploader="uc-light"
                      pubkey="27e04b0cbb2011c04356"
                    />
                    {/* Vista previa de la imagen hover actual */}
                    {hoverImage || productData?.hoverImage ? (
                      <div>
                        <img
                          src={hoverImage || productData.hoverImage}
                          alt="Vista previa hover"
                          className="mt-2"
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" type="submit">
                    {productData ? "Actualizar producto" : "Crear producto"}
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
