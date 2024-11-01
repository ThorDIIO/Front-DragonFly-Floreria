"use client";
import { useAuth } from "@/app/context/auth-context";
import { useCart } from "@/app/context/cart-context";
import { FaShoppingCart, FaHome, FaLeaf, FaInfoCircle, FaTags, FaWhatsapp } from "react-icons/fa";
import { Badge, Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "../../public/LOGO-LETRA.png";

export default function NavbarCustom({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout, user } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const badgeTotal = cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

  const [showBanner, setShowBanner] = useState(true); // Estado para controlar la visibilidad del banner
  const [isProductsOpen, setIsProductsOpen] = useState(false); // Estado para controlar la visibilidad del menú de productos
  const [isCartVisible, setIsCartVisible] = useState(false); // Estado para controlar el carrito lateral

  return (
    <>
      {/* Banner de promoción con botón de cierre */}
      {showBanner && (
        <div className="w-full bg-pink-300 text-center py-2 text-black font-semibold relative">
          🎉 ¡Oferta especial! Envío gratuito en pedidos superiores a S/.550 Aprovecha ahora! 🎉
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Barra de navegación principal */}
      <Navbar isBordered={false} className="flex flex-col items-center w-full p-4 bg-white shadow-md">
        
        {/* Logo y menú de navegación */}
        <NavbarContent justify="start" className="flex items-center gap-6">
          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', overflow: 'hidden', marginTop: '-6px', marginRight: '20px' }}>
            <Link href={"/"} style={{ display: 'block', width: '250px', height: '250px' }}>
              <Image
                alt="Logo"
                src={Logo}
                width={180}
                height={180}
                style={{ display: 'block', objectFit: 'cover' }}
              />
            </Link>
          </div>
          
          {/* Menú de navegación con iconos y menú desplegable en "Productos" */}
          <div className="flex items-center gap-4 justify-center w-full">
            <NavbarItem isActive={path === "/"} className="text-base font-semibold text-gray-800 flex items-center gap-2 hover:text-black transition">
              <FaHome />
              <Link href="/">Inicio</Link>
            </NavbarItem>

            {/* Menú de Productos con Desplegable en Hover */}
            <div
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              className="relative"
            >
              <NavbarItem isActive={path === "/catalogo"} className="text-base font-semibold text-gray-800 flex items-center gap-2 hover:text-black transition cursor-pointer">
                <FaTags />
                Productos
              </NavbarItem>
              
              {/* Menú desplegable */}
              {isProductsOpen && (
                <div 
                  className="dropdown-menu absolute top-full left-0 bg-white shadow-lg rounded-md w-48 z-50"
                  style={{ marginTop: '-4px' }} // Ajuste para eliminar la separación
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <ul className="p-2">
                    <li className="py-1 px-4 hover:bg-gray-100">
                      <Link href="/catalogo/rosas">Flores</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100">
                      <Link href="/catalogo/arreglos-grandes">Arreglos Florales</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100">
                      <Link href="/catalogo/arreglos-grandes">Condolencias</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100">
                      <Link href="/catalogo/arreglos-grandes">Cuidado de la planta</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100">
                      <Link href="/catalogo/orquideas">Ocaciones Especiales</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100">
                      <Link href="/catalogo/flores-exoticas">Ramos y Boxes</Link>
                    </li>
                  </ul>
                </div>
              )}

            </div>

            <NavbarItem isActive={path === "/cuidado-planta"} className="text-base font-semibold text-gray-800 flex items-center gap-2 hover:text-black transition">
              <FaLeaf />
              <Link href="/cuidado-planta">Cuidados</Link>
            </NavbarItem>
            
            <NavbarItem isActive={path === "/sobre-nosotros"} className="text-base font-semibold text-gray-800 flex items-center gap-2 hover:text-black transition">
              <FaInfoCircle />
              <Link href="/sobre-nosotros">Sobre nosotros</Link>
            </NavbarItem>
          </div>
        </NavbarContent>

        {/* Botones de Iniciar sesión, Registrarse y Carrito de compras */}
        <NavbarContent justify="end" className="flex items-center gap-3">
          <NavbarItem className="hidden lg:flex">
            <Link href="/auth/login" className="text-gray-600 hover:text-black transition">
              Iniciar sesión
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="warning"
              href="/auth/register"
              variant="flat"
              className="text-base font-semibold shadow-md"
            >
              Registrarse
            </Button>
          </NavbarItem>
          
          {/* Icono del carrito para abrir el carrito lateral */}
          <Button onClick={() => setIsCartVisible(!isCartVisible)}>
            <Badge color="danger" content={badgeTotal} shape="circle" size="sm">
              <FaShoppingCart size={20} />
            </Badge>
          </Button>
        </NavbarContent>
      </Navbar>

      {/* Carrito Lateral */}
      {isCartVisible && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Tu Carrito</h2>
            <button onClick={() => setIsCartVisible(false)}>✕</button>
          </div>
          {cart && cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex items-center gap-4 mb-4">
                  {/* Imagen del producto o imagen de reserva */}
                  <Image 
                    src={item.image || "/placeholder-image.webp"} // Ruta alternativa si la imagen no existe
                    alt={item.productName}
                    width={40}
                    height={40}
                    onError={(e) => (e.currentTarget.src = "/placeholder-image.webp")}
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.productName}</p>
                    <p>{item.quantity} x {item.productPrice}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Button color="primary" onClick={() => router.push("/shopping-cart")}>
            Ver carrito completo
          </Button>
          <Button color="danger" onClick={() => clearCart()} className="mt-2">
            Vaciar carrito
          </Button>
        </div>
      )}

      {/* Línea separadora */}
      <hr className="w-full border-gray-300" />

      {/* Contenido principal */}
      <div>{children}</div>

      {/* Botón flotante de WhatsApp para asistencia rápida */}
      <a
        href="https://wa.me/tu_numero_de_telefono"
        className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}
