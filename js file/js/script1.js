document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('ageForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        const age = parseInt(document.getElementById('age').value);
        
        if (isNaN(age)) {
            alert('Please enter a valid age');
            return;
        }

        const resultText = age >= 18 ? 'You are eligible to vote.' : 'You are not eligible to vote.';
        document.getElementById('result').textContent = resultText;

        console.log(resultText);
    });
});