myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop (arr){
    for ( let i of arr){
        console.log(arr[i]);
    }
}

function whileLoop (arr){
    let i = 0;
    while(i< arr.length){
        console.log(arr[i]);
        i++;
    }
}

function myMap (arr, cb){
    let a = [];
    for( let i in arr){
        a.push(cb(arr[i], i));
    }
    return a;
}

function myFilter (arr, cb){
    let a = [];
    for(let i in arr){
        if(cb(arr[i], i)){
            a.push(arr[i]);
        }
    }
    return a;
}

function myAcc (acc, arr, cb){
 for (let i of arr){
     acc = cb(acc, arr[i], i, arr);
 }
 return acc;
}



const people = ['Kookla','Fran','Ollie'];

const newPeople = ['Odie', ...people, 'Garfield'];

const stuff = {

}

const newStuff = {...stuff, cars: [...stuff.cars, 'nissan']}

const state = {};

const newState = { newStuff: {...stuff, cars: [...stuff.cars, 'nissan']}, newPeople: ['Odie', ...people, 'Garfield']}

console.log(newState);
