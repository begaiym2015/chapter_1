//задание 9
// array = ["Targarien", "stark" , "Lanister",
// "Baratheon" , "Greyjoy"];
// console.log(array[2]);
// console.log(array[0] , array[4]);

// var lastarray = array.pop ();
// console.log(lastarray);
 

// var lastarray = array.shift();
// console.log(lastarray);



//задание 10
// var a ;
// for (a = 1; a <= 100; a++){
//     if (a % 2 == 0){
//         console.log (a);
// //     }
// // }



// var a = 1;
// var a1 = [];
// for (a = 1; a <= 100; a++) {
//     a1.push(a);
// if (a1 % 3 == 0 && a1 % 5 == 0) {
//     console.log("FizzBuzz");
// }
// else if (a1 % 3 == 0){
//     console.log("Fizz");
// }  
// else if (a1 % 5 == 0){
//     console.log("Buzz");
// }
// else {
//     console.log(a1);
// }
// }


//задание 11
//     var a = 1;
// for (a = 1; a <= 100; a++) {
//     if (a % 3 == 0 && a % 5 == 0) {
//         console.log("fizzbuzz");
//     } else if (a % 3 == 0) {
//         console.log("fizz");
//     } else if (a % 5 == 0) {
//         console.log("buzz");
//     } else {
//         console.log(a);
//     }
// }


//задание12
// var student = {'name' : 'David', 'sClass' : 'VI',  'age': 12} ;
//      console.log(student.name);


//задание 13
// var r = +prompt('Введите радиус круга');
// alert('Площадь=' + Math.PI * ((r)*(r)));
// alert('Длина окружности=' + 2 * Math.PI * (r));

//задание 14

let arr = prompt('Введите слово');
// let arr = i.split('');
let arr1 = [];
for(let i=0; i<= arr.length; i++){
    for(let a = i+1; a <= arr.length; a++){
        arr1.push(arr.slice(i,a))
    }
}console.log(arr1);