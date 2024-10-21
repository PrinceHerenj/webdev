// Find first occurence of element in O (log n)

let firstOccurence = () => {
    let s = document.getElementById("input")
    let searchItem = Number(document.getElementById("search").value)
    let out = document.getElementById("output")
    let x = s.value
    let arr = x.split(',')
    let pos = -1
    arr.forEach(el => {
        Number(el)
    });
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == searchItem) {
            pos = mid
            right = mid - 1
        }
        if (searchItem < arr[mid]) right = mid - 1
        if (searchItem > arr[mid]) left = mid + 1
    }

    out.innerText = `First Occurence of ${searchItem} is index ${pos}`

}