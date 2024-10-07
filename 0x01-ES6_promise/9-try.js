export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the passed mathFunction and push the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error is thrown, push the error message to the queue
    queue.push(error.message);
  } finally {
    // Always append the final message to the queue
    queue.push("Guardrail was processed");
  }

  return queue;
}
