function isNumOdd(num) {
    return num % 2 !== 0;
}
;
function warOfNumbers(numbers) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        {
            if (isNumOdd(number)) {
                odd += number;
            }
            else {
                even += number;
            }
        }
    }
    return Math.abs(even - odd);
}
console.log(warOfNumbers([1, 4, 2, 3, 19, 28, 142, 333]));
//# sourceMappingURL=helloAppslabTs.js.map