const str='Hello World'
// reverse a string using to the javascript inbuilt method
const reversed=str.split('').reverse().join('')
console.log(reversed);


//  reverse a string without inbuild methods in javascript

let rev=''
for(i=str.length-1;i>=0;i--){
    rev += str[i]
}
console.log(rev);
