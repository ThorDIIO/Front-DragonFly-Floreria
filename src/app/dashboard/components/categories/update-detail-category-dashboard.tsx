import { getCategoryById, updateCategory } from "@/services/categories-service";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function UpdateDetailCategory({
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
  const [category, setCategory] = useState({ name: "", description: "" });

  useEffect(() => {
    if (open) {
      const fetchCategory = async () => {
        try {
          const data = await getCategoryById(id);
          setCategory(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchCategory();
    }
  }, [open, id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateCategory = async (e: any) => {
    const form = {
      name: category.name,
      description: category.description,
    };
    try {
      await updateCategory(form, id);
      handleReload();
    } catch (error) {
      console.error("Error al actualizar una categoria:", error);
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
                    handleUpdateCategory(e);
                  }
                  closeModal();
                  onClose();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  {type === "update" ? "Actualizar" : "Detalles de "} categoria
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
                      value={category.name}
                      onChange={handleInputChange}
                    />

                    {/* Descripción */}
                    <Input
                      disabled={type === "details"}
                      type="textarea"
                      name="description"
                      label="Descripción"
                      isRequired
                      value={category.description}
                      onChange={handleInputChange}
                    />
                  </div>
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
