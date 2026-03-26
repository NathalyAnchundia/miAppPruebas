export const suma = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Debe ser números');
  }
  return a + b;
};