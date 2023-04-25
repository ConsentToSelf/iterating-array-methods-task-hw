// first

/*
На основе массива [1,2,3,5,8,9,10] сформировать новый массив,

каждый элемент которого будет хранить информацию о числе и его четности:

[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/
let arr = [1, 2, 3, 5, 8, 9, 10];

let newArr = arr.map((i) => {
  return {
    digit: i,
    odd: Boolean(i % 2),
  };
});
// console.log(newArr);

// second

/*
Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
*/
let arrSecond = [12, 4, 50, 1, 0, 18, 40];
const filterArr = arrSecond.some((num) => {
  return num === 0;
});
// console.log(filterArr);

// third

/*
Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
*/
const strArr = ["yes", "hello", "no", "easycode", "what"];

const strArrEvery = strArr.every((element) => element.length > 3);
// console.log(strArrEvery);

// fourth
/*
Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт

строку, основываясь на index каждой буквы. Например:

[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
*/
const objArr = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },

  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },

  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];

const objArrSort = objArr.sort((prev, next) => prev.index - next.index);

const objArrSortReduce = objArrSort.reduce(
  (acc, user) => (acc += user.char),
  []
);

console.log(objArrSortReduce);
