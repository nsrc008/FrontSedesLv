import apiClient from "../api/axiosConfig";
import { Location } from "../models/Location";

const locationService = {
  async fetchAll(): Promise<Location[]> {
    const response = await apiClient.get<Location[]>("locations/");
    return response.data.map(
      (locationData: Location) =>
        new Location(
          locationData.name,
          locationData.image,
          locationData.creationDate,
          locationData.code
        )
    );
  },
};

export default locationService;
