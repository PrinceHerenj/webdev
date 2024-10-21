// Find the Second Largest Number in an Array

let secondLargest = () => {
    let s = document.getElementById("input")
    let out = document.getElementById("output")
    let x = s.value
    let arr = x.split(',')
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i + 1, 1)
            i--;
        } else continue
    }
    out.innerText = `Second Largest element: ${arr.at(-2)}`
}