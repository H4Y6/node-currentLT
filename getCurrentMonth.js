const getCurrentMonth = () => {
  const monthNumber = new Date().getMonth();
  if (monthNumber === 0) {
    return "january";
  }
  if (monthNumber === 1) {
    return "february";
  }
  if (monthNumber === 2) {
    return "march";
  }
  if (monthNumber === 3) {
    return "april";
  }
  if (monthNumber === 4) {
    return "may";
  }
  if (monthNumber === 5) {
    return "june";
  }
  if (monthNumber === 6) {
    return "july";
  }
  if (monthNumber === 7) {
    return "august";
  }
  if (monthNumber === 8) {
    return "september";
  }
  if (monthNumber === 9) {
    return "october";
  }
  if (monthNumber === 10) {
    return "november";
  }
  if (monthNumber === 11) {
    return "december";
  }
};
module.exports = getCurrentMonth;
