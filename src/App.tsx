import React, { useState, useEffect } from "react";
import Card, { CardBody } from "./components/Card";
import Table from "./components/Table";
import { TableContent } from "./components/TableContent";
import { fetchLocations } from "./actions/LoactionActions";
import { Location } from "./models/Location";

const App: React.FC = () => {
  const [locations, setlocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchLocations();
        setlocations(data);
      } catch (error) {
        setError("Error fetching locations"); // Manejo de error
      } finally {
        setLoading(false); // Cambiar el estado de carga
      }
    };
    loadLocations();
  }, []);

  return (
    <Card>
      <CardBody title="Locations" text="Actions for locations" />
      {loading ? (
        <p>Loading Locations...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Table>
          {locations.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center">
                No se encontraron locations.
              </td>
            </tr>
          ) : (
            locations.map((location) => (
              <TableContent
                key={location.code}
                code={location.code}
                image={location.image}
                name={location.name}
                creationDate={location.creationDate}
              />
            ))
          )}
        </Table>
      )}
    </Card>
  );
};

export default App;
