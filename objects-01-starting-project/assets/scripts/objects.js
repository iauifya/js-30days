const userChosenKeyName = 'level';
let person = {
    name: 'Jenny',
    age: '26',
    'phone-number': 911223456, //key也可用這種表示方式，但比較少用
    hobbies: ['sports', 'cooking'],
    [userChosenKeyName]: 2,
    greet: function() {
        alert('Hi there!');
    },
    1.5: 'Hi'
};
// person.greet();
person.isAdmin = true; //此方式可直接在object裡面新增加一個屬性並賦值
const keyPhone = 'phone-number';
delete person.age; //會真的刪掉這筆屬性 雖然console出來是以undefined呈現
console.log(person);
console.log(person[keyPhone]); //利用變數來去管理屬性名稱，也可透過[]方式去使用它
// console.log(person['phone-number']);