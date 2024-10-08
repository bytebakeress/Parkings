export const toSlug = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD') // Supprime les accents
      .replace(/[\u0300-\u036f]/g, '') // Supprime les diacritiques (les accents et autres signes diacritiques)
      .replace(/\s+/g, '-') // Remplace les espaces par des tirets
      .replace(/[^a-z0-9-]/g, ''); // Supprime tous les caractères non alphanumériques, sauf les tirets
  };
  
  