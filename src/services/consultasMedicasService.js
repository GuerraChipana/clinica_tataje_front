import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/consultas-medicas`;

// Crear una nueva consulta médica
export const crearConsultaMedica = async (consultaData) => {
  try {
    const response = await axios.post(`${API_URL}`, consultaData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Obtener todas las consultas médicas
export const obtenerConsultasMedicas = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Obtener una consulta médica por ID
export const obtenerConsultaMedicaPorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Actualizar una consulta médica
export const actualizarConsultaMedica = async (id, updateData) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Eliminar una consulta médica
export const eliminarConsultaMedica = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
