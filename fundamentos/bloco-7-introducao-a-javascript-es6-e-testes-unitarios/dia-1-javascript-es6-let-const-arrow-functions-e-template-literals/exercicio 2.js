const fatorial = (Number) => {
    let result = 1

for (let index = 2; index <= Number; index ++){
    result *= index;
    }
    return result
}




const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));



// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));