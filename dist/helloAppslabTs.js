function differenceMaxMin(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array[array.length - 1] - array[0];
}
console.log(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
//# sourceMappingURL=helloAppslabTs.js.map