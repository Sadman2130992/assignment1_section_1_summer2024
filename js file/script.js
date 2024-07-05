document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    if (number1 > number2) {
        console.log(`The greater number is: ${number1}`);
    } else if (number2 > number1) {
        console.log(`The greater number is: ${number2}`);
    } else {
        console.log('Both numbers are equal.');
    }
});
