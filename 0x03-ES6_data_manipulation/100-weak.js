// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export default function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1); // If not, initialize with 1
  } else {
    const queryCount = weakMap.get(endpoint); // Get current query count
    weakMap.set(endpoint, queryCount + 1); // Increment the query count
  }

  // Check if the query count for this endpoint has reached 5
  if (weakMap.get(endpoint) >= 5) {
    throw new Error("Endpoint load is high");
  }
}
