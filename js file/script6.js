document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('charForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        const charInput = document.getElementById('character').value;
        
        if (charInput.length !== 1 || !/[a-zA-Z]/.test(charInput)) {
            alert('Please enter a single alphabetical character');
            return;
        }

        const char = charInput.toLowerCase();
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const isVowel = vowels.includes(char);
        const message = isVowel ? 'The character is a vowel' : 'The character is a consonant';

        document.getElementById('result').textContent = message;

        console.log(message);
    });
});