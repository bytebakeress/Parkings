import type { Context } from 'hono'; // Pour le contexte de route
import { Parking } from '../models/Parking';
import { parkings } from '../data/staticDatabase'; // Importer les données statiques des parkings
import { ReadOneParkingView } from '../Views/parking/ReadOneParkingView'; // Importer la vue pour afficher le parking

// Le contrôleur récupère les données et appelle la vue
export const ReadOneParkingController = (c: Context) => {
  const id = parseInt(c.req.param('id')); // Récupère l'ID du parking dans l'URL

  // Trouver le parking correspondant à l'id
  const parking: Parking | undefined = parkings.find((parking) => parking.id === id);

  if (!parking) {
    // Si aucun parking n'est trouvé, renvoyer une page 404
    return c.html("<h1>Parking not found</h1>", 404);
  }

  // Appeler la vue avec les données du parking
  return c.html(ReadOneParkingView({ parking }));
};
