import { getUsers } from "./servicios.js";
getUsers().then(data => {
  console.log(data);
});
for (const n of [4, 5, 3, 8, 4]) {
  console.log(n);
}