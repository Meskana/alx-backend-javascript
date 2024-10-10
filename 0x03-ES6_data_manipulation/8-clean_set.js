export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== "string") {
    return ""; // Return empty string if startString is invalid or empty
  }

  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join("-");

  return result;
}
