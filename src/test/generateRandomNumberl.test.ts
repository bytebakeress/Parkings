import { generateRandomNumberId } from "../Utils/generateRandomNumberld";


describe('generateRandomNumberId', () => {
  it('devrait générer un nombre entier', () => {
    const id = generateRandomNumberId();
    expect(Number.isInteger(id)).toBe(true);
  });

  it('devrait générer un nombre à 6 chiffres', () => {
    const id = generateRandomNumberId();
    expect(id).toBeGreaterThanOrEqual(100000);
    expect(id).toBeLessThanOrEqual(999999);
  });

  it('devrait générer un nombre positif', () => {
    const id = generateRandomNumberId();
    expect(id).toBeGreaterThan(0);
  });

  it('devrait générer des ids différents à chaque appel', () => {
    const id1 = generateRandomNumberId();
    const id2 = generateRandomNumberId();
    expect(id1).not.toBe(id2);
  });
});
