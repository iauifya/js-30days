const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// currentResult = (currentResult + 25) * 2 - 3;
// let currentResultDescription = `(${defaultResult} + 25)*2-3`;
// let errorMessage = 'error \nnumber'
// console.log(errorMessage);

//字串轉數字才可進行運算
function getUserInput() {
    return parseInt(userInput.value);
}

// 重構 放入三個參數:運算子,計算前的數字,被計算的數字 此函數為計算結果
function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
    outputResult(currentResult, calcDescription);
}

function calculationResult(calculationType) {
    const enterNumber = getUserInput();
    const initialResult = currentResult; //計算前的數字初始化
    let mathOperator;
    if (calculationType === 'ADD') {
        // currentResult = currentResult + enterNumber; 可簡化成以下那行
        currentResult += enterNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enterNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enterNumber;
        mathOperator = '*';
    } else {
        currentResult /= enterNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enterNumber); //呼叫此函數並帶入參數，秀出結果
}

function add() {
    calculationResult('ADD');
    const logEntry = {
        operator: 'add',
        previousNum: initialResult,
        number: enterNumber,
        result: currentResult
    }
    logEntries.push(logEntry);
    console.log(logEntry.operator);
    console.log(logEntries);
    console.log(logEntries[0]); //只抓第一筆資料
}

function subtract() {
    // const enterNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult -= enterNumber;
    // createAndWriteOutput('-', initialResult, enterNumber);
    calculationResult('SUBTRACT');
}

function multiply() {
    // const enterNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult *= enterNumber;
    // createAndWriteOutput('*', initialResult, enterNumber);
    calculationResult('MULTIPLY');
}

function divide() {
    // const enterNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult /= enterNumber;
    // createAndWriteOutput('/', initialResult, enterNumber);
    calculationResult('DIVIDE');
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);