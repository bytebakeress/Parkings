import { Hono } from "hono";
const Parkingroute = new Hono();

Parkingroute.get('/', (c) => c.text('Liste des parkings'));

Parkingroute.get('/:id', (c) => {
    const id = c.req.param('id');
    return c.text(`Détails du parking avec ID: ${id}`);
  });
  
  // Exporter les routes de parking
  export default Parkingroute; 
