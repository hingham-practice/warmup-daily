let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function forLoop (arr){
  for(let i = 0; i< myArr.length; i++){
    console.log(myArry[i]);
  }
}

function whileLoop(arr){
  let cnt = arr.length;
  while(cnt< arr.length){
    console.log(arr.length[cnt]);
    cnt ++;
  }
}

function mapper (arr, cb){
  let newArr = [];
  for(let i = 0; i< arr.length; i++){
    newArr.push( cb(arr[i], i) );
  }
  return newArr;
}

function filter(arr, cb){
  let newArr = [];
  for(let i = 0; i< arr.length; i++){
    if(cb(arr[i], i)){
      newArr.push( arr[i] );
    }
  }
  return newArr;
}

function reduce(start, arr, cb){
  let accumulator = start;

  for(let i = 0; i< arr.length; i++){
    accumulator += cb(start, arr[i], i, arr);
  }
  return accumulator;
}


const people = ['Koala', 'Fran', 'Ollie'];
const newPeople = ['Ollie', ...people, 'Garfield'];

const stuff = {
  tv: 'huge', 
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
}

const newStuff = {...stuff, cars: [...stuff.cars, 'Nissan'] };

let state = {people, stuff};

// let newState = {...state, people: ['Ollie', ...state.people, 'Garfield'], 
// stuff[cars]: [...stuff.cars]};

console.log(people, stuff);

