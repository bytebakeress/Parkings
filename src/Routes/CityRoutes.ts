import { Hono } from "hono";

// Créer une instance de Hono pour les routes de ville
const cityRoutes = new Hono();

// Route pour la liste des villes
cityRoutes.get('/', (c) => c.text('Liste des villes'));

// Route pour une ville spécifique par slug
cityRoutes.get('/:slug', (c) => {
  const slug = c.req.param('slug');
  return c.text(`Détails de la ville: ${slug}`);
});

// Exporter les routes de ville
export default cityRoutes;
