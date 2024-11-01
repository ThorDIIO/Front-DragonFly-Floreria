"use client";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useCart } from "@/app/context/cart-context";

type Product = {
  id: number;
  title: string;
  img: string;
  price: string;
  description: string;
};

export default function FeaturedProducts() {
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  // Estado para manejar la cantidad de cada producto por su ID
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const list: Product[] = [
    {
      id: 1,
      title: "Orquidea",
      img: "/Orquidea.webp",
      price: "S/.35.50",
      description: "La orquídea es una planta de apariencia elegante y exótica, conocida por sus flores llamativas y simétricas. Viene en una amplia variedad de colores y formas, lo que la convierte en una de las flores más populares para la decoración y arreglos florales.",
    },
    {
      id: 2,
      title: "Fertilizante para Arturios",
      img: "/Fertilizanteparaarturios.jpg",
      price: "S/.13.00",
      description: "Los fertilizantes para arturios, son productos diseñados específicamente para proporcionar nutrientes esenciales a estas plantas, favoreciendo su crecimiento y desarrollo.",
    },
    {
      id: 3,
      title: "Box de arturios rojos y aves del paraíso",
      img: "/Boxdearturiosrojos.jpeg",
      price: "S/.57.00",
      description: "Este arreglo floral combina anturios rojos y aves del paraíso para crear una composición exótica y vibrante. Los anturios aportan un color rojo intenso, simbolizando hospitalidad y pasión, mientras que las aves del paraíso, con sus tonos anaranjados y azules, agregan un toque tropical y elegante.",
    },
  ];

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1; // Obtiene la cantidad específica del producto o 1 por defecto
    const cartItem = { ...product, quantity };
    addToCart(cartItem);
    setQuantities((prev) => ({ ...prev, [product.id]: 1 })); // Reinicia la cantidad a 1 después de agregar al carrito
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
  };

  return (
    <div className="flex items-center justify-center flex-col w-full gap-y-6">
      <div className="flex items-center w-full px-20">
        <hr className="w-full" />
        <h2 className="font-bold text-center w-1/2">Productos destacados</h2>
        <hr className="w-full" />
      </div>
      <div className="h-full w-1/2 gap-2 gap-x-16 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item) => (
          <Card
            shadow="sm"
            key={item.id}
            className="relative group transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <CardBody className="overflow-visible p-0 relative">
              <Image
                alt={item.title}
                width={200}
                height={140}
                className="w-full object-cover shadow-sm rounded-t-md transition-transform duration-300 transform hover:scale-105"
                src={item.img}
              />
              <button
                onClick={() => openQuickView(item)}
                className="absolute bottom-0 left-0 w-full h-10 bg-green-700 bg-opacity-90 text-white font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaSearch className="text-white" /> Vista Rápida
              </button>
            </CardBody>
            <CardFooter className="text-small flex flex-col items-center justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
              <Button
                onClick={() => handleAddToCart(item)}
                color="success"
                className="mt-2"
              >
                Agregar al carrito
              </Button>
              <select
                value={quantities[item.id] || 1} // Usa la cantidad específica de este producto
                onChange={(e) =>
                  handleQuantityChange(item.id, Number(e.target.value))
                }
                className="border border-gray-300 rounded p-1 text-sm mt-2 w-16 text-center"
              >
                {[...Array(10)].map((_, num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal Personalizado */}
      {isQuickViewOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
            <Image
              src={selectedProduct.img}
              alt={selectedProduct.title}
              width={300}
              height={400}
              className="w-full h-auto object-cover mt-4"
            />
            <p className="mt-2">{selectedProduct.description}</p>
            <p className="text-green-700 text-xl font-semibold mt-2">
              {selectedProduct.price}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <select
                value={quantities[selectedProduct.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(
                    selectedProduct.id,
                    Number(e.target.value)
                  )
                }
                className="border border-gray-300 rounded p-1 text-sm"
              >
                {[...Array(10)].map((_, num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <Button
                color="success"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  closeQuickView();
                }}
              >
                Agregar al carrito
              </Button>
            </div>
            <Button
              onClick={closeQuickView}
              color="danger"
              className="absolute top-2 right-2"
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

