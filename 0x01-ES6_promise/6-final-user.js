import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup() {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  return Promise.allSettled(promise)
    .then((results) =>
      results.map((result) => ({
        status: result.status,
        valus: result.status === "fulfilled" ? result.valus : result.reason,
      }))
    )
    .catch(() => {
      console.log("Signup system offline");
    });
}
