import type { GPS } from "../types/GPS";
import { toSlug } from "../Utils/toSlug";
 export class City{
    id: number;
    name : string;
    Slug: string;
    parkingsIds: number[];
    country: string;
    location :{latitude: number, longitude: number};

    constructor(id: number, name: string, parkingsIds: number[], country: string, location: { latitude: number; longitude: number}){
        this.id = id;
        this.name = name;
        this.Slug = toSlug(name);
        this.parkingsIds = parkingsIds;
        this.country = country;
        this.location = location;
    }
 }
 