function dayOfProgrammer(year) {

    let acum = 0;
    let day = 0;
    for (let i = 1; i < 9; i++) {
        acum += new Date(year, i, 0).getDate();
    }
    if (year % 4 === 0 && year % 100 !== 0 ) {
        if (year <= 1800) {
            day = 255 - acum
        } else {
            if (year > 1918) {
                day = 12;
            } else {
                day = 256 - acum;
            }
        }
    } else {
        if (year % 4 === 0 && year % 100 === 0) {
            day = 255 - acum;
        } else {
            day = 256 - acum;
        }

    }
    return `${day}.09.${year}`

}


console.log(dayOfProgrammer(2300));
