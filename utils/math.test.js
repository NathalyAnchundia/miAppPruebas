import { suma } from './math';

test('suma correctamente', () => {
  expect(suma(2, 3)).toBe(5);
});

test('lanza error si no son números', () => {
  expect(() => suma('a', 2)).toThrow();
});