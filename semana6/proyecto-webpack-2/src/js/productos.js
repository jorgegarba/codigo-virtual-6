import { getPosts } from "./servicios.js"
getPosts().then(data => {
  console.log(data);
})