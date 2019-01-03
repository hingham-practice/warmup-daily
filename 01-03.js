let arr = [1, 2, 3, 4, 5, 6, 7, 9]

function forLoop(myArr){
  for(let i in myArr){
    console.log(myArr[i]);
  }
}

function whileLoop(myArr){
  let i = 0;
  while(i < myArr.length){
    console.log(myArr[i]);
    i++;
  }
}

function myMap(myArr, cb){
  let newArr = [];
  for(let i in myArr){
    newArr.push(cb(myArr[i], i) );
  }
  return newArr;
}

function myFilter(myArr, cb){
  let newArr = [];
  for(let i in myArr){
    if(cb(myArr[i], i)){
      newArr.push(myArr[i]);
    }
  }
  return newArr;
}


function myReduce(accumlator, myArr, cb){
  for(let i in myArr){
    accumlator = cb(accumlator, myArr[i], i, myArr);
  }
  return accumlator;
}

const people = ['Kookla','Fran','Ollie'];

let newPeople = ['Odie', ...people, 'Garfield'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const newStuff = {...stuff, cars: [...stuff.cars, 'nissan'] }


let state = {};

let newState = { newStuff: {...stuff, cars: [...stuff.cars, 'nissan']}, newPeople: ['Odie', ...people, 'Garfield']};




console.log(newState);

reduce = (accumlator, e, i, arr) =>{
  return accumlator += e;
}

console.log(myReduce(2, arr, reduce));

function myCb (e, i){
  if(e>4){return true;}
}

