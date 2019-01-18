myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = (myArr)=>{
 for(let i =0; i<myArr.length; i++){
     console.log(myArr[i]);
 }
 
}

const whileLoop = (myArr)=>{
    let i = 0;
    while(i<myArr.length){
        console.log(myArr[i]);
    }

}


const myMap = (myArr, cb)=>{
    let a = [];
  for(let i = 0; i<myArr.length; i++){
    a.push(cb(arr[i], i));
  }
  return a;
}

const myFilter = (myArr, cb)=>{
 let a = [];
 for(let i = 0; i<myArr.length; i++){
     if(cb(arr[i]), i){
         a.push(myArr[i]);
     }
 }
 return a;
}


const myReduce = (acc, myArr, cb)=>{
 for(let i = 0; i<myArr.length; i++){
     acc = cb(acc, myArr[i], i, myArr);
 }
 return myReduce;
}

const people = ['Kookla','Fran','Ollie'];

const newPeople = ['ollie', ...people, 'garfield'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const stuff = {...stuff, cars: [...stuff, 'nissan']}

const newState = {newStuff: {...stuff, cars: [...stuff.cars, nissan]}, newPeople: ['Odie', ...people, 'Garfield']};

