const getCurrentMonth = () => {
  const date = new Date().getMonth();
  if (date === 0) {
    return "january";
  }
  if (date === 1) {
    return "february";
  }
  if (date === 2) {
    return "march";
  }
  if (date === 3) {
    return "april";
  }
  if (date === 4) {
    return "may";
  }
  if (date === 5) {
    return "june";
  }
  if (date === 6) {
    return "july";
  }
  if (date === 7) {
    return "august";
  }
  if (date === 8) {
    return "september";
  }
  if (date === 9) {
    return "october";
  }
  if (date === 10) {
    return "november";
  }
  if (date === 11) {
    return "december";
  }
};
module.exports = getCurrentMonth;
