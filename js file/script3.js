document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('marksForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        const marks = parseFloat(document.getElementById('marks').value);
        
        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert('Please enter a valid number between 0 and 100');
            return;
        }

        let grade;
        if (marks >= 91 && marks <= 100) {
            grade = 'A';
        } else if (marks >= 85 && marks <= 90) {
            grade = 'A-';
        } else if (marks >= 80 && marks <= 84) {
            grade = 'B+';
        } else if (marks >= 75 && marks <= 79) {
            grade = 'B';
        } else if (marks >= 70 && marks <= 74) {
            grade = 'B-';
        } else if (marks >= 65 && marks <= 69) {
            grade = 'C+';
        } else if (marks >= 60 && marks <= 64) {
            grade = 'C';
        } else if (marks >= 55 && marks <= 59) {
            grade = 'C-';
        } else if (marks >= 50 && marks <= 54) {
            grade = 'D+';
        } else if (marks >= 45 && marks <= 49) {
            grade = 'Pass';
        } else {
            grade = 'Fail';
        }

        document.getElementById('result').textContent = Your grade is ${grade};

        console.log(Your grade is ${grade});
    });
});