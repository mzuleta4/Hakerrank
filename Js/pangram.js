s = "We promptly judged antique ivory buckles for the prize";
const arr = [];
let count = 0;
const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "t", "r", "s", "u", "v", "w", "x", "y", "z"];
s = s.split(" ").join("").toLowerCase();
for (let l in s) {
    arr.push(s[l])
}

let unique = arr.filter((v, i, a) => a.indexOf(v) === i);

unique.sort().forEach(letter =>{
    if (a.includes(letter)){
        count++;
    }
});

console.log(unique);

// return count === 26 ? "pangram" : "not pangram";

