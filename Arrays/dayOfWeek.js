function dayOfWeek(dayAsNumber) {
  if (dayAsNumber < 1 || dayAsNumber > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let currentDay = days[dayAsNumber - 1];
    console.log(currentDay);
  }
}

dayOfWeek(6);
