"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import Orchid from "../../public/orchid.webp";

export default function ProductModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        size="4xl"
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Orquídea - S/. 98.00
            </ModalHeader>
            <ModalBody>
              <div
                className="
                    flex flex-col gap-4
                    md:flex-row md:gap-8
                    items-center justify-center
                "
              >
                <Image
                  src={Orchid}
                  alt="Orquídea"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
                <div className="flex flex-col items-center gap-y-20">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <Button color="success" endContent={<FaPlus />}>
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
