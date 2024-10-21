// Remove Duplicates in-place from sorted array

let inplaceDuplicateRemoval = () => {
    let s = document.getElementById("input")
    let out = document.getElementById("output")
    let x = s.value
    let arr = x.split(',')
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] == arr[i+1]) {
            arr.splice(i+1, 1)
            i--;
        } else continue
    }
    out.innerText = `${arr.length} [${arr}]`
}
