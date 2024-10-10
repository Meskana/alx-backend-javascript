export default function hasValuesFromArray(Set, Array) {
  return Array.every((value) => Set.has(value));
}
