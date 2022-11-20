import fetch from "node-fetch";

export {};

async function Todos() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await resp.json();

  console.log(result);
}
Todos();
