import axios from "axios";

// Crea una función para obtener la clave de API
const getApiKey = (): string => {
  return import.meta.env.VITE_APP_API_KEY || ""; // Asegúrate de tener esta variable de entorno definida
};

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY":getApiKey(),
  },
});

export default apiClient;
