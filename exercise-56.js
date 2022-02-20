
function sum(...numbers) {
    return numbers.reduce((sum,current)=> sum += current);
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));