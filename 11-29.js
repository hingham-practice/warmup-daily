myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = (myArr)=>{
    for(let i of myArr){
        console.log(myArr[i]);
    }
 
}

const whileLoop = (myArr)=>{
    let i = 0;
    while(i < myArr.length ){
        console.log(myArr[i]);
        i++;
    }
}


const myMap = (myArr, cb)=>{
    let newArr = [];
    for(let i of myArr){
        newArr.push( cb(arr[i], i) );
    }
    return newArr;
}

const myFilter = (myArr, cb)=>{
    let newArr = [];

    for (let i of myArr){
        if(cb(arr[i], i)){
            newArr.push(arr[i])
        }
    }
    return newArr;
}



const myReduce = (acc, myArr, cb)=>{
    for(let i of myArr){
        acc = cb(acc, myArr[i], i, arr);
    }
    return acc;
}

const people = ['Kookla','Fran','Ollie'];

const newPeople = [ 'Ollie ', ...people, 'Garfiled'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const newStuff = {...stuff, cars: [...stuff.cars, 'nissan']}

const stuff = {...stuff, cars: [...stuff, 'nissan']}

const state = {};

const newState = { newStuff: {...stuff, cars: [stuff.cars, 'nissan']}, newPeople: [...people]};




