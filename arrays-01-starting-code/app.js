const array = [1, 2, 3];
console.log(array);
const array2 = Array(3);
console.log(array2); //[undefined,undefined,undefined]

const moreNumbers = Array.from('hello');
console.log(moreNumbers); //["h","e","l","l","o"]

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['music', 'cooking'];
hobbies.push('sport');
hobbies.unshift('pictures'); //會塞到陣列第一筆
hobbies.pop();
hobbies[1] = 'movies'
console.log(hobbies);
hobbies.splice(1, 0, 'reading');
console.log(hobbies);
hobbies.splice(1, 2);
console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(1, 3); //.slice()會保留原本的資料
const newResults = testResults.concat(4.33, 7.2);
testResults.push(8.4);
console.log(newResults, testResults);
console.log(testResults.indexOf(-5));

console.log(testResults.includes(10.99));
console.log(testResults.indexOf(10.99) !== 1);
//.splice(1,0) 參數1代表索引(index)，參數2代表刪除幾個，參數3為加入的資料，所以它可以操作新增、刪除...
//.slice()會保留原本的資料
//.slice(1,3) 範圍 數字1,2代表從索引多少到多少，但只會切到數字2的前一個數字，比較是切一個範圍出來
const personData = [{ name: 'Kenny' }, { name: 'Olivia' }];
const Kenny = personData.find((person, index, persons) => {
    return person.name === 'Kenny'
});
Kenny.name = 'Anna';
console.log(Kenny, personData); //[{ 'Anna' }, { name: 'Olivia' }]，所以.find會改變原先的陣列
const OliviaIndex = personData.findIndex((person, index, persons) => {
    return person.name === 'Olivia';
});
console.log(OliviaIndex);

// Babel 输入： ES2015 箭头函数
[1, 2, 3].map(n => n + 1);