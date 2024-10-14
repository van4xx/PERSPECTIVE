document.addEventListener("DOMContentLoaded", () => {
    const coordsElement = document.querySelector('.coords');
    const targetCoords = "−16°42′5<span>8</span>.02.75′";// Итоговые координаты
    let interval;


    function getRandomCoords() {    
        const degrees = Math.random() < 0.5 ? Math.floor(Math.random() * 80 - 90) : Math.floor(Math.random() * 80 + 10); 
        const minutes = Math.floor(Math.random() * 50 + 10); 
        const seconds = Math.floor(Math.random() * 50 + 10); 
        const fractions = Math.floor(Math.random() * 90 + 10);
        const fraction = Math.floor(Math.random() * 90 + 10); 
        return `${degrees}°${minutes}′${seconds}.<span>${fractions}</span>.${fraction}′`;
    }
    

    function updateCoords() {
        coordsElement.innerHTML = getRandomCoords();
    }


    interval = setInterval(updateCoords, 300); 

    setTimeout(() => {
        clearInterval(interval); 
        document.body.style.position = 'relative';
        coordsElement.innerHTML = targetCoords;

        // Прокрутка к секции firstBlock
        // const firstBlock = document.querySelector('.firstBlock');
        // if (firstBlock) {
        //     firstBlock.scrollIntoView({ behavior: 'smooth' });
        // }
        setTimeout(() => document.querySelector('.site-loader').remove(), 5000)
    }, 5000); // Время ожидания в миллисекундах

    // Пример для отслеживания завершения анимации прелоадера
    const preloader = document.querySelector('.preloader'); // Убедитесь, что у вас есть этот элемент
    preloader.addEventListener('animationend', () => {
        // Когда анимация прелоадера закончилась, прокручиваем к firstBlock
        const firstBlock = document.querySelector('.firstBlock');
        if (firstBlock) {
            firstBlock.scrollIntoView({behavior: 'smooth'});
        }
    });
});

const thirdBlock = document.querySelector('#firstCard');
const fourthBlock = document.querySelector('#secondCard');
const fifthBlock = document.querySelector('#thirdCard');
const sixthBlock = document.querySelector('#fourthCard');
const pins = document.querySelectorAll('.pinContainer');

if (window.innerWidth > 1100) {
    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;

        fourthBlock.style.opacity = 0;
        fifthBlock.style.opacity = 0;
        sixthBlock.style.opacity = 0;

        if (scroll < 4100) thirdBlock.style.opacity = '100%';
        if (scroll > 4100 && scroll < 6100) {
            thirdBlock.style.opacity = 0;
            fourthBlock.style.opacity = '100%';
        } else if (scroll > 6100 && scroll < 8200) {
            fourthBlock.style.opacity = 0;
            fifthBlock.style.opacity = '100%';
        } else if (scroll > 8200) {
            fifthBlock.style.opacity = 0;
            sixthBlock.style.opacity = '100%';
        } else sixthBlock.style.opacity = '100%';
    })
}
else {
    console.log(pins);
    pins.forEach((e) => {
        e.style.minHeight = 'auto';
        e.style.margin = 0;
    });
    document.querySelector('.fourthBlock').style.marginTop = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.typing-animation');
    const text = heading.textContent;
    heading.textContent = '';

    let index = 0;
    const typingSpeed = 100; // скорость печатания (мс)

    function type() {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});


const emailBlock = document.querySelector('.emailBlock');

window.addEventListener('scroll', () => {
    // Проверяем, достигнут ли конец страницы
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight) {
        emailBlock.classList.add('show'); // Добавляем класс для показа формы
    } else {
        emailBlock.classList.remove('show'); // Удаляем класс, если не внизу
    }
});







