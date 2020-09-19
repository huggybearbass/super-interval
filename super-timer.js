function superTimer(timeInMilliseconds){
  let targetTime = new Date(new Date().getTime() + timeInMilliseconds )
  while(targetTime > new Date()){}
  return
  };

module.exports = {
  superTimer
}