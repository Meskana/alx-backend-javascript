function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}
module.exports = taskFirst;

function getLast() {
  return " is okay";
}
module.exports = getLast;

function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
module.exports = taskNext;
