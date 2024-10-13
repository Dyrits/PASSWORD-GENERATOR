const letters = [
  ...Array.from({ length: 26 }, (_, index) => String.fromCharCode(index + 97)),
  ...Array.from({ length: 26 }, (_, index) => String.fromCharCode(index + 65))
];
const numbers = Array.from({ length: 10 }, (_, index) => String(index));
const symbols = Array.from({ length: 15 }, (_, index) => String.fromCharCode(index + 33));

export { letters, numbers, symbols };
