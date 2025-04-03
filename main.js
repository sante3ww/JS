document.body.style.transition = 'background 0.5s ease';

document.body.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.background = randomColor;
});
