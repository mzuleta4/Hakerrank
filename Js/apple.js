function countApplesAndOranges(s, t, a, b, apples, oranges) {

    apples = apples.map(apple => a + apple);
    oranges = oranges.map(orange => b + orange);

    const landApple = apples.filter(apple => apple >= s &&  apple <= t);
    const landOrange = oranges.filter(orange => orange >= s && orange <= t);

    return [landApple.length, landOrange.length];

}


console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));