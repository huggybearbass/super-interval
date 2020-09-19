function superTimer (timeInMilliseconds) {
  const targetTime = new Date(new Date().getTime() + timeInMilliseconds)
  while (targetTime > new Date()) {}
};

module.exports = {
  superTimer
}
