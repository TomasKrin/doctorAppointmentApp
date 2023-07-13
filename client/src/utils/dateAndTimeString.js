import moment from "moment";

export const combinedDateTime = (date, time) => {
  const combinedDateTime = `${date}T${time}`;
  const d = new Date(combinedDateTime).toISOString();
  const m = moment(d).toDate();
  return m;
};

export const addHoursToTimeString = (timeString, hoursAdded) => {
  const timeParts = timeString.split(":");
  let hours = parseInt(timeParts[0]);
  let minutes = parseInt(timeParts[1]);

  hours += hoursAdded;

  hours = hours % 24;

  const updatedHours = hours < 10 ? "0" + hours : hours;
  const updatedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const updatedTimeString = updatedHours + ":" + updatedMinutes;
  return updatedTimeString;
};
