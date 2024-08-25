export function convertToCurrency(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export function normalizeTime(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

export function normalizeDate(date) {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const day = dateObj.getDay();
  const year = dateObj.getFullYear();
  return month + ' ' + day + ', ' + year;
}
