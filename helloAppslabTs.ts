function multiplyByLength(array)
{
    for (let i = 0; i < array.length; i++) 
   {
        array[i] = array[i] * array.length;
   }
 return array;
}
console.log(multiplyByLength([2,3,1,0]))