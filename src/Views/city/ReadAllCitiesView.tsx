
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
