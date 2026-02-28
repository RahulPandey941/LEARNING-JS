const userId = 12345;
let userEmail = "rahul@example.com"; 

// var userName = "Rahul";
// NOTE :
//      prefet not use var to declare variable because of its scope issue and hoisting issue

// userName = "Rahul Pandey"; // reassigning the value of userName variable
// console.log(userName);

city = "New York"; //can be used like this but it is not a good practice to declare variable without var, let or const keyword because it will create a global variable and it can lead to unexpected behavior in the code
pass = "67890";


userEmail = "iChangedIt@example.com"; // reassigning the value of userEmail variable
city = "Los Angeles"; // reassigning the value of city variable


console.table([ userId , userEmail, city, pass]);
