/* eslint-disable no-console */
/* eslint-disable strict */
function jediName(firstName, lastName){
  return lastName.slice(0,2) + firstName.slice(0,1);
}
function beyond (num) {
  if (num === Infinity) {
    console.log('And beyond');
  }
  if (num > 0) {
    console.log('To infinity');
  }
  if (num < 0) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}