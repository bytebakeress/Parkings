import { Layout } from '../Shared/Layout';
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
};
