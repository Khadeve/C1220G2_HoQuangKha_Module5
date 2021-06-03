// Print the fibonacci number at n-th
function fibonacci(n: number): number {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let sum = 0;

// Print m fibonacci numbers
function fibonaccies(m: number): void {
    if (m === 0) {
        return;
    }
    let fiboNumber = fibonacci(m);
    sum += fiboNumber;
    console.log(fiboNumber);
    fibonaccies(--m);
}

fibonaccies(10);
console.log(`The summary of fibonacci numbers: ${sum}`);