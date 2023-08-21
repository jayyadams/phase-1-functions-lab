// Code your solution in this file!
function distanceFromHqInBlocks(othLocation) {
    let location = Math.abs(othLocation -42);
    return location;
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let calcy = Math.abs(start - destination) *264;
    return calcy;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    }
    else if ((feet > 400 && feet <= 2000)) {
        return (.02 * (feet-400));
    }
    else if ((feet > 2000 && feet <= 2500)) {
        return 25;
    }
    else return 'cannot travel that far';
}
