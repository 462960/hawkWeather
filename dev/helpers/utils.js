const daysMap = {
  "0": "Sunday",
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday"
};

const monthsMap = {
  "0": "Jan",
  "1": "Feb",
  "2": "Mar",
  "3": "Apr",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "Aug",
  "8": "Sept",
  "9": "Oct",
  "10": "Nov",
  "11": "Dec"
};

// Kelvin to Fahrenheit
export function convertToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32.0).toFixed(1);
}

// Kelvin to Celsius
export function convertToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}

// Gets the date out of Unix time stamp
export function getDate(unixTimestamp) {
  let date = new Date(unixTimestamp * 1000);
  let day = daysMap[date.getDay()];
  let month = `${monthsMap[date.getMonth()]},${date.getDate()}`;
  return `${day} ${month}`;
}

// Gets the day light time out of Unix time stamp
export function dayLight(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const time = date.getHours();
  return time >=8 && time < 18;
}


