"use client";
import { useCart } from "@/app/context/cart-context";
import Image from "next/image";
// @ts-ignore
import Slider from "react-slick";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Product = {
  id: number;
  title: string;
  img: string;
  price: string;
  description: string;
};

// Flechas personalizadas para el carrusel
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer"
      style={{ zIndex: 2 }}
      onClick={onClick}
    >
      <span style={{ fontSize: "24px", color: "black" }}>›</span>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer"
      style={{ zIndex: 2 }}
      onClick={onClick}
    >
      <span style={{ fontSize: "24px", color: "black" }}>‹</span>
    </div>
  );
};

export default function NewProducts() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
        title: "Orquídea Cymbidium",
        img: "/OrquídeaCymbidium1.jpeg",
        price: "S/.45.50",
        description: "Es conocida por su elegancia y belleza exótica...",
      },
      {
        id: 3,
        title: "Box de arturios rojos y aves del paraíso",
        img: "/Boxdearturiosrojos.jpeg",
        price: "S/.57.00",
        description: "Este arreglo floral combina anturios rojos y aves del paraíso...",
      },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    const cartItem = { ...product, quantity };
    addToCart(cartItem);
    setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
  };

  return (
    <div className="flex items-center justify-center flex-col w-full gap-y-6">
      <div className="flex items-center w-full px-20">
        <hr className="w-full" />
        <h2 className="font-bold text-center w-1/2">Nuevos productos</h2>
        <hr className="w-full" />
      </div>
      <div className="flex w-full px-20 gap-6">
        <div className="w-1/3">
          <Image
            src="/novedades.webp"
            alt="Novedades"
            width={320}
            height={500}
            className="border-2 border-gray-200 rounded-md shadow-sm"
          />
        </div>

        <div className="w-2/3">
          <Slider {...sliderSettings}>
            {list.map((product) => (
              <Card
                key={product.id}
                className="w-60 h-[370px] mx-3 group relative flex flex-col justify-between rounded-md shadow-sm"
              >
                <CardBody className="p-0 h-48 flex items-center justify-center">
                  <Image
                    alt={product.title}
                    width={180}
                    height={180}
                    className="object-cover rounded-t-md"
                    src={product.img}
                  />
                  <button
                    onClick={() => openQuickView(product)}
                    className="absolute bottom-0 left-0 w-full bg-green-700 bg-opacity-90 text-white font-semibold py-1 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaSearch className="text-white" /> Vista Rápida
                  </button>
                </CardBody>
                <CardFooter className="flex flex-col items-center text-center p-4">
                  <b className="text-sm">{product.title}</b>
                  <p className="text-default-500 text-sm">{product.price}</p>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    color="success"
                    className="mt-2 text-xs px-3 py-1"
                  >
                    Agregar al carrito
                  </Button>
                  <select
                    value={quantities[product.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(product.id, Number(e.target.value))
                    }
                    className="border border-gray-300 rounded p-1 text-xs mt-2"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </CardFooter>
              </Card>
            ))}
          </Slider>
        </div>
      </div>

      {isQuickViewOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
            <Image
              src={selectedProduct.img}
              alt={selectedProduct.title}
              width={240}
              height={320}
              className="w-full h-auto object-cover mt-4"
            />
            <p className="mt-2 text-sm">{selectedProduct.description}</p>
            <p className="text-green-700 text-lg font-semibold mt-2">{selectedProduct.price}</p>
            <div className="flex items-center gap-2 mt-4">
              <select
                value={quantities[selectedProduct.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(selectedProduct.id, Number(e.target.value))
                }
                className="border border-gray-300 rounded p-1 text-xs"
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
                className="text-xs px-3 py-1"
              >
                Agregar al carrito
              </Button>
            </div>
            <Button
              onClick={closeQuickView}
              color="danger"
              className="absolute top-2 right-2 text-xs px-3 py-1"
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
