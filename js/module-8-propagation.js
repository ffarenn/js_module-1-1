  
// const refs = {
//     propagation: document.querySelector('.propagation'),
//   articleProp: document.getElementById('article-prop'),
//   articleList: document.getElementById('article-list'),
// }
 
import refs from '../references/refs.js'
console.log(refs);

const { propagation, articleProp, articleList } = refs

// lets check listeners, bubling


window.addEventListener('click', (e) => {
    console.log('window', e);
})

propagation.addEventListener('click', (e) => {
console.log('prop:', e);
})

// articleProp.addEventListener('click', (e) => {
//     console.log('article-1', e);
// })

// EVENT DELEGATION
// .target - current click, цель одного значения у разных одинаковых обьектов

articleList.addEventListener('click', (e) => {
    console.log(e);
    console.log('article-2', e.target.attributes.name.value);
    e.stopPropagation()
    e.stopImmediatePropagation()
    console.log(e.target.getAttribute('name'));
})


articleProp.addEventListener('click', (e) => {
    console.log('article-1', e);
})


