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
console.log(filterArr);
