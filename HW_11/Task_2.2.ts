export {};

import fetch from "node-fetch";

async function Todos1() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: any = await response.json();
  const result = todos.map((item: any) => {
    return { id: item.id, title: item.title };
  });
  console.log(result);
}
Todos1();
