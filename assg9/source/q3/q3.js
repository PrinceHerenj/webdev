// Given an unsorted array of positive integers, find the number of triangles that can be formed with three different array elements as three sides of the triangle. For a triangle to be possible from 3 values, the sum of any of the two values must be greater than the third value

let arr = [4, 6, 3, 7]
let count = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] > arr[k]
                && arr[i] + arr[k] > arr[j]
                && arr[k] + arr[j] > arr[i]) count++
        }
    }

}

console.log("Edge Lengths: ")
console.log(arr)
console.log("Number of Possible triangles: ")
console.log(count)