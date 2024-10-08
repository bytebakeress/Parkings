export function generateRandomNumberId (): number  {
  return Math.floor(100000 + Math.random() * 900000); // Génère un nombre à 6 chiffres
};
