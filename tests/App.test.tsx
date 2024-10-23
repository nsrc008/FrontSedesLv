import { render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import * as LocationActions from '../src/actions/LoactionActions'; // Cambia aquí
import { Location } from '../src/models/Location';
import '@testing-library/jest-dom';

// Mock de la función fetchLocations
jest.mock('../src/actions/LoactionActions');

describe('App Component', () => {
  test('renders loading state initially', () => {
    render(<App />); // Renderiza el componente

    // Verifica que el texto de carga se muestra inicialmente
    expect(screen.getByText(/loading locations/i)).toBeInTheDocument();
  });

  test('renders locations after fetching', async () => {
    // Mock de la respuesta de la API
    const mockLocations: Location[] = [
      new Location('Sede 1', 'image1.png', '2024-10-01', 1),
      new Location('Sede 2', 'image2.png', '2024-10-02', 2),
      new Location('Sede 3', 'image3.png', '2024-10-03', 3),
    ];
    (LocationActions.fetchLocations as jest.Mock).mockResolvedValueOnce(mockLocations); // Cambiado a jest.Mock

    render(<App />); // Renderiza el componente

    // Verifica que el estado de carga desaparece y se muestran las ubicaciones
    await waitFor(() => expect(screen.queryByText(/loading locations/i)).not.toBeInTheDocument());

    // Verifica que las ubicaciones se renderizan correctamente
    mockLocations.forEach(location => {
      expect(screen.getByText(location.name)).toBeInTheDocument(); // Verifica que el nombre se renderiza
    });
  });

  test('renders error message when fetch fails', async () => {
    (LocationActions.fetchLocations as jest.Mock).mockRejectedValueOnce(new Error('Error fetching locations')); // Cambiado a jest.Mock

    render(<App />); // Renderiza el componente

    // Verifica que el texto de carga se muestra inicialmente
    expect(screen.getByText(/loading locations/i)).toBeInTheDocument();

    // Espera a que se renderice el mensaje de error
    await waitFor(() => expect(screen.queryByText(/loading locations/i)).not.toBeInTheDocument());

    // Verifica que se muestra el mensaje de error
    expect(screen.getByText(/error fetching locations/i)).toBeInTheDocument();
  });

  test('renders no locations message when there are no locations', async () => {
    (LocationActions.fetchLocations as jest.Mock).mockResolvedValueOnce([]); // Cambiado a jest.Mock

    render(<App />); // Renderiza el componente

    // Verifica que el estado de carga desaparece
    await waitFor(() => expect(screen.queryByText(/loading locations/i)).not.toBeInTheDocument());

    // Verifica que se muestra el mensaje de "No se encontraron locations."
    expect(screen.getByText(/no se encontraron locations/i)).toBeInTheDocument();
  });
});
