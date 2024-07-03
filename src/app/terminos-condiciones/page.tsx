"use client";

import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from '@nextui-org/react';

const TerminosCondiciones = () => {
  const [dateTime, setDateTime] = useState('');

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
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Términos y Condiciones</h2>
        <p className="text-gray-500">Fecha y hora: {dateTime}</p>
      </div>
      <div className="space-y-4">
        <p>
          Bienvenido a nuestra página web. Al acceder y utilizar este sitio web, usted acepta cumplir y estar obligado por los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de [Nombre de la Empresa] con usted en relación a este sitio web. Si no está de acuerdo con alguna parte de estos términos y condiciones, por favor no utilice nuestro sitio web.
        </p>
        <h3 className="text-lg font-semibold text-red-500">1. Uso del Sitio Web</h3>
        <p>
          El contenido de las páginas de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros proporcionamos ninguna garantía en cuanto a la exactitud, oportunidad, rendimiento, integridad o idoneidad de la información y materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular. Usted reconoce que dicha información y materiales pueden contener inexactitudes o errores y expresamente excluimos la responsabilidad por tales inexactitudes o errores en la máxima medida permitida por la ley.
        </p>
        <h3 className="text-lg font-semibold text-red-500">2. Propiedad Intelectual</h3>
        <p>
          Este sitio web contiene material que es de nuestra propiedad o nos ha sido licenciado. Este material incluye, pero no se limita a, el diseño, la disposición, el aspecto, la apariencia y los gráficos. La reproducción está prohibida salvo en conformidad con el aviso de copyright, que forma parte de estos términos y condiciones.
        </p>
        <h3 className="text-lg font-semibold text-red-500">3. Enlaces a otros Sitios Web</h3>
        <p>
          De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos el sitio web (s). No tenemos ninguna responsabilidad por el contenido del sitio web vinculado (s).
        </p>
        <h3 className="text-lg font-semibold text-red-500">4. Uso No Autorizado</h3>
        <p>
          El uso no autorizado de este sitio web puede dar lugar a una reclamación por daños y/o ser un delito penal.
        </p>
        <h3 className="text-lg font-semibold text-red-500">5. Ley Aplicable</h3>
        <p>
          Su uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web está sujeto a las leyes de [país].
        </p>
        <Checkbox>Declaro haber leído y aceptado los términos y condiciones</Checkbox>
        <div className="text-center">
          <Button type="submit" className="bg-red-500 text-white px-6 py-2 rounded-md">Aceptar</Button>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;