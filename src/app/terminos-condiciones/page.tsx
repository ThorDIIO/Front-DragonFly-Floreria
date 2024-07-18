"use client";

import { Button, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";

const TerminosCondiciones = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("es-PE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
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
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          Términos y Condiciones
        </h2>
        <p className="text-gray-500">Fecha y hora: {dateTime}</p>
      </div>
      <div className="space-y-4">
        <p>
          Bienvenido a DragonFly, su tienda de confianza para flores y regalos.
          Al utilizar nuestro sitio web, usted acepta cumplir y estar sujeto a
          los siguientes términos y condiciones.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          1. Capacidad Legal
        </h3>
        <p>
          Los servicios de DragonFly están disponibles sólo para personas que
          tienen capacidad legal para contratar. No podrán utilizar los
          servicios las personas que no tengan esa capacidad y los menores de
          edad. Los actos que éstos realicen en este sitio serán responsabilidad
          de los padres, tutores, encargados o curadores, y por tanto se
          considerarán realizados por éstos en ejercicio de la representación
          legal con la que cuentan.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          2. Registro de Usuarios
        </h3>
        <p>
          Para convertirse en un usuario autorizado de DragonFly, es obligatorio
          completar el formulario de registro en todos sus campos con datos
          válidos y verdaderos. El usuario deberá completarlo con su información
          personal de manera exacta, precisa y verdadera, y se compromete a
          actualizar los Datos Personales conforme resulte necesario. DragonFly
          podrá utilizar diversos medios para identificar a sus Usuarios, pero
          DragonFly NO se responsabiliza por la certeza de los Datos Personales
          provistos por sus Usuarios. Los Usuarios garantizan y responden, en
          cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de
          sus Datos Personales.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          3. Consentimiento de los Pedidos
        </h3>
        <p>
          La aceptación de las ofertas está sujeta a la validación que
          efectuemos. La recepción de una orden de compra generada en nuestro
          sitio no implica la aceptación de la oferta hecha por el cliente. La
          validación de la transacción incluirá una verificación de los
          siguientes elementos: (i) validación y aceptación del medio de pago
          ofrecido por el cliente, (ii) validación de los datos registrados por
          el cliente en el sitio, (iii) la verificación del stock disponible y
          (iv) la validación de la acreditación de pago.
        </p>
        <h3 className="text-lg font-semibold text-red-500">4. Stock</h3>
        <p>
          DragonFly actualiza constantemente su página web para ofrecer una
          disponibilidad en tiempo real de los productos exhibidos, sin embargo,
          no se garantiza un stock mayor al mínimo de una unidad, en
          consecuencia, todas las solicitudes de compra recibidas serán
          validadas conforme al stock disponible, precio, datos del cliente y
          medio de pago.
        </p>
        <h3 className="text-lg font-semibold text-red-500">5. Aviso Legal</h3>
        <p>
          La venta y despacho de los productos están condicionados a su
          disponibilidad y a las existencias del producto. Cuando el producto no
          se encuentre disponible, DragonFly notificará de inmediato al cliente
          y devolverá el valor total del precio pagado.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          6. Política de Garantías
        </h3>
        <p>
          Con el fin de ofrecer un mejor servicio, nosotros nos comprometemos a
          recibir todas sus solicitudes de incidencias en los productos
          adquiridos y le proporcionaremos solución a dicha solicitud de
          garantía. La garantía DragonFly o de algunos productos de otros
          proveedores, tienen las siguientes garantías:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Productos Perecibles; tienen una garantía de 24 horas después de
            recibir el producto.
          </li>
          <li>
            Productos No Perecibles; tienen una garantía de 48 horas hasta 72
            horas después de recibir el producto.
          </li>
          <li>
            Plantas; tienen una garantía de 15 días después de recibir el
            producto.
          </li>
          <li>
            Productos Preservadas; tienen una garantía de 3 meses después de
            recibir el producto.
          </li>
        </ul>
        <h3 className="text-lg font-semibold text-red-500">
          7. Comprobantes de Pago
        </h3>
        <p>
          Según el reglamento de Comprobantes de Pago aprobado por la Resolución
          de Superintendencia N° 007-99 / SUNAT (RCP) y el Texto Único Ordenado
          de la Ley del Impuesto General a las Ventas e Impuesto Selectivo al
          Consumo, aprobado mediante Decreto Supremo N° 055-99-EF y normas
          modificatorias (TUO del IGV):
        </p>
        <p>
          “No existe ningún procedimiento vigente que permita el canje de
          boletas de venta por facturas, más aún las notas de crédito no se
          encuentran previstas para modificar al adquirente o usuario que figura
          en el comprobante de pago original”. Teniendo en cuenta esta
          resolución, es obligación del consumidor decidir correctamente el
          documento que solicitará como comprobante al momento de su compra, ya
          que según los párrafos citados no procederá cambio alguno.
        </p>
        <h3 className="text-lg font-semibold text-red-500">8. Reembolsos</h3>
        <p>
          Luego que el reembolso es aprobado y ejecutado, el tiempo de
          procesamiento varía según el método de pago usado. Para una compra con
          tarjeta de crédito, débito o métodos que permitan la devolución del
          dinero a través de una cuenta asociada, se hará el reverso a la
          tarjeta o a la cuenta asociada por el total pagado. Para una compra a
          través de una transferencia, depósito bancario o pagos en efectivo, se
          hará una transferencia por el total pagado a cuenta bancaria del
          titular de la compra.
        </p>
        <p>
          <strong>Tiempos de ejecución:</strong> El tiempo de ejecución del
          reembolso es de hasta un (10) días hábiles.
        </p>
        <p>
          <strong>Tiempos de procesamiento:</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>
            Reverso a la tarjeta: El tiempo del reembolso a una tarjeta puede
            ser hasta quince (21) días hábiles, el tiempo de procesamiento es
            responsabilidad de la entidad financiera que emitió la tarjeta y es
            contado desde la ejecución del reembolso.
          </li>
          <li>
            Transferencia bancaria: Para recibir el dinero en una cuenta
            bancaria, el titular de la cuenta debe ser el mismo que realizó la
            compra en DragonFly. El tiempo de procesamiento es de tres (3) días
            hábiles desde su ejecución. La información bancaria proporcionada
            por el cliente debe ser correcta para evitar retrasos en la
            atención. De no ser así los tiempos de ejecución y procesamiento se
            prolongarán. Los datos necesarios son:
          </li>
          <ul className="list-disc pl-10">
            <li>Nombre y apellido</li>
            <li>Documento de Identidad</li>
            <li>Número de orden</li>
            <li>Correo electrónico registrado en DragonFly</li>
            <li>Datos de la cuenta bancaria</li>
          </ul>
        </ul>
        <p>
          Cabe precisar que DragonFly no se responsabiliza por las demoras o
          dificultades que presente la Entidad Financiera para el cumplimiento
          del reembolso.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          9. Atención Postventa
        </h3>
        <p>
          Cualquier consulta respecto a nuestra tienda online incluyendo el
          estado de sus pedidos, pueden hacerlo a través de los canales de
          atención:
        </p>
        <ul className="list-disc pl-5">
          <li>Contact Center 446-4666 opción 3</li>
          <li>Asistente Virtual de CHAT</li>
          <li>Redes Sociales</li>
          <li>WhatsApp 945 737 318</li>
        </ul>
        <p>El horario de atención:</p>
        <ul className="list-disc pl-5">
          <li>Lunes a Sábados de 8:00am a 6:00pm</li>
          <li>Domingos y Feriados de 9:00am a 5:00pm</li>
        </ul>
        <p>Excepto el 01 de Enero y 25 de Diciembre.</p>
        <p>Mediante los canales, el cliente o usuario podrá:</p>
        <ul className="list-disc pl-5">
          <li>Consultar sobre el estado de su pedido y avance del despacho.</li>
          <li>Consultar sobre nuestras políticas vigentes.</li>
          <li>
            Hacer la cancelación de la totalidad de su orden hasta con 24 horas
            de anticipación del inicio de su bloque horario.
          </li>
          <li>Consultar cualquier inquietud sobre el uso de www.rosatel.com</li>
        </ul>
        <p>
          El Usuario es responsable de identificarse mediante su DNI o CE y
          brindar los datos de validación solicitados, en caso no los brinde o
          existan inconsistencias con nuestra base de datos no podremos darle el
          soporte en la modificación o cancelación de los pedidos o brindarle
          información relacionada a la cuenta consultada.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          10. Responsabilidad de DragonFly
        </h3>
        <p>
          DragonFly hará lo posible dentro de sus capacidades para que la
          transmisión del Sitio sea ininterrumpida y libre de errores. Sin
          embargo, dada la naturaleza de la Internet, dichas condiciones no
          pueden ser garantizadas. En el mismo sentido, el acceso del Usuario a
          la Cuenta puede ser ocasionalmente restringido o suspendido con el
          objeto de efectuar reparaciones, mantenimiento o introducir nuevos
          Servicios. DragonFly no será responsable por pérdidas (i) que no hayan
          sido causadas por el incumplimiento de sus obligaciones; (ii) lucro
          cesante o pérdidas de oportunidades comerciales; (iii) cualquier daño
          indirecto.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          11. Términos de Ley
        </h3>
        <p>
          Este acuerdo será gobernado e interpretado de acuerdo con las leyes de
          Perú, sin dar efecto a cualquier principio de conflictos de ley. Si
          alguna disposición de estos Términos y Condiciones es declarada
          ilegal, o presenta un vacío, o por cualquier razón resulta
          inaplicable, la misma deberá ser interpretada dentro del marco del
          mismo y en cualquier caso no afectará la validez y la aplicabilidad de
          las provisiones restantes.
        </p>
        <h3 className="text-lg font-semibold text-red-500">
          12. Notificaciones
        </h3>
        <p>
          Cualquier comentario, inquietud o reclamación respecto de los
          anteriores Términos y Condiciones, la Política de Privacidad, o la
          ejecución de cualquiera de éstos, deberá ser notificada por escrito a
          DragonFly SAC. a la siguiente dirección: Tnt Lengua Romero Mz J1 Lt 2b
          Chorrillos, provincia y departamento de Lima.
        </p>
        <Checkbox>
          Declaro haber leído y aceptado los términos y condiciones
        </Checkbox>
        <div className="text-center">
          <Button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
