import {type Context } from 'hono';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Parking } from '../../models/Parking';  // Modèle Parking
import ReadAllParkingsView from '../../Views/parking/ReadAllParkingsView';  // Vue

export const ReadAllParkingsController = async (c: Context): Promise<Response> => {
  try {
    // Ouvrir la base de données SQLite
    const db = await open({
      filename: 'src/parking.sqlite',
      driver: sqlite3.Database
    });

    // Requête SQL pour récupérer tous les parkings
    const rows = await db.all('SELECT id, name, city_id, location, hourlyRate FROM parkings');

    // Mapper les résultats en instances de Parking
    const parkings = rows.map((row: any) => {
      const [latitude, longitude] = row.location.split(',').map(Number);
      // Instancier chaque parking
      return new Parking(
        row.id,
        row.name,
        row.city_id,
        { latitude, longitude },
        0, 
        row.hourlyRate
      );
    });

    // Fermer la base de données
    await db.close();

    // Passer les données à la vue
    return c.html(await ReadAllParkingsView({ parkings }));
  } catch (error) {
    // Gestion des erreurs
    console.error('Erreur lors de la récupération des parkings:', error);
    return c.html(await ReadAllParkingsView({ error: 'Impossible de récupérer les parkings. Veuillez réessayer plus tard.' }));
  }
};

/*//ReadAllParkingsController
import { type Context } from "hono";
import { parkings } from "../../data/staticDatabase"; 
import ReadAllParkingsView from "../../Views/parking/ReadAllParkingsView";

// Contrôleur pour afficher tous les parkings
export const ReadAllParkingsController = (c: Context) => {
  const view = ReadAllParkingsView({ parkings });
  return c.html(view);
};
*/