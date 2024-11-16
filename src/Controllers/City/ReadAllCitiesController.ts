import type { Context } from 'hono';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { City } from '../../models/City';
import ReadAllCitiesView from '../../Views/city/ReadAllCitiesView'; // Vue

export const readAllCitiesController = async (c: Context): Promise<Response> => {
  try {
    const db = await open({
      filename: 'src/parking.sqlite',
      driver: sqlite3.Database
    });

    // Requête pour récupérer toutes les villes
    const rows = await db.all('SELECT id, name, country, location FROM cities');

    // Transformer les données en instances de City
    const cities = rows.map((row: any) => {
      const [latitude, longitude] = row.location.split(',').map(Number);
      // Ici, nous ajoutons un tableau vide pour parkingsIds
      return new City(row.id, row.name, [], row.country, { latitude, longitude });
    });

    await db.close();

    // Passer les données à la vue
    return c.html(await ReadAllCitiesView({ cities }));
  } catch (error) {
    console.error('Erreur lors de la récupération des villes:', error);
    return c.html(await ReadAllCitiesView({ error: 'Impossible de récupérer les villes. Veuillez réessayer plus tard.' }));
  }
};



/*import  ReadAllCitiesView  from '../../Views/city/ReadAllCitiesView';
import { cities } from '../../data/staticDatabase'; // Importer les données des villes
import { type Context } from 'hono';
import { City } from '../../models/City';

export const ReadAllCitiesController = (c: Context) => {
  // Passer les données des villes à la vue
  const view = ReadAllCitiesView({cities});
  return c.html(view); // Renvoyer la vue générée comme réponse HTML
};
*/
