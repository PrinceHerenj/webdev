// Write a Javascript program that reverses a given string.

let reverse = () => {
    let s = document.getElementById("input");
    let output = document.getElementById("output")
    let x = s.value
    let rev = "";
    for (let i = x.length - 1; i >= 0; i--) rev += x[i]
    output.innerText = rev
}