function distanceFromHqInBlocks(pickUp){
    if (pickUp >= 43)
    return (pickUp - 42);
    else if (pickUp <= 42)
    return (42 - pickUp);
}
function distanceFromHqInFeet(pickUp2){
    if  (pickUp2 >= 43)
    return (264*(pickUp2 - 42));
    else if (pickUp2 <= 42)
    return (264*(42 - pickUp2));
}
function distanceTravelledInFeet(block1, block2) {
    if (block1 >= block2)
    return (264*(block1 - block2));
    else if (block2 >= block1)
    return (264*(block2 - block1));
}
function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return (distanceInFeet - 400)* .02
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
        return 25;
    } else if (distanceInFeet > 2500){
        return 'cannot travel that far'
    }
}