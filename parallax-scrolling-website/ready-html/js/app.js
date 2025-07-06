// window.addEventListener("scroll", (e) => {
// 	document.documentElement.style.setProperty(
// 		"--scrollTop",
// 		`${this.scrollY}px`
// 	); // Update method
// });
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollSmoother.create({
// 	wrapper: ".wrapper",
// 	content: ".content",
// });


// gsap.fromTo(
// 	".img__interactive",
// 	{ opacity: 0, y: 500 }, // Исходное состояние (далеко внизу)
// 	{
// 		opacity: 1,
// 		y: 0,
// 		duration: 3, // Медленное и плавное появление
// 		ease: "power2.out", // Плавная анимация
// 		delay: 0.2, // Небольшая задержка
// 		scrollTrigger: {
// 			trigger: ".img__interactive",
// 			start: "top 75%", // Начинает появляться, когда почти в зоне видимости
// 			end: "top 50%", // Завершается, когда элемент выше 50% экрана
// 			toggleActions: "play none none reverse", // Обратный откат при скролле вверх
// 		},
// 	}
// );
// window.addEventListener("scroll", (e) => {
//  document.documentElement.style.setProperty(
//      "--scrollTop",
//      `${this.scrollY}px`
//  ); // Update method
// });

// Раскомментируем код GSAP, как вы указали, что он рабочий
// Раскомментируем код GSAP, как вы указали, что он рабочий
window.addEventListener("scroll", (e) => {
    document.documentElement.style.setProperty(
        "--scrollTop",
        `${this.scrollY}px`
    ); // Метод обновления CSS переменной --scrollTop
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
});

gsap.fromTo(
    ".img__interactive",
    { opacity: 0, y: 500 }, // Исходное состояние (далеко внизу)
    {
        opacity: 1,
        y: 0,
        duration: 3, // Медленное и плавное появление
        ease: "power2.out", // Плавная анимация
        delay: 0.2, // Небольшая задержка
        scrollTrigger: {
            trigger: ".img__interactive",
            start: "top 75%", // Начинает появляться, когда почти в зоне видимости
            end: "top 50%", // Завершается, когда элемент выше 50% экрана
            toggleActions: "play none none reverse", // Обратный откат при скролле вверх
            // Callback для показа кнопки после завершения анимации
            onComplete: () => {
                console.log('GSAP animation on .img__interactive completed.'); // Лог для отладки
                const statsButton = document.getElementById('statsButton');
                if (statsButton) {
                    console.log('Found statsButton element.'); // Лог для отладки
                    statsButton.classList.add('show'); // Добавляем класс 'show', чтобы кнопка стала видимой
                    console.log('Added "show" class to statsButton.'); // Лог для отладки
                } else {
                    console.error('statsButton element not found!'); // Лог ошибки, если кнопка не найдена
                }
            },
            // Callback для скрытия кнопки при обратной анимации (скролле вверх)
            onReverseComplete: () => {
                console.log('GSAP animation on .img__interactive reversed.'); // Лог для отладки
                const statsButton = document.getElementById('statsButton');
                if (statsButton) {
                    statsButton.classList.remove('show'); // Удаляем класс 'show', чтобы кнопка стала невидимой
                    console.log('Removed "show" class from statsButton.'); // Лог для отладки
                }
            }
        },
    }
);

// Добавляем обработчик события для кнопки "Статистика"
document.addEventListener('DOMContentLoaded', () => {
    const statsButton = document.getElementById('statsButton');
    if (statsButton) {
        statsButton.addEventListener('click', () => {
            window.location.href = 'autostat.html'; // Открываем файл autostat.html при клике
        });
    }
});