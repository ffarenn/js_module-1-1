console.dir(IntersectionObserver);

// const refs = {
//     propagation: document.querySelector('.propagation'),
//   articleProp: document.getElementById('article-prop'),
//   articleList: document.getElementById('article-list'),
// }

import references from '../references/refs.js'
// console.log('references:', references);
 
const { propagation, articleProp, articleList, myBtn } = references

const options = {
    root: articleList, // внутри какой области мы хотим отслеживать элементы
    // rootMargin: '5px 5px 5px 5px', // changes rootMargin values
    threshold: 0, // на сколько процентов показывается элемент
}

function callback(elems) {
    console.log(elems);
    if (elems[0].isVisible) {
        console.log('ok');
    }
}

const myObserver = new IntersectionObserver(callback, options)

console.log('example watch:', myObserver);

myObserver.observe(myBtn) // запускается наблюдатель елемента