
import {type Context } from 'hono'; 
import { Parking } from '../../models/Parking'; // Modèle Parking
import { open } from 'sqlite'; // Pour ouvrir la base de données SQLite
import sqlite3 from 'sqlite3'; // Driver SQLite
import ReadOneParkingView from '../../Views/parking/ReadOneParkingView'; // Vue pour afficher les détails du parking

export const ReadOneParkingController = async (context: Context): Promise<Response> => {
    try {
        // Récupérer l'id du parking depuis l'URL
        const parkingId = parseInt(context.req.param('id'));

        // Vérification si l'ID est un nombre valide
        if (isNaN(parkingId)) {
            return context.text('ID de parking invalide.', 400); // Erreur si l'ID n'est pas un nombre valide
        }

        console.log('ID du parking:', parkingId); // Affichage pour débogage

        // Ouvrir la base de données SQLite
        const db = await open({
            filename: 'src/parking.sqlite',
            driver: sqlite3.Database,
        });

        // Exécuter une requête pour obtenir les informations du parking
        const row = await db.get('SELECT * FROM parkings WHERE id = ?', parkingId);

        // Si aucun parking trouvé, afficher une erreur
        if (!row) {
            console.log('Parking introuvable avec l\'ID:', parkingId); // Log pour débogage
            return context.text('Parking introuvable.', 404); // Retourner une erreur 404
        }
        
        console.log(row.hourlyRate);
        // Créer l'objet Parking à partir des données de la base de données
        const parking = new Parking(
          row.id,
            row.name,
            row.city_id,
            {
                latitude: parseFloat(row.location.split(', ')[0]),
                longitude: parseFloat(row.location.split(', ')[1])
            },
            row.numberOfPlaces,
            row.hourlyRate,
            row.opened === 1  // Conversion en booléen pour l'état ouvert
        );

        // Fermer la connexion à la base de données
        await db.close();

        // Appeler la vue pour afficher les détails du parking
        return context.html(ReadOneParkingView({ parking })); // Retourner la vue avec les détails du parking

    } catch (error) {
        console.error('Erreur lors de la récupération du parking:', error);
        return context.text('Erreur lors de la récupération des détails du parking.', 500); // Erreur serveur
    }
};


   


/*import type { Context } from 'hono'; // Pour le contexte de route
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
*/