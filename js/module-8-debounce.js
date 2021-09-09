console.dir(_.debounce)
//  _.debounce(callback, time)

// const refs = {
//     form: document.querySelector('.form'),
// }

import refs from '../references/refs.js'

const {form} = refs
console.log(form);

const options = {
    trailing: true
}


form.addEventListener(
    'input',
    _.debounce((e) => {
        console.log('1', e.target.value);
    }, 350,
    options)
)