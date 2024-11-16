import { Hono } from 'hono';
import { serveStatic } from 'hono/bun'; // Pour servir des fichiers statiques
import { HomeController } from './Controllers/HomeController';
//import { cities, parkings } from './data/staticDatabase';//importation des donées des tableaux cities et parkings
import { ReadAllParkingsController } from './Controllers/parking/ReadAllParkingsController';
import { readAllCitiesController } from './Controllers/City/ReadAllCitiesController';
import { ReadOneCityController } from './Controllers/City/ReadOneCityController';
import { ReadOneParkingController } from './Controllers/parking/ReadOneParkingController';
import { trimTrailingSlash } from 'hono/trailing-slash';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();
// Utiliser le middleware pour gérer les trailing slashes
app.use('*', trimTrailingSlash());


// Association de  la route '/' à HomeController pour générer la page d'accueil
app.get('/', HomeController);
// Route pour afficher toutes les villes
app.get('/cities', readAllCitiesController);
//route pour afficher la liste des parking
app.get('/parkings', ReadAllParkingsController);
app.get('/cities/:slug', ReadOneCityController);
app.get('/parkings/:id', ReadOneParkingController);
// Servir les fichiers statiques depuis le dossier './static'
app.use('/static/*', serveStatic({ root: './' }));

// Centraliser la gestion des erreurs
app.onError((err, c) => {
    if (err instanceof HTTPException) {
      return c.html(`<h1>${err.status}</h1><p>${err.message}</p>`, err.status);
    }
    return c.html('<h1>500</h1><p>Internal Server Error</p>', 500);
  });


export default app;


