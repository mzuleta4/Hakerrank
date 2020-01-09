function bonAppetit(bill, k, b) {

    bill.splice(k, 1);
    const total = bill.reduce((acum, item) => {
        acum += item;
        return acum;
    }, 0);

    const charge = b - (total / 2);

    return charge === 0 ? 'Bon Appetit' : charge;

}


console.log(bonAppetit([3, 10, 2, 9], 1, 12));
