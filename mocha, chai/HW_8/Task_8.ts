export {};
const products = new Map<string, number>([
  ["огурцы", 300],
  ["помидоры", 200],
  ["соль", 10],
  ["сметана", 110],
]);

const salad = (map: any) => {
  for (const [key, value] of map) {
    if (value > 100) {
      console.log(key, "==>", value);
    }
  }
};
salad(products);

function salad1(map: any) {
  for (const [key, value] of map) {
    if (value > 100) {
      console.log(key, "==>", value);
    }
  }
}
salad1(products);
