export = function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const sucess = true;
    if (sucess) {
      resolve(sucess);
    } else {
      reject("404!");
    }
  });
};
