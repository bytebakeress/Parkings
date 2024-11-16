import { City } from "../../models/City";
import { Parking } from "../../models/Parking";

export type ReadOneCityViewProps = {
    city: City;
    parkings: Parking[];
};

const ReadOneCityView = ({ city, parkings }: ReadOneCityViewProps): string => {
    return `
        <html>
            <head><title>${city.name}</title></head>
            <body>
                <h1>Nom de la ville: ${city.name}</h1>
                <p>Pays: ${city.country}</p>
                <h2>Parkings associés: (${parkings.length} parking${parkings.length > 1 ? 's' : ''})</h2>
                <ul>
                    ${parkings.map(parking => `
                        <li>
                            <p>Nom du parking: ${parking.name}</p>
                            <p>Emplacement: Longitude: ${parking.location.longitude}, Latitude: ${parking.location.latitude}</p>
                            <p>Nombre de places: ${parking.numberOfSpots}</p>
                            <p>Tarif horaire: ${parking.hourlyRate}€</p>
                            <p>Ouvert: ${parking.opened ? "Oui" : "Non"}</p>
                        </li>
                    `).join('')}
                </ul>
            </body>
        </html>
    `;
};

export default ReadOneCityView;
