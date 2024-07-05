document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('discountForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        
        const name = document.getElementById('name').value;
        const fees = parseFloat(document.getElementById('fees').value);
        const birthYear = parseInt(document.getElementById('birthYear').value);
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        if (isNaN(fees) || isNaN(birthYear) || fees < 0 || birthYear > currentYear) {
            alert('Please enter valid details');
            return;
        }

        let discount = 0;
        if (fees > 50000 && age > 21) {
            discount = 0.15 * fees;
        } else if (fees > 40000 && age > 20) {
            discount = 0.10 * fees;
        } else if (fees > 30000 && age > 19) {
            discount = 0.05 * fees;
        } else {
            discount = 0.02 * fees;
        }

        const payableFees = fees - discount;

        document.getElementById('result').textContent = ${name}, your discount amount is $${discount.toFixed(2)} and the payable tuition fees are $${payableFees.toFixed(2)}.;

        console.log(${name}, your discount amount is $${discount.toFixed(2)} and the payable tuition fees are $${payableFees.toFixed(2)}.);
    });
});