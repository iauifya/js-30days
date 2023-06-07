"use strict";

var array = [1, 2, 3];
console.log(array);
var array2 = Array(3);
console.log(array2);
var moreNumbers = Array.from('hello');
console.log(moreNumbers);
var listItems = document.querySelectorAll('li');
console.log(listItems);
var arrayListItems = Array.from(listItems);
console.log(arrayListItems);
var hobbies = ['music', 'cooking'];
hobbies.push('sport');
hobbies.unshift('pictures');
hobbies.pop();
hobbies[1] = 'movies';
console.log(hobbies);
hobbies.splice(1, 0, 'reading');
console.log(hobbies);
hobbies.splice(1, 2);
console.log(hobbies);
var testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(1, 3); //.slice()會保留原本的資料
var newResults = testResults.concat(4.33, 7.2);
testResults.push(8.4);
console.log(newResults, testResults);
console.log(testResults.indexOf(-5));
console.log(testResults.includes(10.99));
console.log(testResults.indexOf(10.99) !== 1);
//.splice(1,0) 數字1代表索引，數字2代表刪除幾個，參數3為加入的資料，所以它可以操作新增、刪除...
//.slice()會保留原本的資料
//.slice(1,3) 範圍 數字1,2代表從索引多少到多少，但只會切到數字2的前一個數字，比較是切一個範圍出來
var personData = [{
  name: 'Kenny'
}, {
  name: 'Olivia'
}];
var Kenny = personData.find(function (person, index, persons) {
  return person.name === 'Kenny';
});
Kenny.name = 'Anna';
console.log(Kenny, personData);
var OliviaIndex = personData.findIndex(function (person, index, persons) {
  return person.name === 'Olivia';
});
console.log(OliviaIndex);

// Babel 输入： ES2015 箭头函数
[1, 2, 3].map(function (n) {
  return n + 1;
});
