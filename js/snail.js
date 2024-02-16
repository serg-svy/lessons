"use strict";

function getDays(depth) {
  const snailSpeed = 7;
  const snailSleepSpeed = 2;
  let totalDistance = 0;
  let days = 0;

  while (totalDistance < depth) {
    totalDistance += snailSpeed;
    days++;

    if (totalDistance < depth) {
      totalDistance -= snailSleepSpeed;
    }
  }
  console.log(days);
}


getDays(42);