// 1--- Reverse each word in a string

// var str='Hello This Is the Reverse each sentence in the string'

// let result=str.split(' ')
// let reversed=result.map(function(word){
//     return word.split('').reverse('').join('')
// })
// console.log(reversed.join(' '))


// 2----remove duplicate in the array

// let arr=[1,2,3,1,2,5]
// const rem=[...new Set(arr)]
// console.log(rem)


// const unique=arr.filter((item,index)=>arr.indexOf(item)===index)
// console.log('unique',unique);


// 3- check the sting is a palindrome


// const str='Malayalam'
// function checkPalindrome(str){

    
//     const rev=str.split('').reverse().join('')
//     // console.log(str);
    
//     if(rev.toLocaleLowerCase()===str.toLocaleLowerCase()){
//         return true
//     }
//     return false
// }
// console.log(checkPalindrome(str))



// 4----sort the string in ascending order

// const string='ajmal'
// function one(string){
//     return string.split('').sort()
// }
// console.log(one(string));



// 5-- convert  the string words in to the uppercase


// const str='this is main page'

// const spl=str.split(' ')
// const re=spl.map((item)=>{
//     return item.charAt(0).toUpperCase()+item.slice(1)
// })
// const result=re.join(' ')
// console.log(result);


// 6---find occurance of the string

// const string='apple'
// const arr=string.split('')
// const re=arr.reduce((acc,cur)=>{
//     if(acc[cur]){
//         acc[cur]++;
//     }else{
//         acc[cur]=1;
//     }
//     return acc
// },{})
// console.log(re);
