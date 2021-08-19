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
// array.every() => true if all true || false if one false (&&)
// array.some () => true || false (||)

// array.sort() => sorting array