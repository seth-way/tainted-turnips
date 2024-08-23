export function convertToCurrency(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function normalizeTime(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`
}
