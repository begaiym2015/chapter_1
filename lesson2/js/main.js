// Запись несколких переменных после единственного объявления


// var firstName = 'Jack', lastName = 'Jahnson';
// console.log(firstName, lastName);


// Отличия var, let

// var хойстится let не хойстится
// console.log(firstName); // undefinded
// var firstName = 'Jack';
// console.log(firstName);
// let firstName = 'Jack';

//Объявление двух let невозможно
// var firstName = 'Jack';
// var firstName = 'John';
// console.log(firstName);

// let firstName = 'Jack';
// let firstName ='John';
// console.log(firstName);

//var записывается в глобальный обект window
// var firstName = 'Jack';
// console.log(window.firstName);

// let не записывается в объект window
// let firstName = 'Jack';
// console.log(window.firstName);//undefinded


//Переменная объявлена через const унаследовала все принципы 
//которые свойственны переменной let,но с небольшимы отличиями

//переназначать let возможно
// let firstName = 'Jack';
// console.log(firstName);
// firstName = 'John';
// console.log(firstName);

//Переназначение const невозможно

// const firstName = 'jack';
// firstName = 'John';
// console.log(firstName);



//оъекты

// const person = {
//     name : 'Jack',
//     age : 20,
//     childs : ['John' , 'Luci']
// }

// //Доступ к свойсвам обьекта
// console.log(person.name);

// //Нестандартное значение ключей
// const notStandartFields = {
//     'kebab-case': 'i can use it :D',
//     '0':10
// }
// console.log(notStandartFields['kebab-case']);

//переназначение свойств даже если это константа
// person.name = 'John';
// console.log(person);


//Добавление свойсв из вне
// person.weight = '80kg';
// console.log(person);

//Удаление поле из обьекта
// delete person.name;
// console.log(person);


//Массивы

// const arrNums = [1,2,3,4,5];
// console.log(arrNums);

// //Длина массива
// console.log(arrNums.length);

// //Доступ к первому элементу массива
// console.log(arrNums[0]);


// //Доступ к последнему элементу массива
// console.log(arrNums[arrNums.length-1]);
 

//переназначение элемента массива

// arrNums[2] = 10;
// console.log(arrNums);

//Оператор инкремент

// let num = 0;
// console.log(++num);
// console.log(num);


//Циклы

//Цикл for
// for (let i=0; i<=100; i++){
//     console.log('Итерация №' +i);
// }


// const arrNums = [1,2,3,4,5];
// for(let i=0; i< arrNums.length; i++){
//     // console.log(arrNums[i]);
//     console.log(arrNums[i]*2);
// }


//поиск элемента в массиве

// let value = null;

// for(let i=0 ; i<arrNums.length;i++){
//     if (arrNums[i]===4)  value = arrNums[i];
// }
// console.log(value);

//Вытаскиваем все элементы больше 3х в отдельный масиив
// const arrNums2 = [];
// for (let i = 0; i < arrNums.length; i++){
//     if(arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }
// console.log(arrNums2);

//Цикл while
 
// let i=0;
// while(i < 10 ){
//     console.log('Итерация №' + i++)
// }

//Цикл do while
// let  i = 0;
// do { 
//     console.log('Итерация №' + i++);
// } while (false);

//Методы массива stage 1


const someFamily =[ {
    name: 'March',
    position: 'Mother',
    age : 36

},
{
    name: 'Homer',
    position: 'Father',
    age : 40

},
{
    name: 'Barth',
    position: 'Brother',
    age : 15

},
{
    name: 'Liza',
    position: 'Sister',
    age : 12

}
];

//Метод push/pop

const newChild = {
        name: 'Maggi',
        position: 'Daughter',
        age : 2
    
    }
// someFamily.push(newChild); //Добовляет элемент в конец массива
// someFamily.pop(); //Удаляет последний элемент массива
// console.log(someFamily);


// //Методы shift/unshift
// someFamily.shift(); // удаляет первый элемент
// someFamily.unshift(newChild); //добовляет в начало элемент
// console.log (someFamily);


//Метод splice
//  someFamily.splice(1,1);//Удаление 
// console.log(someFamily);



// someFamily.splice(2, 0, newChild);
// console.log(someFamily);


//Самостоятельно узнать про собрата splice . метод slice


// const simpsonsFamily = [];
// for (let i=0; i<someFamily.length; i++){
//     someFamily[i].lastname = 'simpson';
//     simpsonsFamily.push(someFamily[i]);
// }
// console.log(simpsonsFamily);

//метод foreach
// someFamily.forEach(function(item){
// item.lastName = 'Simpson';
// simpsonFamily.push(item);

// })
// console.log(simpsonFamily);

//Метод map
// const simpsonFamily = someFamily.map(function(item){
//     item.lastName= 'Simpson';
//     return item;
// })
// console.log(simpsonFamily);




for(let x=0; x<3; x++){
    console.log(x,'first cycle');
    for(let y=0; y<3 ; y++){
        console.log(y , 'socond cycle');
    }
}