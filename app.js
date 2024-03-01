const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
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
})