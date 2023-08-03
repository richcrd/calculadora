const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let result = 0;
let operator = '';

// Función para actualizar el display con el contenido actual
function updateDisplay() {
    display.value = currentInput;
}

// Función para manejar los clics en los botones
function handleButtonClick(event) {
    const buttonText = event.target.innerText;

    // Manejar los números y el punto decimal
    if (!isNaN(parseInt(buttonText)) || buttonText === '.') {
        currentInput += buttonText;
    } else if (buttonText === 'C') {
        // Limpiar el display si se presiona el botón 'C'
        currentInput = '';
        result = 0;
        operator = '';
    } else if (buttonText === '=') {
        // Realizar el cálculo y mostrar el resultado al presionar '='
        if (operator && currentInput !== '') {
            switch (operator) {
                case '+':
                    result += parseFloat(currentInput);
                    break;
                case '-':
                    result -= parseFloat(currentInput);
                    break;
                case '*':
                    result *= parseFloat(currentInput);
                    break;
                case '/':
                    result /= parseFloat(currentInput);
                    break;
            }
            currentInput = result.toString();
            operator = '';
        }
    } else {
        // Manejar los operadores (+, -, *, /)
        if (currentInput !== '') {
            result = parseFloat(currentInput);
            currentInput = '';
        }
        operator = buttonText;
    }

    // Actualizar el display
    updateDisplay();
}

// Agregar el evento click a los botones
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
