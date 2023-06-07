const prices = [150, 290, 80, 120, 350];
const data = 'Taiwan;2022;03';
const transformedData = data.split(';'); //會回傳陣列，適用於字串轉換陣列
transformedData[1] = +transformedData[1]; //變成num型式，"2022" -> 2022
console.log(transformedData);

//字串合併 .join 字串適用，陣列不適用，可用於陣列轉字串
const nameFragements = ['Sophia', 'Ke'];
const name = nameFragements.join(' ');
console.log(name);

//spread opearator(...) 1. [...nameFragements]可複製一組新的陣列出來，所以舊的加資料進去不會影響新的，但是只能淺拷貝(如果再增加一組新的屬性(key)進去，則新拷貝出來的也會受到影響)
// 2.(...prices)可把陣列裡的元素拉出來做操作
const copiedNameFragements = [...nameFragements];
nameFragements.push('Miss');
console.log(nameFragements, copiedNameFragements);

console.log(Math.min(...prices)); //直接以prices不能做此操作，因為prices是陣列，所以需透過(...)來做轉換

const persons = [{ name: 'Max', age: 30 }, { name: 'Kenny', age: 25 }];
const copiedPersons = [...persons]; //代表複製這述整串地址
persons.push({ name: 'Wendy', age: 28 }); //會新增在這串地址的最後面，所以不會影響到新複製的陣列
persons[1].age = 23; //如果對陣列裡的物件做改變，也會影響到新複製的陣列
console.log(persons, copiedPersons);

//array destructuring 把資料從陣列裡面拆出來
const nameData = ['Nita', 'Kevin', 'Mr', 30];
const [firstName, lastName, ...otherInformation] = nameData; //...otherInformation會把剩下沒有定義變數的資料集合起來
console.log(firstName, lastName, otherInformation);