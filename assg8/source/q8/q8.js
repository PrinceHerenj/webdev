// Find count of element in O (log n)

let countElement = () => {
    let s = document.getElementById("input")
    let searchItem = Number(document.getElementById("search").value)
    let out = document.getElementById("output")
    let x = s.value
    let arr = x.split(',')
    let leftpos = -1
    let rightpos = -1
    arr.forEach(el => {
        Number(el)
    });
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == searchItem) {
            leftpos = mid
            right = mid - 1
        }
        if (searchItem < arr[mid]) right = mid - 1
        if (searchItem > arr[mid]) left = mid + 1
    }
    left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == searchItem) {
            rightpos = mid
            left = mid + 1
        }
        if (searchItem < arr[mid]) right = mid - 1
        if (searchItem > arr[mid]) left = mid + 1
    }
    let count
    if (rightpos == -1 && leftpos == -1) count = 0
    else count = rightpos - leftpos + 1
    out.innerText = `Count of ${searchItem}: ${count}`
}