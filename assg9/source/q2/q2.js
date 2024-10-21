// Given an integer array of coins of size N representing different types of denominations and an integer sum, the task is to count all combinations of coins to make a given value sum. Assume that you have an infinite supply of each type of coin.

let coins = [1, 2, 3]
let sum = 5

let count = (coins, n, sum) => {
    if (sum == 0) return 1;
    if (sum < 0) return 0;
    if (n <= 0) return 0
    return count(coins, n - 1, sum) + count(coins, n, sum - coins[n - 1])
}

console.log("Coins: ")
console.log(coins)
console.log("Sum to obtain: ")
console.log(sum)
console.log("Combinations of coins: ")
console.log(count(coins, coins.length, sum))