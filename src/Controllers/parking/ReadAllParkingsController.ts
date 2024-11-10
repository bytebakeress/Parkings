//ReadAllParkingsController
import { type Context } from "hono";
import { parkings } from "../../data/staticDatabase"; 
import ReadAllParkingsView from "../../Views/parking/ReadAllParkingsView";

// Contrôleur pour afficher tous les parkings
export const ReadAllParkingsController = (c: Context) => {
  const view = ReadAllParkingsView({ parkings });
  return c.html(view);
};
