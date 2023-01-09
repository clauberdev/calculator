const add = (n1, n2) => {
    return n1 + n2;
}

const subtract = () => { }
const multiply = () => { }
const divide = () => { }
const operate = (operator, n1, n2) => {
    switch (operator) {
        case '+':
            console.log(add(n1, n2));
            break;
        case '-':
            subtract(n1, n2);
            break;
        case '*':
            multiply(n1, n2);
            break;
        case '/':
            divide(n1, n2);
            break;
    }
}

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button)
        display.textContent = button.id
    })
})

