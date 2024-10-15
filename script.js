document.addEventListener("DOMContentLoaded", () => {
    const coordsElement = document.querySelector('.coords');
    const targetCoords = "-16°42′5<span>8</span>.02.75′";// Итоговые координаты
    let interval;


    function getRandomCoords() {    
        const degrees = Math.floor(Math.random() * 81) + 10; 
        const minutes = Math.floor(Math.random() * 50 + 10); 
        const seconds = Math.floor(Math.random() * 50 + 10); 
        const fractions = Math.floor(Math.random() * 90 + 10);
        const fraction = Math.floor(Math.random() * 90 + 10); 
        return `-${degrees}°${minutes}′${seconds}.<span>${fractions}</span>.${fraction}′`;
    }
    

    function updateCoords() {
        coordsElement.innerHTML = getRandomCoords();
    }


    interval = setInterval(updateCoords, 200); 

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

// Добавляем плавный переход для opacity через CSS
[thirdBlock, fourthBlock, fifthBlock, sixthBlock].forEach(block => {
    block.style.transition = 'opacity 0.5s ease-in-out'; // Плавное изменение прозрачности
});

if (window.innerWidth > 1100) {
    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;

        // Изначально скрываем все блоки
        thirdBlock.style.opacity = 0;
        fourthBlock.style.opacity = 0;
        fifthBlock.style.opacity = 0;
        sixthBlock.style.opacity = 0;

        // Применяем условие для отображения блоков в зависимости от прокрутки
        if (scroll < 4000) {
            thirdBlock.style.opacity = '1'; // Показ первого блока
        } 
        if (scroll >= 4000 && scroll < 6000) {
            thirdBlock.style.opacity = '0'; // Плавно скрываем первый блок
            fourthBlock.style.opacity = '1'; // Показываем второй блок
        } 
        if (scroll >= 6000 && scroll < 8100) {
            fourthBlock.style.opacity = '0'; // Плавно скрываем второй блок
            fifthBlock.style.opacity = '1'; // Показываем третий блок
        } 
        if (scroll >= 8100) {
            fifthBlock.style.opacity = '0'; // Плавно скрываем третий блок
            sixthBlock.style.opacity = '1'; // Показываем четвертый блок
        }
    });
} else {
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

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const firstBlock = document.querySelector(".image-container");
    const soundToggle = document.getElementById("soundToggle");
    let soundOn = true; // Начальное состояние звука включено

    // Изначально включаем звук
    audio.play();

    // Функция для проверки видимости блока
    function checkVisibility() {
        const rect = firstBlock.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (!soundOn) {
                audio.play();
            }
        } else {
            audio.pause();
        }
    }

    // Обработчик клика для переключения звука
    firstBlock.addEventListener("click", function () {
        soundOn = !soundOn;
        if (soundOn) {
            audio.play();
            soundToggle.textContent = "Sound: On";
        } else {
            audio.pause();
            soundToggle.textContent = "Sound: Off";
        }
    });


});


