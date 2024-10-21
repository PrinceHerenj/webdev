// Write a JS program that checks if a given string is a
// palindrome

let checkpalin = () => {
    let s = document.getElementById("input");
    let out = document.getElementById("output")
    let x = s.value
    let rev = "";
    for (let i = x.length - 1; i >= 0; i--) rev += x[i]
    if (x && x == rev) out.innerText = "Palindrome"
    else out.innerText = "Not Palindrome"
}