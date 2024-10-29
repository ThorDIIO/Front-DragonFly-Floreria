import { createProduction } from "@/services/production-service";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function CreateProductionDashboard({
  handleReload,
}: {
  handleReload: () => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCreateProduction = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      plantationType: form.get("plantationType"),
      cultivationStatus: form.get("cultivationStatus"),
      startDate: form.get("startDate"),
      endDate: form.get("endDate"),
    };

    await createProduction(data);
    handleReload(); 
  };

  return (
    <>
      <Button onPress={onOpen} color="success" className="text-white">
        Crear producción
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <form
                onSubmit={(e) => {
                  handleCreateProduction(e);
                  onClose();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  Crear producción
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-x-2">
                    {/* Tipo de Plantación */}
                    <Input
                      type="text"
                      name="plantationType"
                      label="Tipo de Plantación"
                      isRequired
                    />

                    {/* Estado de Cultivo */}
                    <Input
                      type="text"
                      name="cultivationStatus"
                      label="Estado de Cultivo"
                      isRequired
                    />

                    {/* Fecha de Inicio */}
                    <Input
                      type="date"
                      name="startDate"
                      label="Fecha de Inicio"
                      isRequired
                    />

                    {/* Fecha de Finalización */}
                    <Input
                      type="date"
                      name="endDate"
                      label="Fecha de Finalización"
                      isRequired
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" type="submit">
                    Crear producción
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


