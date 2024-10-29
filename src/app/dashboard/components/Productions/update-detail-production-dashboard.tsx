import { getProductionById, updateProduction } from "@/services/production-service";
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

export default function UpdateProductionDashboard({
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
  const [production, setProduction] = useState({
    plantationType: "",
    cultivationStatus: "",
    startDate: "",
    endDate: ""
  });

  useEffect(() => {
    if (open) {
      const fetchProduction = async () => {
        try {
          const data = await getProductionById(id);
          setProduction(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProduction();
    }
  }, [open, id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProduction((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduction = async (e: any) => {
    const form = {
      plantationType: production.plantationType,
      cultivationStatus: production.cultivationStatus,
      startDate: production.startDate,
      endDate: production.endDate,
    };
    try {
      await updateProduction(form, id);
      handleReload();
    } catch (error) {
      console.error("Error al actualizar la producción:", error);
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
                    handleUpdateProduction(e);
                  }
                  closeModal();
                  onClose();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  {type === "update" ? "Actualizar" : "Detalles de"} producción
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-x-2">
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="plantationType"
                      label="Tipo de Plantación"
                      isRequired
                      value={production.plantationType}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="cultivationStatus"
                      label="Estado de Cultivo"
                      isRequired
                      value={production.cultivationStatus}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="date"
                      name="startDate"
                      label="Fecha de Inicio"
                      isRequired
                      value={production.startDate}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="date"
                      name="endDate"
                      label="Fecha de Finalización"
                      isRequired
                      value={production.endDate}
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

