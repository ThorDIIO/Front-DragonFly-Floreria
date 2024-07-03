"use client";

import { Button, Checkbox, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const LibroReclamaciones = () => {
  const [dateTime, setDateTime] = useState('');
  const [isMinor, setIsMinor] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('es-PE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setDateTime(formattedDateTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Libro de Reclamaciones</h2>
          <p className="text-gray-500">Fecha y hora: {dateTime}</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Select placeholder="Tienda" required>
            <SelectItem key="tienda1">Tienda 1</SelectItem>
            {/* Otras opciones */}
          </Select>
          <Input placeholder="Razón Social" required />
          <Input placeholder="RUC" required />
          <Input placeholder="Dirección" required />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-500">Datos del Consumidor</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select placeholder="Tipo de documento" required>
              <SelectItem key="dni">DNI</SelectItem>
              <SelectItem key="pasaporte">Pasaporte</SelectItem>
              <SelectItem key="carne">Carné de extranjería</SelectItem>
            </Select>
            <Input placeholder="Número de documento" required />
            <Input placeholder="Nombre y apellidos del cliente" required className="md:col-span-2"/>
            <Input placeholder="Domicilio" required className="md:col-span-2"/>
            <Select placeholder="Departamento" required>
              <SelectItem key="lima">Lima</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Select placeholder="Provincia" required>
              <SelectItem key="lima">Lima</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Select placeholder="Distrito" required>
              <SelectItem key="distrito1">Distrito 1</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Input placeholder="Correo electrónico" type="email" required />
            <Input placeholder="Teléfono fijo (opcional)" />
            <Input placeholder="Teléfono celular" required />
          </div>
          <Checkbox onChange={(e) => setIsMinor(e.target.checked)}>El cliente es menor de edad</Checkbox>
        </div>
        {isMinor && (
          <div className="grid grid-cols-1 gap-4">
            <h3 className="text-lg font-semibold mb-2 text-red-500">SOLO COMPLETAR EN CASO DE SER MENOR DE EDAD</h3>
            <Select placeholder="Tipo de documento" required>
              <SelectItem key="dni">DNI</SelectItem>
              <SelectItem key="pasaporte">Pasaporte</SelectItem>
              <SelectItem key="carne">Carné de extranjería</SelectItem>
            </Select>
            <Input placeholder="Número de documento del padre, madre o apoderado" required />
            <Input placeholder="Nombre y apellidos del padre, madre o apoderado" required />
            <Input placeholder="Correo electrónico del padre, madre o apoderado" type="email" required />
            <Input placeholder="Teléfono celular del padre, madre o apoderado" required />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-500">Detalle de la Reclamación</h3>
          <div className="grid grid-cols-1 gap-4">
            <Select placeholder="Motivo" required>
              <SelectItem key="queja">Queja</SelectItem>
              <SelectItem key="reclamo">Reclamo</SelectItem>
            </Select>
            <Textarea placeholder="Detalle de la reclamación" required />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-500">Información adicional</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select placeholder="Tipo de bien" required>
              <SelectItem key="producto">Producto</SelectItem>
              <SelectItem key="servicio">Servicio</SelectItem>
            </Select>
            <Select placeholder="Canal de pedido" required>
              <SelectItem key="online">Online</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Input type="date" placeholder="Fecha de pedido" required />
            <Input type="date" placeholder="Fecha de reclamo" required />
            <Input type="number" placeholder="Monto reclamado" required />
            <Textarea placeholder="Pedido del cliente" required className="md:col-span-2"/>
          </div>
        </div>
        <div>
          <Checkbox>Declaro haber leído y aceptado las políticas de privacidad...</Checkbox>
        </div>
        <div className="text-center">
          <Button type="submit" className="bg-red-500 text-white px-6 py-2 rounded-md">Enviar</Button>
        </div>
      </form>
    </div>
  );
};

export default LibroReclamaciones;
