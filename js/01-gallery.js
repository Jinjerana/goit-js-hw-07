// Файл gallery-items.js містить масив galleryItems, який містить 
// об'єкти з інформацією про зображення: маленьке (прев`ю),
//  оригінальне (велике) і опис. Ми вже підключили його до кожного з JS-файлів проекту.

// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення 
// у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. 
// Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону
//  елемента галереї.
//  Створюємо в css - додаванням розмітки.
// 2. Реалізація делегування на ul.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли 
// бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся
//  з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки 
// basicLightbox.


// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в 
// data-атрибуті source на елементі <img>, і вказуватися в href посилання. 
// Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// 6. Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням 
// користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// 7. Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// 8. Додай закриття модального вікна після натискання клавіші Escape.
//  Зроби так, щоб прослуховування клавіатури було тільки доти, 
//  доки відкрите модальне вікно. Бібліотека basicLightbox містить метод 
//  для програмного закриття модального вікна.


// console.log(basicLightbox);



import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector('.gallery')

function createMarkup(arr){
    return arr.map(({preview, original, description}) => `
    <li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
            <img 
            class='gallery__image'
            src = '${preview}'
            data-sourse = '${original}'
            alt = '${description}'/>
        </a>
    </li>
    `)
    .join('')
}

list.insertAdjacentHTML('afterbegin', createMarkup(galleryItems))

// list.onclick = (evt) => {
//     evt.preventDefault()
//     if (!evt.target.classList.contains('gallery__image')){
//         return
//     }
// }

list.addEventListener('click', handlerClickGallery)

function handlerClickGallery(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('gallery__image')){
        console.log('gallery__image', evt.target)
    }

        const imageSrc = evt.target.dataset.source;
        const instance = basicLightbox.create(
            `<img src="${imageSrc}" alt = '${evt.target.description}'
            width="1300" height="900">
             `, {
             onShow: handlerEscapeModal,
             onClose: handlerEscapeModal,
        })
        instance.show();
}

// function onGalleryItemClick(event) {
//     const imageSrc = event.target.dataset.source;
//     const instance = basicLightbox.create(`
//       <img src="${imageSrc}" width="800" height="600">
//     `);
//     instance.show();
//   }

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

function handlerEscapeModal(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
}

window.addEventListener('keydown', handlerEscapeModal);
window.removeEventListener('keydown', handlerEscapeModal);

// function findImage(sourse) {
//     const { original } = sourse.dataset;
//     const currentImage = galleryItems.find((sourse))
// }



