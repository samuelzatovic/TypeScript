function equality(a:number, b:number, c:number):number
{
    if(a == b || a == c){
        if(b == c) return 3;
        return 2;}

    if(b == c) return 2;
    return 0;
}
console.log(equality(3,4,5))