const careers = ['Developer', 'CEO', 'Artist', 'Bum'];
const cities = ['Milwaukee', 'Los Angeles', 'New York', 'Slum City'];
const relationshipStatuses = ['happily married','single','divorced','dead inside'];
const wealthStatment = ['riches','a garage with books and a lambo','no money, but at least you have your health','no money'];

let career = careers[Math.floor(Math.random(careers)*careers.length)];
let city = cities[Math.floor(Math.random()*cities.length)];
let relationshipStatus = relationshipStatuses[Math.floor(Math.random()*relationshipStatuses.length)];
let wealth = wealthStatment[Math.floor(Math.random()*wealthStatment.length)];

function fortune (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'yes') {
        console.log('You will be a ' + career + ' in ' + city + ' and ' + relationshipStatus + ' and have ' + wealth);
    } else {
        console.log("You're no fun!");
    };
};

fortune('YES');



//------HEY ALEXA, I DON'T THINK THE ABOVE ONE FOLLOWED YOUR 3 POINTS AS MUCH AS THIS ONE.
//------HOWEVER, THEY BOTH WORK!!!!! HAHA, HAVE FUN DETERMINING YOUR FATE.
// const userInput = window.prompt('Do you want your fortune, yes or no?');

// function fortune (userInput, fortunes) {
//     userInput = userInput.toLowerCase();
//     fortunes = ['You will be rich', 'You will be broke', 'You will find love', 'You will be lonely'];
//     if (userInput === 'yes') {
//         console.log(fortunes[Math.floor(Math.random()*fortunes.length)]);
//     } else {
//         console.log("You're no fun!");
//     }
// };

// fortune('yes');
