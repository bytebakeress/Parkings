import { Parking } from "../../models/Parking";
import { Layout } from "../Shared/Layout";

// Définition du type de paramètre pour le composant
type ReadAllParkingsViewProps = {
  parkings: Array<Parking>;
};

// Composant pour afficher un lien vers un parking et ses informations
const ParkingLink = ({ parking }: { parking: Parking }) => {
  return (
    <li>
     Parking <a href={`/parkings/${parking.id}`}>{parking.name} (Appuyer pour plus de detail pour le parking)</a>
      <p>
        Coordonnées GPS : {parking.location.latitude}, {parking.location.longitude}
      </p>
      
    </li>
  );
};

// Composant pour afficher la liste des parkings
const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => (
  <ul>
    {parkings.map((parking) => (
      // La propriété key est utilisée ici par React pour identifier chaque élément, mais elle n'est pas passée à ParkingLink
      <ParkingLink  parking={parking} />
     
    ))}
  </ul>
);

// Composant principal pour afficher la vue des parkings
const ReadAllParkingsView = ({ parkings }: ReadAllParkingsViewProps) => {
  return (
    <Layout pageTitle="Liste des parkings">
      <h1>Liste des parkings</h1>
      <ParkingList parkings={parkings} />
    </Layout>
  );
};

export default ReadAllParkingsView;
