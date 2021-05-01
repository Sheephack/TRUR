/* Se utiliza el Intersection Observer API para hacer funcionar las animaciones en demanda al entrar al viewport */

const observerOne = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('leftAnimation');
        }
    });
});

observerOne.observe(document.querySelector('.nBCard--one'))


const observerTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('rightAnimation');
        }
    });
});

observerTwo.observe(document.querySelector('.nBCard--two'))
