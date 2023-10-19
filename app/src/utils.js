export const formatDate = (date) => {
  var hours = new Date(date).getHours();
  var minutes = new Date(date).getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    new Date(date).getDate() +
    "/" +
    (new Date(date).getMonth() + 1) + // Add 1 to the month to get the correct month number
    "/" +
    new Date(date).getFullYear() +
    "  " +
    strTime
  );
};
