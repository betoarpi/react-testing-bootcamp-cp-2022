function formatDate(date) {
  let d = new Date(date),
    year = d.getFullYear(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  console.log([year, month, day].join("-"));

  return [year, month, day].join("-");
}

export default formatDate;
