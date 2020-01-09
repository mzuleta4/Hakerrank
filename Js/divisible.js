const arr = [1, 3, 2, 6, 1, 2];

const arr_sum = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (i !== j) {
            if ((arr[i] + arr[j]) % 3 === 0) {
                arr_sum.push([i, j]);
            }
        }
    }
}
let unique = {};
arr_sum.forEach(arr => {
    unique[arr.sort()] = true;
});

console.log(Object.keys(unique).length);

