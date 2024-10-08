import { toSlug } from '../Utils/toSlug';

describe('toSlug', () => {
  it('devrait convertir une chaîne de caractères en slug', () => {
    expect(toSlug('Je Suis Un Exemple')).toBe('je-suis-un-exemple');
  });

  it('devrait retirer les accents', () => {
    expect(toSlug('Café École')).toBe('cafe-ecole');
  });

  it('devrait supprimer les caractères spéciaux', () => {
    expect(toSlug('Salut! @tous')).toBe('salut-tous');
  });

  it('devrait gérer les espaces multiples correctement', () => {
    expect(toSlug('Bonjour   tout   le   monde')).toBe('bonjour-tout-le-monde');
  });

  it('devrait laisser les chiffres intacts', () => {
    expect(toSlug('123 Bonjour')).toBe('123-bonjour');
  });
});
