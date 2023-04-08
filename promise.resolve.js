function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
  console.log('Before');
  await delay(2000);
  const result = await Promise.resolve('Hello World!');
  console.log(result); // Output: Hello World!
  await delay(2000);
  console.log('After');
}

test();
