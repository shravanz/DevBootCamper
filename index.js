async function abc() {
  console.log(1);
  await Promise.resolve(2).then(console.log);
  console.log(3);
  await Promise.resolve(4).then(console.log);
  console.log(5);
}
console.log(0);
abc();
console.log(6);
