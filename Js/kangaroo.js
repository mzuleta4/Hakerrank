function kangaroo(x1, v1, x2, v2) {
    if (v2 > v1) {
        return 'NO';
    } else {
        if (x1 + v1 === x2 + v2) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}

console.log(kangaroo(0, 3, 4, 2));