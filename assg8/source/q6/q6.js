// Move all zeroes to end of array

let zerosToEnd = () => {
    let s = document.getElementById("input")
    let out = document.getElementById("output")
    let x = s.value
    let arr = x.split(',')
    let leftmostZero = -1;
    for (let i = 0; i < arr.length; i++) {
        if (leftmostZero == -1 && arr[i] == 0) {
            leftmostZero = i
        }
        if (arr[i] != 0 && leftmostZero != -1) {
            let temp = arr[i]
            arr[i] = arr[leftmostZero]
            arr[leftmostZero] = temp
            leftmostZero += 1
        }
    }
    out.innerText = `[${arr}]`
}
