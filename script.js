/*5. Intro JS*/
const massage = () => {
  console.log("hahahahahaha");
};
setTimeout(massage, 5000);

/* 6. Advanced JS: Arrays and Callbacks*/
const arrCtoF1 = (arrC) => {
  const arrF = [];
  for (let i = 0; i < arrC.length; i++) {
    arrF.push(arrC[i] * 1.8 + 32);
  }
  return arrF;
};

//=>solution1 callback function:reusability & abstraction
const modifyArray = (arr, transformFunc) => {
  // apply transformFunc to all elements of arr, return
  // the result
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(transformFunc(arr[i]));
  }
  return newArr;
};

const CtoF = (C) => C * 1.8 + 32;
const FtoC = (F) => (F - 32) / 1.8;
const tempsC = [1, 2, 3, 4, 5];
const tempsF1 = modifyArray(tempsC, CtoF);
//=>tempsF1=[33.8, 35.6, 37.4, 39.2, 41]
const tempsC_back = modifyArray(tempsF1, FtoC);
//=>tempsC_back=[1, 2, 3, 4, 5]

//=>solution2 map(...)
const tempsF2 = tempsC.map((temp) => temp * 1.8 + 32);

//map(...) example
const ex_object = [
  { width: 1, height: 2 },
  { width: 3, height: 4 },
  { width: 5, height: 6 },
];
areas = ex_object.map((ex_object) => ex_object.width * ex_object.height);

//filter(...) example
perimeter = ex_object.filter(
  (ex_object) => ex_object.width * 2 + ex_object.height * 2 < 10
);
//=>[{width: 1, height: 2}]
