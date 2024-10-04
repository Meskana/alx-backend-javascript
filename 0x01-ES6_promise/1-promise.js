export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(sucess);
    } else {
      reject("404!");
    }
  });
}
