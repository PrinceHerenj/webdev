let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(`Original Array: `)
for (let i = 0; i < arr.length; i++) console.log(arr[i])

for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

console.log(`Reversed Array: `);
for (let i = 0; i < arr.length; i++) console.log(arr[i])

