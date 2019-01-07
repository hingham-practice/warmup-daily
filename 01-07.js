'use strict';


myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = (myArr) =>{
  for(let i = 0; i< myArr.length; i++){
    console.log(myArr[i]);
  }
}

const whileLoop = (myArr) =>{
  cnt = 0;
  while(cnt < myArr.length){
    console.log(myArr[i]);
    cnt++;
  }
}

const myMap = (myArr, cb)=>{
  let arr = [];
  for(let i = 0; i< myArr.length; i++){
    arr.push(cb(myArr[i], i));
  }
  return arr;
}

const myFilter = (myArr, cb) =>{
  let arr = [];
  for (let i = 0; i< myArr.length; i++){
    if(cb(myArr[i], i)){
      arr.push(myArr[i]);
    }
  }
    return arr;
}

const myReduce = (acc, myArr, cb) =>{
  for(let i = 0; i<myArr.length; i++){
    acc = cb(acc, myArr[i], i, myArr);
  }
  return acc;
}

const people = ['Kookla','Fran','Ollie'];


const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const newPeople = ['Odie', ...people, 'Garfiled'];
const newStuff = {...stuff, cars: [...stuff.cars, 'nissan']};


const newState = {newStuff: {...stuff, cars: [...stuff.cars, 'nissan']}, newPeople: ['Odie', ...people, 'Garfield']};


console.log(newState);
