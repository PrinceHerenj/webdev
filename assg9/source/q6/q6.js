// You are given a string s and character c. Return the total number of substring of s that start with and end with c


let s = ['a', 'b', 'a', 'd', 'a']
let c = 'a'
let subarrays = []
let count = 0

function checkStartAndEnd(arr, c) {
    if (arr.at(0) == c && arr.at(-1) == c)
        return true
    return false
}

for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
        let curArr = []
        for (let k = i; k <= j; k++) {
            curArr.push(s[k])
        }
        subarrays.push(curArr)
    }
}

subarrays.forEach(sa => {
    if (checkStartAndEnd(sa, c)) {
        count++
    }
})
console.log("Input array: ")
console.log(s)
console.log(`Substrings starting and ending with '${c}'`)
console.log(count)