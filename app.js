const mixedArray = [
    "ifeanyi",
    1994,
    true,
    undefined,
    null,
    12345678901234567890n,
    Symbol("id"),
    { name: "Alice" },
    [1, 2, 3],
    function () {
      return "Hi";
    },
  ];
  
  console.log("Initial array:", mixedArray);
  
  //////////// PUSH ///////////////////////
  console.log("1. push() - Adds elements to the end of an array.");
  let pushResult = mixedArray.push(
    { name: "Chinedu" }, // Another object
    [4, 5, 6], // Another array
    2025
  );
  console.log("Return value (new length):", pushResult);
  console.log("Array after push():", mixedArray);
  
  /////////// POP() //////////////////////
  console.log("2. pop() - Removes the last element from an array");
  let popResult = mixedArray.pop(); // 2025
  console.log("Return value (removed item):", popResult);
  console.log("Array after pop():", mixedArray);
  
  ////////////// UNSHIFT() /////////////////
  console.log("3. unshift() - adds elements to the beginning of an array");
  let unshiftResult = mixedArray.unshift("nextgen", false, { status: "active" });
  console.log("Return value (new length):", unshiftResult);
  console.log("Array after unshift():", mixedArray);
  
  //////////// SHIFT() //////////////////
  console.log("4. shift() - Removes the first element from an array");
  let shiftResult = mixedArray.shift(); // // Should remove "nextgen"
  console.log("Return value (removed item):", shiftResult);
  console.log("Array after shift():", mixedArray);
  
  ///////////// SPLICE 1 REMOVE AN ELEMENT /////////////////
  console.log("5. splice() - Changes array by removing an element");
  
  // Remove 1 element false then add "seamfix" and [true, false, true]
  let spliceResult = mixedArray.splice(
    0, // Start at index 0
    1, // Remove  element false
    "seamfix", // Insert the string "seamfix"
    [true, false, true] // Insert the array [true, false, true]
  );
  
  console.log("Return value (removed item):", spliceResult);
  console.log("Array after splice():", mixedArray);
  
  ////// SPLICE 2 ADD ELEMENT  ///////////
  console.log("6. splice() - Changes array by adding a new element");
  let spliceResult2 = mixedArray.splice(
    2, // start at index 2
    0, // delete 0 elements
    "coding is fun" //  a string
    //  [99, 100] // insert an array
  );
  
  console.log("Return value (new length):", spliceResult2); // should return []
  console.log("Array after splice():", mixedArray);

  