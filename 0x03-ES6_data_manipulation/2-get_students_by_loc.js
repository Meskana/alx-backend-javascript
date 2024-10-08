export default function getStudentsByLocation(array, city) {
  return array.filter((e) => e.location === city);
}
