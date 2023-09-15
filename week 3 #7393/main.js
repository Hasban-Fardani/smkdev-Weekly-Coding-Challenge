function minuteToHour(minute){
  return {
    hour: Math.floor(minute / 60),
    minute: minute % 60 
  }
}

function timeStrToMinute(strTime){
  let time = strTime.split(" ")  // ['time', 'a.m/p.m']
  let period = time[1]  // 'a.m/p.m'
  let [hours, minutes] = time[0].split(":")  // ['hour', 'minute]

  hours  = parseInt(hours)
  minutes = parseInt(minutes)
  
  minutes += hours * 60
  if (hours === 12 && period === 'a.m.') {
    hours = 0; // 12:00 a.m is midnight
  } else if (hours !== 12 && period === 'p.m.') {
    minutes += 12 * 60; // Add 12 hours for p.m times (except 12 PM)
  }
  return minutes
}

const mealTime = [
  {
    name: "breakfast", 
    time: timeStrToMinute("7:00 a.m.")
  },
  {
    name: "lunch", 
    time: timeStrToMinute("12:00 p.m.")
  },
  {
    name: "dinner", 
    time: timeStrToMinute("7:00 p.m.")
  }
];

function timeToEat(strTime){
  let currenTime = timeStrToMinute(strTime)
  let nearest = 100000  // just for start
  let diff = 0
  let selectIdx = 0;

  for (let i = 0; i < mealTime.length; i++){
    diff = mealTime[i].time - currenTime
    if (diff < nearest && diff > 0){
      nearest = diff
      selectIdx = i
    }
  }
  
  let time = minuteToHour(nearest)
  let meal = mealTime[selectIdx].name

  if (time.minute != 0) {  // if minute != 0
    console.log(`${time.hour} Hour and ${time.minute} Minute until the next meal, ${meal}`);
  } else {
    console.log(`${time.hour} Hour until the next meal, ${meal}`);
  }
}

timeToEat('2:00 p.m.')
timeToEat('5:50 a.m.')