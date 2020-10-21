function equality(a, b, c) {
    if (a == b || a == c) {
        if (b == c)
            return 3;
        return 2;
    }
    if (b == c)
        return 2;
    return 0;
}
console.log(equality(3, 4, 5));
//# sourceMappingURL=helloAppslabTs.js.map