/* // 'use strcit';
// function declaration
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(1, 2));

//function expression
const calAge2 = function (birthyear) {
    return 2030 - birthyear;
} */

// Challenge #1
/*const calcAverage = (socre1, socre2, score3) => (socre1 + socre2 + score3) / 3;
const avrDolphins = calcAverage(85, 54, 41);
const avrKoalas = calcAverage(23, 34, 27);
console.log(avrDolphins);
console.log(avrKoalas);

const checkWinner = function (avr1, avr2) {
    if (avr1 >= avr2 * 2) {
        console.log(`Koalas win (${avr1} vs. ${avr2})`);
    } else if (avr2 >= avr1 * 2) {
        console.log(`Dophins win (${avr2} vs. ${avr1})`);
    } else {
        console.log("No team wins");
    }
}

checkWinner(avrKoalas, avrDolphins);*/

//==================================//

//Arrays
/* const friends = ['Pele', 'Michael', 'Peter'];
console.log(friends);

const years = new Array(1998, 1999, 2000, 2001);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Pele';
const pele = [firstName, 'Pan', friends, 2022 - 2001];
console.log(pele); */

/* const friends = ['Pele', 'Michael', 'Peter'];
console.log(friends.push('Pele'));
console.log(friends)

friends.unshift('John');
console.log(friends);


friends.pop(1);
console.log(friends);

friends.pop('Pele');
console.log(friends) */

/*const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total); */

//Objects


/* 
console.log(pele);
console.log(pele.lastName);
console.log(pele['lastName']);
const nameKey = 'Name';
console.log(pele['first' + nameKey]);
console.log(pele['last' + nameKey]);

// const interstedIn = prompt('What do u want to now about Jonas?Choose between firstName, lastName, age or job.');
// console.log(interstedIn);
// console.log(pele[interstedIn]);

pele.location = 'Hangzhou';
pele['Instagram'] = '@Pele12138';
console.log(pele);

//pele['bestfriend'] = pele['friends'][0];
// console.log(pele);

console.log(`${pele.firstName} has ${pele['friends'].length} friends, and his best friend is ${pele['friends'][0]}`);

 */

/* const pele = {
    firstName: 'Pele',
    lastName: 'Pan',
    birthYear: 2001,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven '],
    haveDriveLicence: false,

    // clacAge: function (birthYear) { return 2022 - birthYear; }
    clacAge: function () { return 2022 - this.birthYear; }
}; */

// console.log(pele.clacAge(2001));
// console.log(pele['clacAge'](2001));
// console.log(pele['clacAge']());

// Challenge #3
const MarkMiller = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },
    // BMI: this.calcBMI()
}
const JohnSmith = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },
    // BMI: this.calcBMI()
}


MarkMiller.calcBMI();
JohnSmith.calcBMI();
console.log(MarkMiller.bmi);
console.log(JohnSmith.bmi);
if (MarkMiller.bmi > JohnSmith.bmi) { console.log(`Mark's BMI (${MarkMiller.bmi}) is higher than John's (${JohnSmith.bmi})`); } else {
    console.log(`John's BMI (${JohnSmith.bmi}) is higher than Mark's (${MarkMiller.bmi})`);
}