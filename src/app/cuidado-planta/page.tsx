"use client";
import { Card, Button } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import OrchidImage from "@/../public/orquidea-fondo-negro.jpg";

export default function CuidadoPlanta() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: '¿Cómo cuidar una Orquídea?',
      image: OrchidImage,
      content: (
        <div className="p-6">
          <p className="text-gray-700 mb-4 text-lg">
            Las orquídeas requieren un cuidado especial para florecer. Asegúrate de mantenerlas en un lugar con buena luz, pero sin sol directo.
          </p>
          <h3 className="text-2xl font-bold mb-2">Recomendaciones</h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            <li>Usa tierra adecuada para el tipo de planta.</li>
            <li>Riega según las necesidades específicas de cada planta.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Uso de insecticidas y fertilizantes',
      image: OrchidImage,
      content: (
        <div className="p-6">
          <p className="text-gray-700 mb-4 text-lg">
            El uso de insecticidas y fertilizantes puede ser crucial para mantener tus plantas saludables y libres de plagas.
          </p>
          <h3 className="text-2xl font-bold mb-2">Consejos</h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            <li>Usa insecticidas naturales para evitar dañar la planta.</li>
            <li>Fertiliza tus plantas de acuerdo a sus necesidades específicas.</li>
            <li>Sigue siempre las instrucciones del producto para evitar sobredosis.</li>
          </ul>
        </div>
      )
    }
  ];

  const renderCard = (card, index) => (
    <div key={index} className="mb-8 lg:flex lg:w-full">
      <Card className="w-full mx-auto lg:mr-4 mb-4 lg:mb-0 lg:h-full transition-all duration-500 ease-in-out relative">
        <div className="relative h-80 md:h-96">
          <Image
            alt={card.title}
            className="object-cover w-full h-full rounded-t-lg"
            src={card.image}
          />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-2 text-center">{card.title}</h3>
          <Button color="danger" className="absolute bottom-2 left-2" onClick={() => setSelectedCard(index)}>Leer Más</Button>
        </div>
      </Card>
      {selectedCard === index && (
        <Card className="w-full mt-4 mx-auto lg:ml-4 relative">
          {card.content}
          <Button color="danger" className="absolute bottom-2 left-2" onClick={() => setSelectedCard(null)}>Volver</Button>
        </Card>
      )}
    </div>
  );

  return (
    <div className="max-w-[1800px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">Por qué es importante el cuidado de las plantas</h2>
          <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
            El cuidado adecuado de las plantas no solo promueve su salud y belleza, sino que también contribuye al equilibrio ambiental y a nuestro bienestar personal. Mantener plantas bien cuidadas en nuestro entorno no solo mejora la calidad del aire, sino que también proporciona un ambiente más relajante y saludable.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            alt="Importancia del cuidado de las plantas"
            className="object-cover w-full rounded-lg"
            src={OrchidImage}
          />
        </div>
      </div>
      <br />
      <br />
      <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">Información sobre el cuidado de las plantas</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2">
          {cards.map((card, index) => renderCard(card, index))}
        </div>
        <div className="lg:w-1/2">
          
            <h3 className="text-2xl font-bold mb-4">Cuidado continuo y atención</h3>
            <p className="text-lg text-gray-700 mb-4">
              Mantener una rutina regular de cuidado para tus plantas asegura su salud a largo plazo. Asegúrate de observar cualquier cambio en las hojas, la floración y las necesidades de riego para adaptar el cuidado según sea necesario.
            </p>
            <Image
              alt="Cuidado continuo de plantas"
              className="object-cover w-full h-80 rounded-lg"
              src={OrchidImage}
            />

        </div>
      </div>
    </div>
  );
}
