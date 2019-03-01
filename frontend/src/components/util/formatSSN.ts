export default function formatSSN(value: string) {
  var val = value.replace(/\D/g, '');
  var newVal = '';
  if (val.length > 4) {
    value = val;
  }
  if (val.length > 3 && val.length < 6) {
    newVal += val.substr(0, 3) + '-';
    val = val.substr(3);
  }
  if (val.length > 5) {
    newVal += val.substr(0, 3) + '-';
    newVal += val.substr(3, 2) + '-';
    val = val.substr(5);
  }
  newVal += val;
  return newVal.substring(0, 11);
}
