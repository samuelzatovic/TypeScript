function isPalindrome(palindrome) {
    let i = 0, j = palindrome.length - 1;
    while (i < j) {
        if (palindrome.charAt(i) != palindrome.charAt(j))
            return false;
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrome("reviver"));
//# sourceMappingURL=helloAppslabTs.js.map