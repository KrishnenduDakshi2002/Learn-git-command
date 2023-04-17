const feature22 = () => {
  // filter array
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newArr = arr.filter((item) => item > 5);
  console.log(newArr);
  // map array
  const mapArr = arr.map((item) => item * 2);
  console.log(mapArr);
  // reduce array
  const reduceArr = arr.reduce((acc, item) => acc + item, 0);
  console.log(reduceArr);
  // find array
  const findArr = arr.find((item) => item === 5);
  console.log(findArr);
  // find index array
  const findIndexArr = arr.findIndex((item) => item === 5);
  console.log(findIndexArr);
  // sort array
  const sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr);
  console.log('feature 22');
};

feature22();
