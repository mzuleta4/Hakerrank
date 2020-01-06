const sales = [{
    first_name: "Luis Gabriel",
    last_name: "Guzman",
    purchases: [
        {
            id: 1,
            total: 1000,
            date: "2019-11-15"
        },
        {
            id: 2,
            total: 10000,
            date: "2018-11-15"
        }
    ]
},
    {
        first_name: "Martin",
        last_name: "Zuleta",
        purchases: [
            {
                id: 1,
                total: 2000,
                date: "2019-12-21"
            },
            {
                id: 2,
                total: 5000,
                date: "2019-08-11"
            },
            {
                id: 3,
                total: 12000,
                date: "2018-08-15"
            },
            {
                id: 4,
                total: 5000,
                date: "2018-08-18"
            }
        ]
    },
    {
        first_name: "Mopri",
        last_name: "Jesurum",
        purchases: [
            {
                id: 1,
                total: 3000,
                date: "2019-05-21"
            },
            {
                id: 2,
                total: 55000,
                date: "2019-02-21"
            },
            {
                id: 3,
                total: 31000,
                date: "2019-01-21"
            }
        ]
    },
    {
        first_name: "Juan",
        last_name: "Gomez",
        purchases: [
            {
                id: 1,
                total: 3000,
                date: "2019-05-21"
            },
            {
                id: 2,
                total: 15000,
                date: "2019-02-21"
            },
            {
                id: 3,
                total: 61000,
                date: "2019-01-21"
            }
        ]
    },
    {
        first_name: "Mopri",
        last_name: "Jesurum 2",
        purchases: [
            {
                id: 1,
                total: 1000,
                date: "2019-05-21"
            },
            {
                id: 2,
                total: 5000,
                date: "2019-02-02"
            },
            {
                id: 3,
                total: 31000,
                date: "2019-04-04"
            }
            ,
            {
                id: 4,
                total: 2400,
                date: "2019-01-01"
            }
            ,
            {
                id: 5,
                total: 5600,
                date: "2019-03-12"
            }
        ]
    }
    , {
        first_name: "El primo",
        last_name: "Mora",
        purchases: [
            {
                id: 1,
                total: 4000,
                date: "2019-05-21"
            },
            {
                id: 2,
                total: 7000,
                date: "2018-05-11"
            },
            {
                id: 3,
                total: 1000,
                date: "2018-06-21"
            },
            {
                id: 2,
                total: 9000,
                date: "2018-05-13"
            },
        ]
    },
    {
        first_name: "Juancho",
        last_name: "Polo",
        purchases: [
            {
                id: 1,
                total: 32000,
                date: "2019-09-21"
            },
            {
                id: 2,
                total: 65000,
                date: "2019-09-22"
            },
            {
                id: 3,
                total: 25000,
                date: "2018-09-22"
            },
            {
                id: 4,
                total: 25000,
                date: "2017-09-22"
            },
            {
                id: 5,
                total: 15000,
                date: "2016-09-22"
            }
        ]
    },
    {
        first_name: "Carlos",
        last_name: "Mora",
        purchases: [
            {
                id: 1,
                total: 30000,
                date: "2019-05-21"
            },
            {
                id: 2,
                total: 55000,
                date: "2019-02-21"
            },
            {
                id: 3,
                total: 31000,
                date: "2019-01-21"
            },
            {
                id: 4,
                total: 26000,
                date: "2019-05-16"
            },
            {
                id: 5,
                total: 59090,
                date: "2019-07-11"
            },
            {
                id: 6,
                total: 3000,
                date: "2019-06-21"
            }
        ]
    }
];


// --------------- Punto 1 --------
const usersSales = sales.map(idx => {
    const total = idx.purchases.reduce((acum, item) => (acum + item.total), 0);
    return {name: `${idx.first_name} ${idx.last_name}`, total: total}
});

topFive = usersSales.sort((a, b) => b.total - a.total);
// console.log(topFive.slice(0, 5));

// --------------- Punto 1 --------


// --------------- Punto 2 --------

const currentYear = new Date().getFullYear();

const monthSalesObject = sales.reduce((acc, users) => {
    users.purchases.forEach(purchase => {
        const time = new Date(purchase.date);
        if (time.getFullYear() === currentYear) {
            const {total} = purchase;
            acc[time.getMonth() + 1] = acc[time.getMonth() + 1] + total || total;
        }
    });
    return acc;
}, {});

const monthSales = Object.entries(monthSalesObject).map(([key, value]) => {
    return {month: key.length === 1 ? '0' + key : key, total: value}
});

// console.log(monthSales);

// --------------- Punto 2 --------


// --------examen-----------

const salesCompare = [];

for (let i = 0; i < 12; i++) {
    salesCompare[i] = {month: (i + 1).toString().length === 1 ? '0' + (i + 1).toString() : (i + 1).toString(), data: []}
}

const salesUserObject = sales.reduce((dict, users) => {
    users.purchases.forEach((user) => {
        const time = new Date(user.date);
        if (time.getFullYear() > currentYear - 3 && time.getFullYear() <= currentYear) {
            let month = (time.getMonth() + 1).toString();
            const year = (time.getFullYear()).toString();
            month = month.length === 1 ? '0' + month : month;
            const index = month - 1;
            dict[month + ' ' + year] = dict[month + ' ' + year] + user.total || user.total;
        }
    });
    return dict;
}, {});

Object.entries(salesUserObject).forEach(([key, value]) => {
    const month = key.slice(0, 2);
    const year = key.slice(3, 7);

    for (let i = 0; i < 12; i++) {
        if ((i + 1).toString() === month || "0" + (i + 1).toString() === month) {
            salesCompare[i].data.push({year: year, total: value})
        }
    }

});

console.log(salesCompare);