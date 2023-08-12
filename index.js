// Problem 1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Problem 2 

// Each new term in the Fibonacci sequence is generated by adding the
// previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not
// exceed four million, find the sum of the even-valued terms.

// Problem 3

// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit
// numbers.

// Problem 4

// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

// Problem 5

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13. What is the 10,001st prime number?

// Problem 6 

// Starting in the top left corner of a 2×2 grid, and only being able to move
// to the right and down, there are exactly 6 routes to the bottom right
// corner. How many such routes are there through a 20×20 grid?

// Problem 7

// By starting at the top of the triangle below and moving to adjacent
// numbers on the row below, the maximum total from top to bottom is 23.
// 3
// 7 4
// 2 4 6
// 8 5 9 3
// That is, 3 + 7 + 4 + 9 = 23.
// Find the maximum total from top to bottom in triangle.txt (attached to
// the email), a 15K text file containing a triangle with one-hundred rows.

//Answers

//Problem 1

const sumArithmeticProgression = (firstTerm, lastTerm, numTerms) =>
    numTerms * (firstTerm + lastTerm) / 2;

const sumMultiplesOf = (n, limit) => {
    const numMultiples = Math.floor((limit - 1) / n);
    const lastMultiple = numMultiples * n;
    return sumArithmeticProgression(n, lastMultiple, numMultiples);
};

const limit = 1000;

const sumOfMultiplesOf3 = sumMultiplesOf(3, limit);
const sumOfMultiplesOf5 = sumMultiplesOf(5, limit);
const sumOfMultiplesOf15 = sumMultiplesOf(15, limit);

const totalSum = sumOfMultiplesOf3 + sumOfMultiplesOf5 - sumOfMultiplesOf15;

console.log("The sum of all multiples of 3 or 5 below 1000 is:", totalSum);



//Problem 2






