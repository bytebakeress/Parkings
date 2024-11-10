import type { Context } from 'hono'; // Pour le contexte de route
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
