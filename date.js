//jshint esversion: 6

  //get the system date 

module.exports.getDate = getDate;

function getDate() {  // ✅ Correct
  let today = new Date();
  let options = { weekday: "long", day: "numeric", month: "long" };

  return today.toLocaleDateString("en-US", options);
}