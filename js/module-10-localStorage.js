// plugin
// library
// framework



const user = {
    name: 'Andrejs',
    age: 33,
    skills: ['HTML', 'Css'],
}

console.log(user);

console.log(JSON);

const jsonUser = JSON.stringify(user)
console.log('jsonuser', jsonUser);

const parseUser = JSON.parse(jsonUser)
console.log(parseUser);

console.log(localStorage);

const form = document.querySelector('.form')
    
console.log(form);

form.addEventListener('input', (e) => {
    console.log(e.target.name);
    if (e.target.name === 'firstInput') {
        localStorage.setItem('firstInput-data', e.target.value)
    } else if (e.target.name === 'secondInput') {
        localStorage.setItem('secondInput-data', e.target.value)
    } else {
        alert('Something went wrong')
    }
})
form.elements.firstInput.value = localStorage.getItem('firstInput-data')
 form.elements.secondInput.value = localStorage.getItem('secondInput-data')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const {firstInput, secondInput} = e.target.elements
    const obj = {
    firstInput: firstInput.value,
    secondInput: secondInput.value,
    }
    localStorage.setItem('obj', JSON.stringify(obj))
    localStorage.removeItem('firstInput-data')
    localStorage.removeItem('secondInput-data')
    firstInput.value = ''
    secondInput.value = ''
})
 