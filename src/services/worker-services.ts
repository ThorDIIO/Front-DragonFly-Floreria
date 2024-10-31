import { generalRoutes } from "@/utils/routes/general.routes";
const BASE_URL = generalRoutes.BASE_URL;

// Obtener todos los trabajadores
export const getAllWorkers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/workers`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de trabajadores:", error);
    throw error;
  }
};

// Registrar un nuevo trabajador
export const registerWorker = async (workerData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/workers/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workerData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al registrar trabajador:", error);
    throw error;
  }
};

// Actualizar información de un trabajador
export const updateWorker = async (workerId: string, updateData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/workers/${workerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al actualizar trabajador:", error);
    throw error;
  }
};

// Eliminar un trabajador
export const deleteWorker = async (workerId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/workers/${workerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(`Trabajador con ID ${workerId} eliminado correctamente.`);
    } else {
      console.error("Error al eliminar trabajador:", await response.text());
    }
  } catch (error) {
    console.error("Error al eliminar trabajador:", error);
    throw error;
  }
};
