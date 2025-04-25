//Create an object called trip with the following properties: destination, duration, activities (an array of activities), and budget.

const trip = {
    destination: "lagos", // a string
    duration: 2, // a number (5 days)
    activities: [
      "playing ball",
      "playing chess",
      "skating",
      "sightseeing",
      "museum",
      "food tour",
    ], // an array
    budget: 30000, // A number (in naira, for example)
  };
  
  console.log(trip);
  
  // Create a function that takes two numbers as arguments and returns their product.
  // function Expression
  const multipyNumber = function multiply(x, y) {
    return x * y; // Multiply x and y and return the result
  };
  
  let result = multipyNumber(2, 5);
  console.log("The product is:", result);
  
  //  Create a function that takes a string as an argument and returns the string in uppercase.
  // Arrow Function
  const makeUppercase2 = (text) => text.toUpperCase();
  
  let result1 = makeUppercase2("seamfix nextgen academy is really awesome");
  console.log("The Uppercase Version:", result1);
  
  //Create a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
  /// Function Declaration
  function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const myNumbers = sumArray([5, 10, 15, 20, 25]);
  console.log("The sum is:", myNumbers); // Output: The sum is: 75
  
  // Write a function that takes an object as an argument and returns the value of a specific property//
  // function Expression
  
  const getPropertyVaue = function objectValue(obj, property) {
    return obj[property];
  };
  
  // object
  const person = {
    name: "Attah ifeanyichukwu sixtus",
    city: "lagos",
    occupation: "backend developer",
  };
  
  let result2 = getPropertyVaue(person, "name");
  console.log("name:", result2);
  
  
  
  
  
  