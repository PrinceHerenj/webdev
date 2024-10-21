// Given an array of integers. Write a program to find the K-th largest sum of contiguous subarray within the array of numbers that has both negative and positive numbers.

let arr = [20, -5, -1]
let result = []
let k = 3

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        result.push(sum)
    }
}

let final = [...(new Set(result))].sort((a, b) => a - b)

console.log("Input Array of integers: ")
console.log(arr)
console.log("K: ")
console.log(k)
console.log("K-th largest sum: ")
console.log(final.at(-k))