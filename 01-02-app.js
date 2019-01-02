'use strict';

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

forLoop = (arr) =>{
  for (let i = 0; i<arr.length; i++ ){
    console.log(arr[i]);
  }
}

whileLoop = (arr) =>{
  let i =0;
  while(i<arr.length){
    console.log(arr[i]);
    i++;
  }
}

myMap = (arr, cb) =>{
  let result = [];
  for(let i = 0; i< arr.length; i++){
    result.push( cb(arr[i], i) )
  }
  return result;
}

myFilter = (arr, cb) =>{
  let result = [];
  for(let i = 0; i<arr.length; i++){
    if( cb(arr[i], i) ){
      result.push(arr[i]);
    }
  }
  return result;
}

myReduce = (cb, accumulator, arr) =>{
  for( let i = 0; i<arr.length; i++){
    accumulator = cb(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const people = ['kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];

let newStuff = {...stuff, cars:[...stuff.cars, 'nissan']};

let newState = {newStuff: {...stuff, cars:[...stuff.cars, 'nissan']}, newPeople: ['Odie', ...people, 'garfield']};


console.log(newPeople, newStuff, newState);

console.log(people, stuff, state);




