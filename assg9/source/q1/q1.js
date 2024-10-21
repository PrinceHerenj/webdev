// Given a boolean 2D array, where each row is sorted. Find row with maximum number of ones

let matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
]

let max = -1
let maxIndex = -1

let maxRow = (arr, i) => {
    let pos = -1
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == 1) {
            pos = mid
            right = mid - 1
        }
        if (1 < arr[mid]) right = mid - 1
        if (1 > arr[mid]) left = mid + 1
    }
    if (pos == -1) return
    let currentRow = arr.length - pos
    if (currentRow >= max) {
        max = currentRow
        maxIndex = i
    }
}

matrix.forEach((arr, i) => {
    maxRow(arr, i)
})

console.log("Matrix: ")
console.log(matrix)
console.log(`Max Index row: ${maxIndex}`)