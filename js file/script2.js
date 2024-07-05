document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('numberForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);
        
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert('Please enter valid numbers');
            return;
        }

        const maxNumber = Math.max(num1, num2, num3);
        document.getElementById('result').textContent = The maximum number is ${maxNumber};

        console.log(The maximum number is ${maxNumber});
    });
});