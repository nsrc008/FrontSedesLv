import LocationService from "../services/LocationService"; // Importa el servicio que interactúa con la API
import { Location } from "../models/Location"; // Importa el modelo del producto si tienes un modelo definido

// Función para obtener todos los productos
export const fetchLocations = async (): Promise<Location[]> => {
  return await LocationService.fetchAll();
};
