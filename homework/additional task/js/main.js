//задание 1
    // let a=[];
    // for(let i=1; i<=5000 ; i++){
    //     if(i % 3 ==0 && i%5==0 && i%7==0){
    //         a.push(i);
    //     }
    // }console.log(a);

//задание 2
// let arrNums = [1,5,8,0,9,0,8,0,4,10,11];
// arrNums.sort(function(a, b) {
//     return b - a;
//   });
//   console.log(arrNums);


// let arr = [5,5,8,0,0,0,4,5,9,12,15];
// let arrT = [];
// let arrF = [];
// arrF = arr.filter(function(number) {
//    return number === 0;
// });
// arrT = arr.filter(function(number) {
//   return number !== 0;
// });
//  console.log(arrT.join(',') + ',' + arrF);


//Task 4/1

// function findLW(str){
// let arrCountry = str.split(' ');
// let wordLength = 0;
// let longestCountry;
// let sC;

// for (let i=0; i < arrCountry.length; i++){
//   wordLength = arrCountry[1].length;
//   if(arrCountry[i].length > wordLength){
//     longestCountry = arrCountry[i];
//   }
//   else if(arrCountry[i].length < wordLength){
//     sC = arrCountry[i];
//   }
// } return longestCountry , sC;
// }
// const country = prompt('Введите страны через пробел');
// const longC = findLW(country);
// console.log(longC);


// function findLn(str){
//   let arrCountry = str.split(' ');
//   arrCountry.sort(function(a , b) {
//     return a.length - b.length});
//   }
//   const country = prompt('Введите страны через пробел');
//   const longC = findLn(country);
//   console.log(longC[0], longC[longC.length - 1]);



//задание 4/2
// function letterCount(str, letter){
//   // let arr = str.split();
//   let a = 0;
//   for (let i=0; i <= str.length; i++){
//     if (str[i] === letter){
//       a++;
//     }
//     }return a;
// }
// let str1 = prompt('Введите строку');
// let letter1 = prompt('Введите букву');
// let otvet = letterCount(str1 , letter1);
// console.log(otvet);


//задание 4/3

// function factorial(number){
//   let b=1;
//   for(let i = 1; i <= number; i++){
//     b = b * i;
//   }return b;
// }
// const f = +prompt('Введите число');
// const a = factorial(f);
// console.log(a);


//#4/5
// const newArr = function(x,y){
//     let arr = [];
//     if(x<y){

//     for (let i = x; i <= y; i++){
//       arr.push(i);
//     } else 
//        for (let i = x; i >= y; i++){
//        return arr.join(',');
// }
// let result = newArr(12,20);
// console.log(result);