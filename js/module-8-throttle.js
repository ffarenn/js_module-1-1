console.dir(_.throttle);

// _.throttle(callbacl, time)

// const refs = {
//     form: document.querySelector('.form'),
// }

import refs from '../references/refs.js'

const {form} = refs
console.log(form);

form.addEventListener('input', _.throttle((e) => {
    console.log(e.target.value);
}, 1000),
)
  