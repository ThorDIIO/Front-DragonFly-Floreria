import { generalRoutes } from "@/utils/routes/general.routes";

const BASE_URL = generalRoutes.BASE_URL;

export const createCategory = async (form: any) => {
  try {
    await fetch(`${BASE_URL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    });
  } catch (error) {
    console.error("Error al crear una categoria:", error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de categoria:", error);
    throw error;
  }
};

export const updateDiscipline = async (form: any, id?: number) => {
  try {
    await fetch(`${BASE_URL}/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //  Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    });
  } catch (error) {
    console.error("Error al actualizar un Producto:", error);
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${id}`, {
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de Producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    await fetch(`${BASE_URL}/categories/${id}`, {
      method: "DELETE",
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  } catch (error) {
    console.error("Error al eliminar un Producto:", error);
    throw error;
  }
};
