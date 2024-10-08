"use client";
import { register } from "@/services/auth-services";
import { Button, Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EyeFilledIcon } from "../../../../public/svg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../../public/svg/EyeSlashFilledIcon";

const documentRules = {
  DNI: 8,
  RUC: 11,
  "Carnet de extranjería": 12,
  Pasaporte: 9,
};

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    documentType: "DNI",
    documentNumber: "",
    birthDate: "",
    address: "",
  });
  const [docError, setDocError] = useState("");
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "documentNumber") {
      const docType = formData.documentType;
      const maxLength = documentRules[docType];

      if (value.length > maxLength) return; 
      setDocError(value.length !== maxLength ? `Debe tener ${maxLength} caracteres` : "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDocumentTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      documentType: value,
      documentNumber: "", 
    }));
    setDocError(""); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await register(formData);
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen bg-gray-200">
      <div className="hidden md:flex w-1/3 relative">
        <a href="/">
          <Image
            src="/anturio.register.png"
            alt="anturio.register"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 bg-gray-100"> {/* Fondo gris claro */}
        <div className="max-w-xl w-full bg-gray-50 rounded-lg shadow-md p-10"> {/* Fondo gris sutil */}
          <h1 className="text-4xl font-bold leading-tight text-center text-gray-900 mb-6">
            Crea una Cuenta
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="flex gap-4">
              <Input
                value={formData.firstName}
                onChange={handleInputChange}
                name="firstName"
                label="Nombres"
                placeholder="Ingresa tu nombre"
                isRequired
              />
              <Input
                value={formData.lastName}
                onChange={handleInputChange}
                name="lastName"
                label="Apellidos"
                placeholder="Ingresa tus apellidos"
                isRequired
              />
            </div>

            {/* Email */}
            <Input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              label="Correo Electrónico"
              placeholder="Ingresa tu correo electrónico"
              isRequired
            />

            {/* Password and Confirm Password */}
            <div className="flex gap-4">
              <Input
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                isRequired
                endContent={
                  <button type="button" onClick={toggleVisibility}>
                    {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
              <Input
                value={formData.confirmPassword}
                onChange={handleInputChange}
                name="confirmPassword"
                label="Confirma Contraseña"
                placeholder="Repite tu contraseña"
                isRequired
                endContent={
                  <button type="button" onClick={toggleConfirmPasswordVisibility}>
                    {confirmPasswordVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                  </button>
                }
                type={confirmPasswordVisible ? "text" : "password"}
              />
            </div>

            {/* Document Type and Document Number */}
            <div className="flex gap-4">
              <Select
                label="Tipo de Documento"
                name="documentType"
                value={formData.documentType}
                onChange={(e) => handleDocumentTypeChange(e.target.value)}
              >
                {Object.keys(documentRules).map((doc) => (
                  <SelectItem key={doc} value={doc}>
                    {doc}
                  </SelectItem>
                ))}
              </Select>
              <Input
                value={formData.documentNumber}
                onChange={handleInputChange}
                name="documentNumber"
                label="Número de Documento"
                placeholder={`Ingresa tu ${formData.documentType}`}
                errorMessage={docError}
                isRequired
              />
            </div>

            {/* Birth Date and Address */}
            <div className="flex gap-4">
              <Input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                label="Fecha de Nacimiento"
                isRequired
              />
              <Input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                label="Dirección"
                placeholder="Ingresa tu dirección"
                isRequired
              />
            </div>

            {/* Terms and Submit */}
            <div>
              <Checkbox
                checked={isSelected}
                onChange={() => setIsSelected(!isSelected)}
              >
                <p className="text-sm text-gray-600">
                  Acepto los{" "}
                  <Link href="/terms" className="text-pink-500">
                    términos y condiciones
                  </Link>
                </p>
              </Checkbox>
            </div>
            <div className="flex items-center justify-center mt-6">
              <Button color="primary" type="submit" isLoading={loading}>
                Registrarse
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/auth/login" className="text-pink-500 hover:underline">
                Inicia sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
