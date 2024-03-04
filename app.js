const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

// Bloque de código original. Sin delegar tareas //

/* checkButton.addEventListener('click', () => {
    const regExp = /[a-z0-9]/gi;
    const textValue = textInput.value
    if (textValue === "") {
        alert("Please input a value");
    } else {
        let newArr = textValue.match(regExp).join("").toLowerCase();
    result.classList.remove('hidden');
    textInput.value = "";
    if (newArr === newArr.split("").reverse().join("")) {
        result.innerHTML = `<p><strong>${textValue}</strong> is a palindrome.</p>`
    } else {
        result.innerHTML = `<p><strong>${textValue}</strong> is not a palindrome.</p>`
    }
    }
}) */

// Refactorización para delegar tareas en distintas funciones //
checkButton.addEventListener('click', () => {
    isPalindrome(textInput.value);
})

function isEmpty(str) {
    if (str === "") {
        alert("Por favor, ingrese un valor");
        return true;
    }
    return false;
}

function displayElements() {
    textInput.value = "";
    result.classList.remove('hidden');
}

function isPalindrome(str) {
    if (isEmpty(str)) {
        return
    } else {
        const regExp = /[a-z0-9]/gi;
        let newArr = str.match(str).join("").toLowerCase();
        displayElements();
        newArr === newArr.split("").reverse().join("") ? 
        result.innerHTML = `<p><strong>${str}</strong> is a palindrome.</p>` : 
        result.innerHTML = `<p><strong>${str}</strong> is not a palindrome.</p>`;
    }
}