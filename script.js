const weeklyWorkouts = [
    { exercise: "Running", duration: 40, intensity: "high" },
    { exercise: "Yoga", duration: 25, intensity: "low" },
    { exercise: "Weights", duration: 35, intensity: "high" },
    { exercise: "Stretching", duration: 15, intensity: "low" },
    { exercise: "Cycling", duration: 50, intensity: "medium" },
  ];
  console.log(weeklyWorkouts);
  
  function getTotalTime(workoutList) {
    return workoutList.reduce((total, workout) => total + workout.duration, 0);
  }
  console.log(getTotalTime(weeklyWorkouts));
  
  //3. Arrow function to check intensity
  // Ternary: true if duration > 30 or intensity === "high"
  const isHighIntensity = (workout) =>
    workout.duration > 30 || workout.intensity === "high";
  console.log(isHighIntensity(weeklyWorkouts[0])); // it starts from 0
  
  // 4. Use map to add a "highIntensity" property
  // Map to add isHighIntensity result;
  const taggedWorkouts = weeklyWorkouts.map((workout) => {
    return {
      ...workout, // spread the original workout properties
      highIntensity: workout.duration > 30 || workout.intensity === "high", // add new property
    };
  });
  
  console.log(taggedWorkouts);
  
  // 5. Filter high-intensity workouts
  let intenseWorkouts = taggedWorkouts.filter((workout) => workout.highIntensity);
  console.log(intenseWorkouts);
  
  // 6. Use a for loop to list all workouts
  // Example: "Day 1: Running - 40 mins (High Intensity)
  for (let i = 0; i < weeklyWorkouts.length; i++) {
    console.log(
      `Day ${1 + i}: ${weeklyWorkouts[i].exercise} - ${
        weeklyWorkouts[i].duration
      } mins (${weeklyWorkouts[i].intensity} intensity)`
    );
  }
  
  // 7. While loop to schedule workouts within time limit
  let availableTime = 120;
  let scheduled = [];
  let index = 0;
  
  while (index < taggedWorkouts.length && availableTime > 0) {
    const workout = taggedWorkouts[index];
    if (availableTime >= workout.duration) {
      scheduled.push(workout);
      availableTime -= workout.duration;
    }
    index++;
  }
  
  console.log("\nScheduled Workouts (based on available time):");
  scheduled.forEach((t, i) =>
    console.log(`Slot ${i + 1}: ${t.exercise} - ${t.duration} mins`)
  );
  console.log(`Remaining available time: ${availableTime} minutes`);
  
  // 8. Conditional to rate the workout plan
  let totalTime = getTotalTime(weeklyWorkouts);
  let rating;
  if (totalTime < 100) {
    rating = "Light week";
  } else if (totalTime < 150) {
    rating = "Moderate week";
  } else {
    rating = "Intense week";
  }
  console.log(` The rating is: ${rating}`);
  