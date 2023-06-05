const inputXMarks = document.querySelectorAll('.input__xmark');
const inputs = document.querySelectorAll('.input__input');

/*
inputs.forEach(input => {
    if (input.value !== '' && !input.disabled) {
        const xmark = document
            .createElement('span')
        xmark.classList.add('input__xmark');

        input.parentNode.appendChild(xmark);
    }
})

inputXMarks.forEach(inputXMark => {
    console.log(inputXMark)
    inputXMark.addEventListener('click', () => {
        console.log("OO")
        inputXMark.parentNode.firstElementChild.value = '';
        inputXMark.style.display = 'none';
    });
});
*/


// TODO Check on reload page F5 to make disappear xmarks if inputs empty + if no value when loading page first time