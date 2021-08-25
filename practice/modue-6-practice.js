console.log('module-6')


// 1
let result = arr.filter((obj) => obj.born >= 1800 && obj.born < 1900)
console.log(result);

// 2
// let age = obj.dead - obj.born
result = arr.reduce((acc, obj) => (acc += obj.dead - obj.born)
, 0)
console.log(result);

// 3
result = arr.sort((a, b) =>
    (a.name + ' ' + b.name).localeCompare(a.surname + ' ' + b.surname)
)
console.log(result);

// 4 
result = arrsort((a,b) => {
return (a.dead - a.born) - (b.dead - b.born)
})
console.log('result', result);
result.forEach((el) => console.log(el.dead - el.born));

// 5
result = arr.filter((obj) => !(obj.born >= 1400 && obj.born < 1700))
console.log('result', result);

// 6 
result = arr.sort((a, b) => a.born - b.born[arr.length - 1])
console.log('result', result);

// 7
result = arr.find((obj) => {
    if (obj.name + ' ' + obj.surname === 'Albert Einstein') {
        return obj.born
    }
}).born
console.log('result', result);

result = arr.reduce((acc, obj) => {
    if (obj.name + ' ' + obj.surname === 'Albert Einstein') {
   acc = obj.born
    }
        return acc

}, 0)
console.log('result', result);

// 8
result = arr.filter((obj) => obj.surname[0] === 'c')
console.log('result', result);

// 9
result = arr.filter((obj) => obj.name[0] !== 'A')
console.log('result', result);

// 10 
result = arr.sort((a, b) => {
    return (a.dead - b.born) - (b.dead - b.born)
})
let youngest = result[0]
let oldest = result.reverse[0]
console.log('result', youngest, oldest);

// 11
result = arr.filter((obj) => obj.name[0] === obj.surname[0])
console.log('result', result);

// 12
result = arr.every((obj) =>  obj.dead >= 1800 && obj.dead < 1900)
console.log('result', result);