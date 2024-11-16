import type { GPS } from "../types/GPS";
import { generateRandomNumberId } from "../Utils/generateRandomNumberld";
import { Spot } from "./Spot";
import { v4 as uuidv4 } from 'uuid';
export class Parking{
    id : number;
    name: string;
    city_id : number;
    location : GPS;
    numberOfSpots: number;
    opened: boolean;
    hourlyRate: number;
    parklds: number[];
    Spot: Spot[];

    constructor(id : number, name: string, city_id: number, location: GPS, numberOfSpots: number, hourlyRate: number, opened: boolean = true) {
        this.id = id;
        this.name = name;
        this.city_id = city_id;
        this.location = location;
        this.numberOfSpots = numberOfSpots;
        this.opened =opened;
        this. hourlyRate = hourlyRate;
        this.parklds = [];
        this.Spot = [];
}
}