"use client";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCart } from "../context/cart-context";
import { useState } from "react";
import Map from "@/components/google-map";

const documentRules = {
  DNI: 8,
  RUC: 11,
  "Carnet de extranjería": 12,
  Pasaporte: 9,
};

export default function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    documentType: "",
    documentNumber: "",
    birthDate: "",
    shippingAddress: "",
    deliveryDate: "",
    deliveryTime: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);
  const [docError, setDocError] = useState("");
  const documentTypes = ["DNI", "RUC", "Carnet de extranjería", "Pasaporte"];
  const timeOptions = ["12:00 a 14:00", "15:00 a 17:00", "18:00 a 20:00"];

  console.log(cart);

  // Calcular el total del carrito
  const total = cart.reduce(
    (acc: any, item: any) => acc + item.productPrice * item.quantity,
    0
  );

  // Manejar cambios en los inputs del formulario
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Lógica para manejar el número de documento
    if (name === "documentNumber") {
      const docType = customerDetails.documentType;
      const maxLength = documentRules[docType];
      
      // Validar longitud máxima
      if (value.length > maxLength) return;

      // Actualizar error si no cumple con la longitud máxima
      setDocError(value.length !== maxLength ? `Debe tener ${maxLength} caracteres` : "");
    }

    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Manejar cambios en el tipo de documento
  const handleDocumentTypeChange = (value: string) => {
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      documentType: value,
      documentNumber: "", // Limpiar el número de documento al cambiar el tipo
    }));
    setDocError(""); // Limpiar el mensaje de error
  };

  // Validar el formulario
  const validateForm = (): boolean => {
    const {
      firstName,
      lastName,
      email,
      phone,
      documentType,
      documentNumber,
      shippingAddress,
      deliveryDate,
      deliveryTime,
    } = customerDetails;

    const isValid = [
      firstName,
      lastName,
      email,
      phone,
      documentType,
      documentNumber,
      shippingAddress,
      deliveryDate,
      deliveryTime,
    ].every(Boolean);

    setIsValid(isValid);
    return isValid;
  };

  // Proceder al pago
  const handleProceedToPayment = () => {
    if (validateForm()) {
      alert("Formulario válido. Procediendo al pago...");
      // Aquí puedes agregar la lógica para procesar el pago
    } else {
      alert("Por favor completa todos los campos obligatorios.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Información del Cliente</h2>
          <form className="flex flex-col gap-6">
            <div className="flex items-center gap-x-2 justify-between">
              <Input
                label="Nombres"
                name="firstName"
                value={customerDetails.firstName}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Apellidos"
                name="lastName"
                value={customerDetails.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex items-center gap-x-2 justify-between">
              <Input
                label="Correo Electrónico"
                name="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Número de Teléfono"
                name="phone"
                value={customerDetails.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex items-center gap-x-2 justify-between">
              <Select
                label="Tipo de Documento"
                name="documentType"
                value={customerDetails.documentType}
                onChange={(e) => handleDocumentTypeChange(e.target.value)}
              >
                {documentTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </Select>
              <Input
                label="Número de Documento"
                name="documentNumber"
                value={customerDetails.documentNumber}
                onChange={handleInputChange}
                required
              />
              {docError && <p className="text-red-500">{docError}</p>} {/* Mostrar error */}
            </div>
            <div className="flex items-center gap-x-2 justify-between">
              <Input
                type="date"
                label="Fecha de Entrega"
                name="deliveryDate"
                value={customerDetails.deliveryDate}
                onChange={handleInputChange}
                required
              />
              <Select
                label="Rango de Hora"
                name="deliveryTime"
                value={customerDetails.deliveryTime}
                onChange={handleInputChange}
                required
              >
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </form>
          {!isValid && (
            <p className="text-red-500">
              Por favor completa todos los campos obligatorios.
            </p>
          )}
        </div>

        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Resumen del Pedido</h2>
          <Table>
            <TableHeader>
              <TableColumn>Imagen</TableColumn>
              <TableColumn>Producto</TableColumn>
              <TableColumn>Cantidad</TableColumn>
              <TableColumn>Precio</TableColumn>
              <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img src={item.image} alt={item.productName} />
                  </TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min={1}
                      value={item.quantity + ""}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </TableCell>
                  <TableCell>S/. {item.productPrice.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h3 className="text-xl font-bold mt-4">
            Total: S/. {total.toFixed(2)}
          </h3>
          <Button onClick={handleProceedToPayment} className="mt-4">
            Proceder al Pago
          </Button>
        </div>
      </div>
      <Map />
    </div>
  );
}
