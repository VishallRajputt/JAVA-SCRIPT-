// hours
// if hours is between 6am and 12 pm: "Good moring"
// if hours  it is between 12pm and 6pm: "Good afternoon"
// Otherwise : "Good night"

let hours= 7;

if(hours >= 6 && hours <12)
  console.log("Good Morning");
 else if (hours >= 12 && hours<18)
  console.log("Good Afternoon");
 else
  console.log("Good night");
 