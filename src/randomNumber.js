const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const secondRandomNUmber = Math.floor(Math.random() * 1 + 1);
console.log(secondRandomNUmber);
export default randomNumber;
