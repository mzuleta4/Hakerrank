const arr = [1, 4, 4, 4, 2, 3, 3].sort();
let count = 0;
let id = 0;
let max = 0;

const obj = arr.reduce((obj, item) => {
    obj[item] = obj[item] + 1 || count + 1;
    return obj
}, {});

Object.entries(obj).forEach(([key, value]) => {
    if (value > max) {
        max = value;
        id = key;
    } else if (count === max) {
        if (key < id) {
            id = key;
        }
    }
});

console.log(id);