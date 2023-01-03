const getCurrentLT = () => {
  const date = new Date();
  return date.toString().slice(0, 25);
};

module.exports = getCurrentLT;
