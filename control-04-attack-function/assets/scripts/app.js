const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 18;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'STRONG_PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
const enteredValue = prompt('maximum life for you and monster', '100');
let chosenMaxLife = parseInt(enteredValue);
//預防有些用戶亂輸，所以如果不能轉成數字的(NaN)或是小於零的數字，就會預設成100
if (isNaN(chosenMaxLife || chosenMaxLife <= 0)) {
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

let battleLog = [];
let lastLoginEntry;
adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerLife = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerLife;
        alert('You would be died but bonus life save you')
        setPlayerHealth(initialPlayerLife);
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You win!');
        writeToLog(LOG_EVENT_GAME_OVER, 'Player won', currentMonsterHealth, currentPlayerHealth);
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lose');
        writeToLog(LOG_EVENT_GAME_OVER, 'Monster won', currentMonsterHealth, currentPlayerHealth);
        reset();
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('平手!');
        writeToLog(LOG_EVENT_GAME_OVER, 'draw', currentMonsterHealth, currentPlayerHealth);
        reset();
    }

}

function attackMonster(mode) {
    //使用三元運算式改寫
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = ATTACK_VALUE ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // let maxDamage;
    // let logEvent;
    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
    endRound();

}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("你不能超出初始生命值");
        // 如果超出的話就將玩家恢復到其初始值但不會超過此值，因為是由初始值-當前玩家健康值來去決定healValue
        healValue = chosenMaxLife - currentPlayerHealth;
    } else { // 如果沒超出的話，就可以讓healValue = (全局變數)HEAL_VALUE也就是20
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();

}

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };
    //使用switch case改寫
    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'monster';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'monster';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'player';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'player';
            break;
        case LOG_EVENT_GAME_OVER:
            break;
        default:
            logEntry = {};
            break;
    }
    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'monster'
    // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = 'monster'
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry.target = 'player'
    // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry.target = 'player'
    //         // } else if (ev === LOG_EVENT_GAME_OVER) {

    //     // }
    // }
    battleLog.push(logEntry);
}

function printLogHandler() {
    let i = 0;

    for (const logEntry of battleLog) {
        if (!lastLoginEntry && lastLoginEntry !== 0 || lastLoginEntry < i) {
            console.log(`#${i}`);
            for (key in logEntry) {
                console.log(`${key} => ${logEntry[key]}`);
            }
            lastLoginEntry = i;
            break;
        }
        i++;

    }
    // for (const logEntry of battleLog) {
    //     console.log(logEntry);
    //     console.log(i);
    //     i++;
    // }

}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);