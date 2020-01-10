function pageCount(n, p) {

    if ((p === 2) || (p === n - 1)) {
        return 1;
    } else {
        if ((p === n) || ((p % 2 !== 0) && (p === n - 1))) {
            return 0
        } else {
            const down = (n - p) / 2;

            console.log(res)
        }
    }

}

pageCount(6, 2)