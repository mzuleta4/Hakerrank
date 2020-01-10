function sockMerchant(n, ar) {

    const dict = ar.reduce((obj, item) => {
        obj[item] = parseInt(obj[item]) + 1 || 1;
        return obj;
    }, {});

    const arr = Object.values(dict).reduce((arr, value) => {
        if (value % 2 === 0) {
            arr.push((value / 2));
        } else {
            if (((value - 1) % 2 === 0) && value - 1 > 0) {
                arr.push(Math.floor(value / 2));
            }
        }
        return arr
    }, []);

    return arr.reduce((acum, item) => {
        acum += item;
        return acum
    }, 0);


}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));