import { html } from 'hono/html';
import { Layout } from '../Shared/Layout';
import { Parking } from '../../models/Parking';

// Interface des propriétés attendues par la vue
type ReadOneParkingViewProps = {
    parking: Parking;
};

// Vue pour afficher les détails d'un parking spécifique
const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
    return Layout({
        pageTitle: `Détails du Parking - ${parking.name}`,
        children: html`
            <h1>Détails du Parking : ${parking.name}</h1>
            <p>Coordonnées GPS : ${parking.location.latitude}, ${parking.location.longitude}</p>
            <p>Nombre de places : ${parking.numberOfSpots}</p>
            <p>Ouvert : ${parking.opened ? 'Oui' : 'Non'}</p>
            <p>Taux horaire : ${parking.hourlyRate} €/h</p>
        `,
    });
};

export default ReadOneParkingView;

/*import { Layout } from '../Shared/Layout';
import { html } from 'hono/html';
import { Parking } from '../../models/Parking';

type ReadOneParkingViewProps = {
  parking: Parking; // Détails du parking
};

// La vue reçoit le parking comme paramètre
export const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
  return (
    <Layout pageTitle={`Parking - ${parking.name}`}>
      <h1>Parking : {parking.name}</h1>
      <p>Coordonnées GPS : {parking.location.latitude}, {parking.location.longitude}</p>
      <p>Capacité : {parking.numberofspots} places</p>
      <p>Tarif horaire : {parking.hourlyrate} €</p>
      <p>Statut : {parking.opened ? 'Ouvert' : 'Fermé'}</p>

    </Layout>
  );
};*/
