export {};

import fetch from "node-fetch";

async function Todos() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await resp.json();
}
Todos().then((data) => console.log(data));
