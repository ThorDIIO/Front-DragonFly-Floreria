import React from 'react';

export default function SobreMi() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-purple-800">QUIÉNES SOMOS</h2>
          <p className="mt-4 text-lg text-gray-700">
            En DragonFly creemos que los pequeños gestos pueden transformar el mundo que nos rodea. El amor es el motor que nos impulsa, un sentimiento que se expande desde el interior y toca a quienes están a nuestro lado. Cuando alguien recibe una flor, un regalo pensado con dedicación, ese simple gesto puede iluminar su día y hacer que todo parezca más brillante.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Nos apasiona mantener vivo ese sentimiento a través de nuestros arreglos florales, donde cada pétalo y cada detalle llevan consigo nuestra dedicación, creatividad y pasión. No se trata solo de flores, se trata de transmitir emociones, de hacer que cada entrega signifique algo especial para quien la recibe.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Lo que más nos llena es ver la alegría y las emociones que un pequeño detalle puede despertar, y en DragonFly, estamos aquí para ayudarte a crear esos momentos que se quedan grabados en el corazón.
          </p>
          <img
            src="https://via.placeholder.com/300x200?text=Imagen+1"
            alt="Descripción de la imagen 1"
            className="w-full h-auto rounded shadow-lg mt-6"
          />
        </div>

      
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-semibold text-purple-700">La filosofía de DragonFly</h3>
          <p className="mt-2 text-lg text-gray-700">
            En DragonFly creemos que los pequeños gestos pueden transformar el mundo que nos rodea. El amor es el motor que nos impulsa, un sentimiento que se expande desde el interior y toca a quienes están a nuestro lado. Cuando alguien recibe una flor, un regalo pensado con dedicación, ese simple gesto puede iluminar su día y hacer que todo parezca más brillante.
          </p>
        </div>

        <div className="mb-12 text-center bg-pink-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Nuestra Promesa</h3>
          <p className="mt-2 text-lg">
            Crear momentos que evoquen emociones profundas y memorias inolvidables en quienes los reciben.
          </p>
        </div>

  
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-semibold text-purple-700">Misión</h3>
          <p className="mt-2 text-lg text-gray-700">
            Ayudarte a comunicar tus sentimientos y crear recuerdos inolvidables a través de detalles que reflejen tu amor, sin que las barreras del tiempo y la distancia se interpongan.
          </p>

          <h3 className="text-3xl font-semibold text-purple-700 mt-6">Visión</h3>
          <p className="mt-2 text-lg text-gray-700">
            Nuestra visión es ser la florería que llevará tus detalles de amor a nivel nacional, convirtiéndonos en el puente que conecta corazones y transforma cada ocasión en un recuerdo inolvidable.
          </p>

          <img
            src="https://via.placeholder.com/300x200?text=Imagen+2"
            alt="Descripción de la imagen 2"
            className="w-full h-auto rounded shadow-lg mt-6"
          />
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl font-semibold text-purple-700">NUESTROS VALORES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h4 className="text-xl font-semibold text-purple-800">Somos cuidadosos</h4>
              <p className="mt-2 text-gray-600">
                Entendemos que los pequeños detalles marcan la diferencia, especialmente cuando se trata de sorprender a esa persona especial. Por eso, cuidamos cada aspecto de la experiencia de compra, desde la creación de cada arreglo hasta su entrega final.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h4 className="text-xl font-semibold text-purple-800">Somos comprometidos</h4>
              <p className="mt-2 text-gray-600">
                No hay nada más importante para nosotros que cumplir con nuestras promesas. Por ello, tomamos todas las precauciones necesarias para garantizar que tus arreglos lleguen en el día y hora que esperas, sin excepciones.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h4 className="text-xl font-semibold text-purple-800">Somos comprensivos</h4>
              <p className="mt-2 text-gray-600">
                Reconocemos que cada cliente tiene su propia historia y necesidades. Por eso, siempre estamos dispuestos a adaptarnos a tus solicitudes, buscando la mejor manera de hacer tu experiencia única.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h4 className="text-xl font-semibold text-purple-800">Somos serviciales</h4>
              <p className="mt-2 text-gray-600">
                Nos apasiona ayudar a nuestros clientes. Siempre estamos disponibles para ofrecer recomendaciones sobre los mejores detalles, sugerir mensajes significativos o corregir cualquier error que pueda surgir en tu pedido.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/detalles_dragonfly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors duration-200"
          >
            ¡Síguenos en Instagram!
          </a>
        </div>
      </div>
    </section>
  );
}
