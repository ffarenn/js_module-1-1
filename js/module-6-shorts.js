

//  array.forEach() => undefined

const numbers = [1, 2, 25, 56, 1545465, 454];
console.log('array', numbers);

const newArr = [];
const forEachResult = numbers.forEach(num => newArr.push(num + 1)
    // doesn not return anything anyway or change original array
);
console.log(forEachResult);
console.log(newArr);


//  array.map() => return same size array
const mapResult = numbers.map((item) => item + 1);
console.log(mapResult);



// array.filter() => returns array of elements from statement 
const filterResult = numbers.filter((elem) => elem > 2 && elem < 4)
console.log(filterResult);


// array.find() => returns 1 element of array, first true
const findResult = numbers.find((i) => i > 1 && i < 5)
console.log('findresult', findResult);

// array.reduce() => returns everything, array, object, number, stroke
const reduceResultArray = numbers.reduce((acc, elem) => acc += elem, [])
console.log('show', reduceResultArray);

const reduceNumber = numbers.reduce((total, num) =>
    total += num
, 0)
console.log('number', reduceNumber);



// array.every() => true if all true || false if one false (&&)
const everyResult = numbers.every((elem) => elem > 0)
console.log(everyResult);

// array.some () => true || false (||)
const someResult = numbers.some((elem) => elem > 5)
console.log(someResult);

// array.sort() => sorting array
const fruit = ['banana', 'apple', 'oranges'];

const sortFruits = fruit.sort()
//  reverse sort const sortFruits = fruit.sort().reverse
console.log(sortFruits);
console.log(fruit);
console.log(fruit === sortFruits);


const age = [54, 32, 17, 85, 100, -22];
const sortAges = age.sort((min, max) => min - max)
console.log(sortAges);