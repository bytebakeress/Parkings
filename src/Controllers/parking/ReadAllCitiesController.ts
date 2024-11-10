import  ReadAllCitiesView  from '../../Views/city/ReadAllCitiesView';
import { cities } from '../../data/staticDatabase'; // Importer les données des villes
import { type Context } from 'hono';
import { City } from '../../models/City';

export const ReadAllCitiesController = (c: Context) => {
  // Passer les données des villes à la vue
  const view = ReadAllCitiesView({cities});
  return c.html(view); // Renvoyer la vue générée comme réponse HTML
};

