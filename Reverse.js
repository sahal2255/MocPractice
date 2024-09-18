var str='Hello This Is the Reverse each sentence in the string'

let result=str.split(' ')
let reversed=result.map(function(word){
    return word.split('').reverse('').join('')
})
console.log(reversed.join(' '))