function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if(42 > someValue){
        return 42 - someValue;
    }else if (someValue >= 42){
        return someValue - 42
    }
  }


  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(someValue)*264;
  }


  function distanceTravelledInFeet(start, destination) {
    let distanceInBlocks;

    // Determine the number of blocks traveled
    if (start > destination) {
        distanceInBlocks = start - destination;
    } else {
        distanceInBlocks = destination - start;
    }

    // Convert blocks to feet
    const distanceInFeet = distanceInBlocks * 264;

    // Return the distance in feet
    return distanceInFeet;
  }



  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceInBlocks;

    // Determine the number of blocks traveled
    if (start > destination) {
        distanceInBlocks = start - destination;
    } else {
        distanceInBlocks = destination - start;
    }

    // Convert blocks to feet
    const distanceInFeet = distanceInBlocks * 264;

    if (distanceInFeet <= 400 ){
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25
    }else if (distanceInFeet > 2500){
        return 'cannot travel that far'
    }
  }