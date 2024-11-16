import { type Context } from 'hono';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { City } from '../../models/City';
import { Parking } from '../../models/Parking';
import ReadOneCityView from '../../Views/city/ReadOneCityView';

export const ReadOneCityController = async (context: Context): Promise<Response> => {
    let db;
    try {
        const slug = context.req.param('slug');
        if (!slug) {
            return context.text('Slug de ville invalide.', 400);
        }

        console.log('Slug de la ville:', slug);

        db = await open({
            filename: './src/parking.sqlite',
            driver: sqlite3.Database,
        });

        if (!db) {
            console.error('Erreur de connexion à la base de données');
            return context.text('Erreur de connexion à la base de données.', 500);
        }

        console.log('Base de données ouverte avec succès');

        const cityRow = await db.get('SELECT * FROM cities WHERE slug = ?', slug);
        console.log('Ville trouvée:', cityRow);

        if (!cityRow) {
            console.log('Ville introuvable avec le slug:', slug);
            return context.text('Ville introuvable.', 404);
        }

        console.log('Récupération des parkings...');
        const parkingRows = await db.all('SELECT * FROM parkings WHERE city_id = ?', cityRow.id);
        console.log('Parkings récupérés:', parkingRows);

        const parkings = parkingRows.map((parkingRow: any) => new Parking(
            parkingRow.id,
            parkingRow.name,
            parkingRow.city_id,
            {
                latitude: parseFloat(parkingRow.location.split(', ')[0]),
                longitude: parseFloat(parkingRow.location.split(', ')[1]),
            },
            parkingRow.numberOfPlaces,
            parkingRow.hourlyRate,
            parkingRow.opened === 1
        ));

        const city = new City(
            cityRow.id,
            cityRow.name,
            parkings.map(parking => parking.id),
            cityRow.country,
            {
                latitude: parseFloat(cityRow.location.split(', ')[0]),
                longitude: parseFloat(cityRow.location.split(', ')[1]),
            }
        );

        console.log('Ville créée:', city);

        return context.html(ReadOneCityView({ city, parkings }));

    } catch (error) {
        console.error('Erreur lors de la récupération de la ville:', error);
        return context.text('Erreur lors de la récupération des détails de la ville.', 500);
    } finally {
        if (db) {
            console.log('Fermeture de la base de données...');
            await db.close();
        }
    }
};



/*import type { Context } from 'hono'; // Pour le contexte de route
import { City } from '../models/City';
import { parkings, cities } from '../data/staticDatabase'; // Importer les données statiques
import { ReadOneCityView } from '../Views/city/ReadOneCityView'; // Importer la vue
import { HTTPException} from 'hono/http-exception';

// Le contrôleur récupère les données et appelle la vue
export const ReadOneCityController = (c: Context) => {
  const slug = c.req.param('slug'); // Récupère le slug de l'URL

  // Trouver la ville correspondant au slug
  const city: City | undefined = cities.find((city) => city.Slug === slug);

  if (!city) {
    // Si aucune ville n'est trouvée, renvoyer une page 404
    return c.html("<h1>City not found</h1>", 404);
  }

  
  return c.html(ReadOneCityView({slug : city.Slug}));
};
*/
