// Check if number is prime

let prime = () => {
    let s = document.getElementById("input")
    let out = document.getElementById("output")
    let x = Number(s.value)
    let flag = 1;
    for (let i = 2; i < Math.floor(x / 2); i++) if (x % i == 0) flag = 0
    if (x == 1) out.innerText = "Unique"
    else {
        if (flag) out.innerText = "Prime"
        else out.innerText = "Composite"
    }
}