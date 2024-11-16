
import { html } from 'hono/html';
import { Layout } from '../Shared/Layout';
import { City } from '../../models/City';

type ReadAllCitiesViewProps = {
  cities?: City[];
  error?: string;
};

const CityLink = ({ city }: { city: City }) => {
  return html`
    <li>
      <a href="/cities/${city.Slug}">${city.name} - ${city.country}</a>
      <p>Cordonnées GPS : ${city.location.latitude}, ${city.location.longitude}</p>
    </li>
  `;
};

const CitiesList = ({ cities }: { cities: City[] }) => {
  return html`
    <ul>
      ${cities.map((city) => CityLink({ city }))}
    </ul>
  `;
};

const ReadAllCitiesView = async ({ cities, error }: ReadAllCitiesViewProps) => {
  if (error) {
    return Layout({
      pageTitle: 'Erreur',
      children: html`
        <h1>Erreur</h1>
        <p>${error}</p>
      `,
    });
  }

  if (!cities || cities.length === 0) {
    return Layout({
      pageTitle: 'Aucune Ville Trouvée',
      children: html`
        <h1>Aucune ville trouvée</h1>
        <p>Il n'y a pas de villes à afficher pour le moment.</p>
      `,
    });
  }

  return Layout({
    pageTitle: 'Liste des Villes',
    children: html`
      <h1>Liste des villes</h1>
      ${CitiesList({ cities })}
    `,
  });
};

export default ReadAllCitiesView;



/*
import { City } from "../../models/City";
import { Layout } from "../Shared/Layout";
import { html } from "hono/html"; 

// Définition du type de paramètre pour le composant
type ReadAllCitiesViewProps = {
  cities: Array<City>; 
};



const CityLink = ({city }: {city: City}) =>{
  return (
    <li>
      <a href = {`/cities/${city.Slug}`}> {city.name} -{city.country}</a>
      <p>Cordonnées GPS : {city.location.latitude}, {city.location.longitude}</p>
    </li>
  );
  
};
const CitiesList =({cities}: {cities: Array<City>})=>  (
   <ul> {
      cities.map((city)=>(
        <CityLink city ={city}/>
      ))}
  </ul>
);
const ReadAllCitiesView =({cities}: ReadAllCitiesViewProps)=>{
  return(
    <Layout pageTitle="liste des Villes">
      <h1>Liste des villes</h1>
      <CitiesList cities={cities}/>
    </Layout>
  );
};
export default ReadAllCitiesView;
*/