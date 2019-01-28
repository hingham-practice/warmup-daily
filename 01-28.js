myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function forLoop (arr){
   for(let i of arr){
    console.log(arr[i]);
   }
}

function whileLoop (arr){
    let i = 0;
    while(i<arr.length){
        console.log(arr[i]);
    }
}

function myMap (arr, cb){
    let newArr = [];
    for(let i of arr){
        newArr.push(cb(arr[i], i));
    }
    return newArr;
}

function myFilter (arr, cb){
    let newArr = [];
    for(let i of arr){
        if(cb(arr[i], i)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function myAcc (acc, arr, cb){
    let newArr = [];
    for(let i of arr){
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}




const people = ['Kookla','Fran','Ollie'];

const newPeople = ['odie', ...people, 'garfield'];


const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
  }

const newStuff = {...stuff, cars: [...stuff.cars, 'nissan']}

const state = {};

const newState = { newPeople: [...people], newStuff: {...stuff, cars:[...stuff.cars, 'nissan']}}
console.log(newState);
