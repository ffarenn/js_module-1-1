// IMPORT DATA
import data from '../data/module-8.js'

// ИМПОРТ ДОСТУПОВ К DOM-ЭЛЕМЕНТАМ (refs)
import refs from '../references/refs.js'
const { list, modal, closeBtn, modalContent, form } = refs
// console.log(list, modal, form)

// ШАБЛОН РАЗМЕТКИ

//  Функция создания разметки
function createItems(array) {
    return array
        .map((elem) => {
        const { image, title, text, button, id } = elem
        
        return `
         <li class="item">
          <div class="imgWrapper">
            <img src=${image} alt=${title} />
          </div>
          <div class="cardInfo">
            <h3 class="title">${title}</h3>
            <p class="text">${text}</p>
            <button id=${id} class="link" type="button">${button}</button>
          </div>
        </li> 
        `
    }).join('')
}
const markup = createItems(data)
// console.log(markup);

// Встраиваем созданную разметку
list.insertAdjacentHTML('afterbegin', markup)

// Создаем наблюдателя
//  1. Создаем экзеипляр Observer

const options = {
    root: list, // относительно кого проверяем видимость ul
    rootMargin: '0px', // внештнте отстыпу рут
    threshold: 0.5, // на сколько проверямый элемент должен попасть 
    // в рут ul
}

const observer = new IntersectionObserver(callback, options)
function callback(entries) {
    entries.forEach((entry) => {
        // if (entry.isIntersecting) {
        //     entry.target.classList.add('observe')
        // } else {
        //     entry.target.classList.remove('observe')
        // }
        entry.isIntersecting
            ? entry.target.classList.add('observe')
            : entry.target.classList.remove('observe')
    })
}

//  // 2 - получаем массив элементов items, к которым применим Observer (...list.children)
const items = [...list.children]
console.log(items);

// 3 - вызываем экземпляр наблюдателя на каждом элементе списка
items.forEach((item) => observer.observe(item))


// ДОБАВЛЯЕМ ОТКРЫТИЕ МОДАЛЬНОГО ОКНА

function showElement(element) {
    element.classList.remove('isHidden')
}
function hideElement(element) {
    element.classList.add('isHidden')
}

list.addEventListener('click', (e) => {
    const condition = e.target.nodeName === 'BUTTON'
    if (condition) {
        // modal.classList.remove('isHidden')
        showElement(modal)
        createModalImage(e.target.id)
        const x = data.find((object) => object.id === e.target.id)
        const image = createModalImage(x.image)
        modalContent.append(image)
    }
})

// Закрываем модальное окно
//  по бекдропу
modal.addEventListener('click', closeModalByClick)
function closeModalByClick(e) {
    if (e.target.classList.contains('closeModal')) {
        hideElement(modal)
    }
}


// //  по Escape ArrowLeft ArrowRight
window.addEventListener('keydown', closeModalByKey)
function closeModalByKey(e) {
    if (
        e.code === 'Escape' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowRight'
    ) {
        hideElement(modal)
    }
}

//  по кнопке Х
closeBtn.addEventListener('click', closeModalByClick)


// зачищаем слушателя
if (!modal.classList.contains('isHidden')) {
    window.removeEventListener('keydown', closeModalByKey)
    modal.removeEventListener('click', closeModalByClick)
}


// Function which add element to modal window
// function insertElementToModal(modalContainer) {
//     modalContainer.appendChild(element)
// }

function createModalImage(link) {
const modalImage = document.createElement('img')
modalImage.setAttribute('src', link)
}
