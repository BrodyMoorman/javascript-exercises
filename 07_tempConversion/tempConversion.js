const ftoc = function(tempF) {
  let newC = (tempF - 32 ) * (5/9);
  newC = Math.round(newC*10)/10;
  return newC;

};

const ctof = function(tempC) {
  let newF = (tempC * (9/5)) + 32;
  newF = Math.round(newF * 10)/10;
  return newF;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
