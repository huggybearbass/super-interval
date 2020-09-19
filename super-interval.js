
const timer = require('./super-timer.js')

function superInterval (yourFunction, numberOfRepeats, timeToWait) {
  function doMyStuff () {
    yourFunction()
    timer.superTimer(timeToWait)
  }
  const arrayOfIterations = [...Array(numberOfRepeats).keys()]
  arrayOfIterations.forEach(doMyStuff)
};

module.exports = {
  superInterval
}
