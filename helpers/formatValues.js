export default function format(string) {
  let number = Number(string);
  let decimalPart = number.toFixed(2).substring(string.length);
  return '$ ' + number.toLocaleString() + decimalPart;
}
