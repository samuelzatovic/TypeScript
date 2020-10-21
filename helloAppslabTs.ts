function slices(totalSlices:number, recipients:number, slices:number):boolean
{
    return recipients * slices <= totalSlices;
}
console.log(slices(11, 5, 3))