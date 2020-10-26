function rook(a:string, b:string)
{
    return a.charAt(0) == b.charAt(0) || a.charAt(1) == b.charAt(1);
}
console.log(rook("H4", "G2"));
