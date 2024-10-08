import { City } from "../models/City";
import { Parking } from "../models/Parking";
import {type  GPS } from "../types/GPS";
import {toSlug} from '../Utils/toSlug'
const cities = [
    new City(1, 'Aix-en-Provence', [], 'France', { latitude: 43.533329, longitude: 5.43333 }),
    new City(2, 'La Spezia', [], 'Italie', { latitude: 44.238366, longitude: 9.6912326 }),
    new City(3, 'Aix-la-Chapelle', [], 'Allemagne', { latitude: 50.776351, longitude: 6.083862 }),
    new City(4, 'San Cristóbal de La Laguna', [], 'Espagne', { latitude: 28.487180709838867, longitude: -16.313879013061523 }),
    new City(5, 'Newcastle upon Tyne', [], 'Angleterre', { latitude: 54.9738474, longitude: -1.6131572 })
  ];

  const parkings: Parking[] = [
    new Parking('A', 1, { latitude: 43.533329, longitude: 5.43333 }, 100, 4.5),
    new Parking('B', 2, { latitude: 44.238366, longitude: 9.6912326 }, 50, 3),
    new Parking('C', 2, { latitude: 44.238366, longitude: 9.6912326 }, 80, 2.5),
    new Parking('D', 3, { latitude: 50.776351, longitude: 6.083862 }, 40, 2.8),
    new Parking('E', 4, { latitude: 28.487180709838867, longitude: -16.313879013061523 }, 70, 3.1),
    new Parking('F', 5, { latitude: 54.9738474, longitude: -1.6131572 }, 60, 2.4),
    new Parking('G', 5, { latitude: 54.9738474, longitude: -1.6131572 }, 90, 3.2),
  ];
  export {cities , parkings};
  