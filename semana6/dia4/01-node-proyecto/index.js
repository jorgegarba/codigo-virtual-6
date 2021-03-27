import axios from "axios";

console.log("Hola mundo mi proyecto en node");
for (const n of [1, 5, 3, 5, 8]) {
  console.log(n);
}

axios.get("https://reqres.in/api/users").then(data => {
  console.log(data.data);
})


