let numOfWon = 0;
let numOfLost = 0;

for (let i = 1; i <= 5; i++) {
    let guessingNumber = parseInt(prompt('Enter Your Number From 1 to 5: '))
    let numberGenarate = Math.floor(Math.random() * 5) + 1;

    if (guessingNumber == numberGenarate) {
        alert('You Have Won');
        numOfWon++;
    } else {
        alert('You Have Lost. Random Number Was:' + numberGenarate)
        numOfLost++;
    }
}

document.write('Total Number Of Won:' + numOfWon + '<br>');
document.write('total Number Of Lost:' + numOfLost);


