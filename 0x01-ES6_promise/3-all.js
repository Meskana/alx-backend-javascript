import { uploadPhoto, createUser } from "./utils";
export default function handleProfileSignup() {
  const promise = [uploadPhoto(), createUser()];
  return Promise.all(promise)
    .then(([uploadPhoto, createUser]) => {
      console.log(
        `${uploadPhoto.body},${createUser.firstName},${createUser.lastName}`
      );
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
