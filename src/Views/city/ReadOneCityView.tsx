import { City } from '../../models/City';
import { Layout } from '../Shared/Layout';
import { html } from 'hono/html';
import { Parking } from '../../models/Parking';
import { cities, parkings } from '../../data/staticDatabase';

type ReadOneCityViewProps = {
  slug: string; // Détails de la ville
 // Détails des parkings associés
};

// La vue reçoit la ville et les détails des parkings associés comme paramètres
export const ReadOneCityView = ({slug}: ReadOneCityViewProps) => {
  const city = cities.find(city => city.Slug === slug);
    if(!city){
      return (
        <Layout pageTitle = "not found">
          <h1>page non trouvée</h1>
          <p> error 404</p>
        </Layout>
      ) 
    }
    const cityparking  = parkings.filter(parking => parking.city_id === city.id)
  return (
    <Layout pageTitle={city.name}>
      <h1>{city.name} {city.country} </h1>
      <p> Coordonnées GPS: {city.location.latitude} {city.location.longitude}`</p>
     
      <h2>Parkings associés :</h2>
      { cityparking.length>0 ? (
      <ul>
        {cityparking .map(parking=>(
        <li>
            <p>Nom du parking : {parking.name}</p>
            <p>Capacités : {parking.numberofspots}</p>
            <p>Tarif horaire : {parking.hourlyrate} €</p>
            <p>Statut : {parking.opened ? 'OUVERT' : 'FERME'}</p>
            
        </li>
          
        ))}
      </ul>
      ) : (
        <p>aucun parking associé</p>
      )
      }
    </Layout>
  )
};
