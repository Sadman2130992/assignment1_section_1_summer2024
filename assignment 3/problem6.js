let start = parseInt(prompt("Enter the start of the range:"));
let end = parseInt(prompt("Enter the end of the range:"));

function averageOfEvens(start, end) {
    let sum = 0;
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return sum / count;
}

function averageOfOdds(start, end) {
    let sum = 0;
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
            count++;
        }
    }
    return sum / count;
}

console.log("Average of even numbers:", averageOfEvens(start, end));
console.log("Average of odd numbers:", averageOfOdds(start, end));
