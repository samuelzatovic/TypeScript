function totalDistance (height:number, length:number, steps:number):number
{
    let totalDistance = (steps/height) * (length + height);
    return totalDistance;
}

console.log(totalDistance(0.2, 0.4, 100))