console.log('this is feature 2 - krishnendu Dakshi');
// filter out the odd numbers
const filterOdd = (arr) => arr.filter((num) => num % 2 === 0);
console.log(filterOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// create mock data
const mockData = [
  {
    id: 1,
    name: 'Krishnendu',
    age: 30,
  },
  {
    id: 2,

    name: 'Dakshi',
    age: 28,
  },
  {
    id: 3,
    name: 'Krishnendu Dakshi',
    age: 1,
  },
];

// filter out the data with age greater than 30
const filterData = (arr) => arr.filter((data) => data.age > 30);
console.log(filterData(mockData));
