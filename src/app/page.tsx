import Carousel from "@/components/carousel/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-sm:hidden">
        <Carousel />
      </div>
      <footer className="bg-pink-100 text-gray-700 mt-auto py-8">
        <div className="flex justify-center items-center h-full">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center md:col-span-2 md:col-start-2">
                <h3 className="text-lg font-bold mb-2">SUSCRÍBETE A NUESTRO BOLETÍN</h3>
                <p className="text-sm mb-4">Recibe nuestros correos y sé el primero en enterarte de nuestras ofertas exclusivas, promociones y mucho más.</p>
                <div className="flex justify-center">
                  <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="p-2 border border-gray-300 rounded-l-md w-full md:w-2/3 focus:outline-none"
                  />
                  <button className="bg-red-500 text-white p-2 rounded-r-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-xs mt-2">Puede darse de baja en cualquier momento. Para ello, consulte nuestra Información de contacto en el aviso legal.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-8">
              <div>
                {/* Cuenta */}
                <h3 className="text-lg font-bold mb-2">SU CUENTA</h3>
                <p className="text-sm mb-4"><a href="/auth/login" className="hover:underline">Iniciar Sesión</a></p>
                <p className="text-sm mb-4"><a href="/auth/register" className="hover:underline">Crear Cuenta</a></p>
              </div>
              <div>
                {/* Información de la Tienda */}
                <h3 className="text-lg font-bold mb-2">INFORMACIÓN DE LA TIENDA</h3>
                <p className="text-sm mb-2">(01) 446 6666</p>
                <p className="text-sm mb-2">(51) 987 458 758</p>
                <p className="text-sm mb-2">dragonFly@gmail.com</p>
                <p className="text-sm mb-2">Lima Perú</p>
                <div className="flex mt-4 justify-center space-x-4">
                  <a href="#" className="text-gray-700"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-gray-700"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-700"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div>
                {/* Políticas */}
                <h3 className="text-lg font-bold mb-2">POLÍTICAS</h3>
                <p className="text-sm mb-4"><a href="#" className="hover:underline">Horarios de atención</a></p>
                <p className="text-sm mb-4"><a href="#" className="hover:underline">Términos y condiciones</a></p>
                <p className="text-sm mb-4"><a href="/terminos-condiciones" className="hover:underline">Políticas de entrega y devolución</a></p>
                <div className="flex justify-center mb-2 mt-2">
                  <a href="/Libro">
                    <Image
                      src="/libro reclamaciones.png"
                      alt="Libro de reclamaciones"
                      width={100} // Ajusta el ancho según tus necesidades
                      height={100} // Ajusta la altura según tus necesidades
                      className="cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs">DragonFly - Todos los Derechos Reservados 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}