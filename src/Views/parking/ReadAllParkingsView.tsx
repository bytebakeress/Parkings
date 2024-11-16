import { html } from 'hono/html';  // Pour générer le HTML
import { Layout } from '../Shared/Layout';  // Layout pour le rendu HTML
import { Parking } from '../../models/Parking';  // Modèle Parking

// Définir le type des propriétés attendues dans la vue
type ReadAllParkingsViewProps = {
  parkings?: Parking[];  // Liste des parkings à afficher
  error?: string;   // Message d'erreur (si disponible)
};

// Composant pour afficher chaque parking avec un lien
const ParkingLink = ({ parking }: { parking: Parking }) => {
  console.log("parking.id");
  console.log(parking.id);
  return html`
    <li>
      <a href="/parkings/${parking.id}">${parking.name} (cliquez pour afficher plus de détails)</a>
      <p>Coordonnées GPS : ${parking.location.latitude}, ${parking.location.longitude}</p>
    </li>
  `;
};

// Composant pour afficher la liste des parkings
const ParkingList = ({ parkings }: { parkings: Parking[] }) => {
  return html`
    <ul>
      ${parkings.map((parking) => ParkingLink({ parking }))}
    </ul>
  `;
};

// Vue principale qui génère le HTML complet
const ReadAllParkingsView = async ({ parkings, error }: ReadAllParkingsViewProps) => {
  if (error) {
    return Layout({
      pageTitle: 'Erreur',
      children: html`
        <h1>Erreur</h1>
        <p>${error}</p>
      `,
    });
  }

  return Layout({
    pageTitle: 'Liste des Parkings',
    children: html`
      <h1>Liste des Parkings</h1>
      ${parkings ? ParkingList({ parkings }) : html`<p>Aucun parking trouvé.</p>`}
    `,
  });
};

export default ReadAllParkingsView;


/*import { Parking } from "../../models/Parking";
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
*/