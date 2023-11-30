function addNumbers() {
    return new Promise((resolve, reject) => {
      
      let number1 = prompt("Enter the first number:");
      let number2 = prompt("Enter the second number:");
  
      if ((number1) ||(number2)) {
    
        reject(`${(number1) ? number1 : number2} ${(number1) && (number2) ? 'and' : 'or'} ${(number2) ? number2 : ''} not a number(s).`);
      } else {
    
        let sum = Number(number1) + Number(number2);
        resolve(`${number1} + ${number2} = ${sum}`);
      }
    });
  }
  
  addNumbers()
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error);
    });
  