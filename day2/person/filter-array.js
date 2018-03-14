const evenArr = (numbers) => {
    let returnArr = [];
    for (i in numbers) {
        numbers[i] % 2 === 0 ? returnArr.push(numbers[i]) : null;
    }
    return returnArr;
}
const oddArr = (numbers) => {
    let returnArr = [];
    numbers.forEach(number => {
        number % 2 !== 0 ? returnArr.push(number) : null;
    });
    return returnArr;
}

const filter = (callback, ...arr) => {
    return callback(arr);
}


console.log(filter(evenArr, 12, 23, 34, 45, 56, 57754, 21654, 8241, 18421321));
console.log(filter(oddArr, 12, 23, 34, 45, 56));
console.log(filter(oddArr, 12, 23, 34, 45, 56, 57754, 21654, 8241, 18421321));