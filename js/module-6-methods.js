// Lets check no good codinf first

let myName = 'Andrejs'

console.log(myName);

function changeName(value) {
    return myName = value
}

changeName('Igor');
console.log(myName);

const scores = [1, 5, 185, 253, 2665];
function getResults(results) {
    console.log(...results);
    console.log(Math.max(...results))
    return (results = Math.max(...results))
}

console.log(getResults(scores))

// --------- not good coding
const numbers2 = [1, 2, 1, 2, 5, 14];
function updateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1
    }
    return arr
}

console.log(updateArray(numbers2))

// lets try good way of coding (functional methods of arrays)


// array.method(callback)
// //  elemement first must be, second index, third array
// callback = () => { }

//  array.method((elem, index, array) =>{})

//  array.forEach() => undefined

const numbers = [1, 2, 25, 56, 1545465, 454];
console.log('array', numbers);

const newArr = [];
const forEachResult = numbers.forEach(num => {
    console.log('ffff', num);
    newArr.push(num + 1)
    // doesn not return anything anyway or change original array
    return num
});
console.log(forEachResult);
console.log(newArr);


//  array.map() => return same size array
const mapResult = numbers.map((item) => {
    console.log(item);
    return item + 1
});
console.log(mapResult);
console.log(mapResult === numbers);


// array.filter() => returns array of elements from statement 
const filterResult = numbers.filter((elem) => {
    console.log(elem);
    return elem > 2 && elem < 4;
})
console.log(filterResult);


// array.find() => returns 1 element of array, first true
const findResult = numbers.find((i) => {
    // console.log(i);
    return i > 1 && i < 5;
})
console.log('findresult', findResult);

// array.reduce() => returns everything, array, object, number, stroke
const reduceResultArray = numbers.reduce((acc, elem) => {
    console.log(acc, elem);
    // iteration - 1 [], 1
// iteration - 2 undefined, 2
    acc.push(elem)
    return acc
}, [])
console.log('show', reduceResultArray);
console.log(reduceResultArray === numbers);

const reduceResultObject = numbers.reduce((newObject, number) => {
    console.log(newObject, number);
    newObject[number] = number
    return newObject
}, {})
console.log('reduceResultObject', reduceResultObject);

const reduceNumber = numbers.reduce((total, num) => {
    console.log(total, num);
    total += num
    return total
}, 0)
console.log('number', reduceNumber);



// array.every() => true if all true || false if one false (&&)
const everyResult = numbers.every((elem) => {
    console.log(elem);
    return elem > 0
})
console.log(everyResult);

// array.some () => true || false (||)
const someResult = numbers.some((elem) => {
    console.log(elem);
    return elem > 5
})
console.log(someResult);

// array.sort() => sorting array
const fruit = ['banana', 'apple', 'oranges'];

const sortFruits = fruit.sort()
//  reverse sort const sortFruits = fruit.sort().reverse
console.log(sortFruits);
console.log(fruit);
console.log(fruit === sortFruits);


const age = [54, 32, 17, 85, 100, -22];
const sortAges = age.sort((min, max) => {
    return min - max
})
console.log(sortAges);

console.log('dasdasdsad');

// CHAINS
const students = [
    { name: 'Ph', age: 31, gender: 'male' },
    { name: 'TT', age: 21, gender: 'female' },
    { name: 'OO', age: 41, gender: 'male' },
    { name: 'KLL', age: 20, gender: 'male' },
    { name: 'NN', age: 35, gender: 'male' },
];
console.log(students);

const result = students.filter((student) => student.gender === 'female')
    .map((girl) => girl.name)
    .sort()
console.log(result);

const result2 = students.sort((a,b) => a.age - b.age)[0]
console.log('2', result2);
    
// last element 
const result3 = students.sort((a,b) => a.age - b.age)[students.length - 1]
console.log('3', result3);
    
xonst result4 = students.reduce((acc, elem, i, arr) => {
    console.log(acc += elem.age / arr.length);
    return acc
}, 0)