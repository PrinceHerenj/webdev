// Consider a scenario where you are provided with a binary array nums. We define a subarray as "alternating" if within that subarray, no two adjacent elements have the same value. Your objective is to count such alternating subarrays within the given binary array nums.

let nums = [0, 1, 1, 1]
let subarrays = []
let count = 0

function checkAlternating(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) return false
    }
    return true
}

for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
        let curArr = []
        for (let k = i; k <= j; k++) {
            curArr.push(nums[k])
        }
        subarrays.push(curArr)
    }
}

subarrays.forEach(sa => {
    if (checkAlternating(sa)) {
        count++
    }
})

console.log("Input array: ")
console.log(nums)
console.log("Alternating subarrays: ")
console.log(count)