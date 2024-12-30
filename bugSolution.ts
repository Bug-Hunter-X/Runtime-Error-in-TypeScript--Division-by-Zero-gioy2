function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    return 0; // Handle the division by zero case
  }
  return a / b;
}

console.log(add(5,3));
console.log(subtract(10,5));
console.log(multiply(5,3));
console.log(divide(10,0));//this line will not cause an error