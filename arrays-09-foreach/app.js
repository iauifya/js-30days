const prices = [150, 290, 80, 120, 350];
const tax = 0.19;
// const taxAdjustedPrices = [];
//forEach與for of 的差異在於前者可以取得index(索引的值);
// prices.forEach((price, idx, prices) => {htr
//     const priceObj = {
//         index: idx,
//         taxAdjustedPrices: price * (1 + tax)
//     }
//     taxAdjustedPrices.push(priceObj);
// })
//.map 功能跟foreach很像，會產生一組新的陣列，它會return東西(變數)回去，不需要像foreach一樣需要一組空的陣列再把資料push進去
const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {
        index: idx,
        taxAdjustedPrices: price * (1 + tax)
    }
    return priceObj;

})
console.log(prices, taxAdjustedPrices);
//.sort()可加入兩個參數，再去做大小比較
const sortPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(sortPrices);
// console.log(sortPrices.reverse());

//filter的用法跟foreach、map一樣需要先帶入參數，return條件值回去
// const filterArray = prices.filter((price, index, prices) => {
//     return price > 150;
// });
const filterArray = prices.filter(price => price > 150);
console.log(filterArray);

const sum = prices.reduce((preValue, curValue) => preValue + curValue);
console.log(sum);
//reduce經過自己要的計算把一組資料變成一個值