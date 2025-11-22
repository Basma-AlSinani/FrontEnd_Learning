

console.log("prime number from 0-100:");
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let x = 2; x < i; x++) {
        if (i % x == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i, "is prime");
    }
    else {
        console.log(i, "is not prime")
    }
}

////////////////////////////////////////////////////////////////////////
console.log("FizzBuzz from 0-100");
for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log(n, "is FizzBuzz");
    }

    else if (n % 3 == 0) {
        console.log(n, "is Fizz");
    }

    else if (n % 5 == 0) {
        console.log(n, "is Buzz")
    }
}

