myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = (myArr) =>{
  for (let i = 0; i< myArr.length; i++){
    console.log(myArr[i]);
  }
}

const whileLoop = (myArr) =>{
  let i = 0; 
  while(i< myArr.length){
    console.log(myArr[i]);
  }
}

const myMap = (myArr, cb)=>{
  let a = [];
  for(let i = 0; i< myArr.length; i++){
    a.push( cb(myArr[i], i) );
  }
  return a; 
}

const myFilter = (myArr, cb) =>{
  let a = [];
  for (let i = 0; i<myArr.length; i++){
    if(cb(myArr[i], i )){
      a.push(myArr[i]);
    }
  }
  return a;
}

const myReduce = (acc, myArr, cb) =>{
  for(let i = 0; i< myArr.length; i++){
    acc = cb(acc, myArr[i], i );
  }
  return acc;
}

const people = ['Kookla','Fran','Ollie'];

const newPeople = ['oldie', ...people, 'Garfield']


const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const newStuff ={...stuff, cars: [...stuff.cars, 'nissan']}; 


const newState = {newStuff: {...stuff, cars: [...stuff.cars, 'nissan']}, newPeople: ['odie', ...people, 'garfield']}


console.log(newStuff);
