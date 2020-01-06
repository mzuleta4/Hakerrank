const arr = [73, 67, 38, 33];

const multiple = (grade) => {
    while(grade % 5 !== 0){
        grade++;
    }
    return grade;
};

const finalArr = arr.map(grade => {
    if (grade < 38) {
        return grade;
    } else {
        const finalGrade = multiple(grade);
        if (finalGrade - grade < 3){
            return finalGrade;
        }else{
            return grade;
        }
    }
});

finalArr.forEach(grade => console.log(grade));

