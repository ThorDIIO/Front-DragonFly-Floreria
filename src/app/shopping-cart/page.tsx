"use client";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCart } from "../context/cart-context";

export default function ShoppingCart() {
  const { cart } = useCart();
  const total = cart.reduce(
    (acc: number, item: any) => acc + item.productPrice,
    0
  );
  return (
    <div className="w-full flex justify-between gap-y-2 gap-x-10 p-2">
      <div className="w-full">
        <Table isStriped aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Producto</TableColumn>
            <TableColumn>Cantidad</TableColumn>
            <TableColumn>Precio unitario</TableColumn>
            <TableColumn>Precio total</TableColumn>
          </TableHeader>
          <TableBody>
            {cart.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell className="flex items-center justify center">
                  <img
                    src={item.image}
                    alt="product"
                    className="rounded-full h-12 w-12 object-cover mx-4 border-1"
                  />
                  <span>{item.productName}</span>
                </TableCell>
                <TableCell>
                  <span>1</span>
                </TableCell>
                <TableCell>S/.{item.productPrice}</TableCell>
                <TableCell>S/.{item.productPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="w-1/2 flex flex-col gap-y-7 items-center">
        {/* Tabla de cupones */}
        <div className="flex flex-col border-1 py-10 px-36 gap-y-5 rounded-lg">
          <Input placeholder="Cupón" className=""></Input>
          <Button className="bg-black hover:bg-gray-900 text-white  py-2 px-4 rounded-2xl">
            Aplicar cupón
          </Button>
        </div>
        {/* Tabla de resumen */}
        <Table>
          <TableHeader>
            <TableColumn>Total</TableColumn>
            <TableColumn>Subtotal</TableColumn>
            <TableColumn>IVA</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>S/.{total}</TableCell>
              <TableCell>S/.{total}</TableCell>
              <TableCell>S/.0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* Botón de pagar */}
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2">
          Pagar
        </Button>
      </div>
    </div>
  );
}
