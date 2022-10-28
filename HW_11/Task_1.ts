/*import fetch from "node-fetch";

const posts = ["15", "23", "7", "3"];

async function f1(id: any) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`);
  const res = await response.json();
  return res;
}

posts.forEach(async (post) => {
  const result = await f1(post);
  console.log(result);
});*/

import fetch from "node-fetch";

const posts = ["15", "23", "7", "3"];

async function f1(id: any) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`);
  const res: any = await response.json();
  return res;
}

const comments = async () => {
  for (let i = 0; i < posts.length; i++) {
    const result = await f1(posts[i]);
    console.log(result);
  }
};
comments();
