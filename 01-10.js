myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop (arr){
  for(let i = 0; i< arr.length; i++){
    console.log(i);
  }
}

function whileLoop (arr){
  let cnt = 0; 
  while(cnt< arr.length){
    console.log(arr[cnt]);
    cnt++;
  }
}

function myMap (arr, cb){
  let newArr = [];
  for(let i = 0; i<arr.length; i++){
    newArr.push(cb(arr[i], i ))
  }
  return newArr;
}

function myFilter (arr, cb){
  let newArr = [];
  for(let i = 0; i< arr.length; i++){
    if(cb(arr[i], i)){
      newArr.push(arr[i]);
    }
  }
}

function myAcc (acc, arr, cb){
  for(let i = 0; i< arr.length; i++){
    acc = cb(acc, arr[i], i, arr );
  }
  return acc;
}



const people = ['Kookla','Fran','Ollie'];

const newPeople = ['Odie', ...people, 'Garfield'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const newStuff = {...stuff, cars: [...stuff.cars, 'missan']};

const state = {};

const newState = { newStuff: {...stuff, cars: [...stuff.cars, 'nissan']}, newPeople: ['Odie', ...people, 'Garfield']}

console.log(newState);
