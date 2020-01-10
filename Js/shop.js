function getMoneySpent(keyboards, drives, b) {

    const arr =[];
    const arr2 = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            arr.push([keyboards[i]+drives[j], i, j])
        }
    }

    for (let i = 0; i < arr.length ; i++) {
        arr2.push(arr[i][0]);
    }

    const arr3 = arr2.filter(i => i < b);
    console.log(arr3)

}


getMoneySpent([3, 1], [5, 2, 8], 10);