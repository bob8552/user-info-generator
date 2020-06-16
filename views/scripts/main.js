//Functions

function getRandomString(length) {
  var randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_)(*&^%$#@!-=;/,.";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

function getRandomNumber() {
  var randomChars = "1234567890";
  var result = "";
  for (var i = 0; i < 1; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

//Username combinations
var Username1 = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "professor",
  "hamster",
  "dog",
  "car",
  "train",
  "log",
  "tree",
  "clown",
  "truck",
  "cream",
  "rock",
  "meme",
  "chungus",
  "dragon",
  "bob",
  "dom",
  "yankee",
  "freerealestate",
  "coder",
  "zack",
  "xaar",
  "globglobgabgalab",
  "strider",
  "cheemsburger",
  "doge",
  "username",
  "space"
];

var Username2 = [
  "happy",
  "sad",
  "vibrant",
  "depressed",
  "old",
  "funny",
  "stinky",
  "foul",
  "angry",
  "wibbly",
  "jelly",
  "colourful",
  "jumpy",
  "bouncy",
  "creamy",
  "beautiful",
  "nice",
  "dank",
  "oogway",
  "normal",
  "disappointed",
  "dev",
  "smart",
  "angerry",
  "MC",
  "RBLX"
];

//Name combinations

var firstNameMale = [
  "Jack",
  "Simon",
  "Sam",
  "Tom",
  "Tim",
  "Zack",
  "Dominic",
  "Kirby",
  "John",
  "Jhon",
  "Sammy",
  "Henry",
  "Oliver",
  "Felix",
  "Leo",
  "Oscar",
  "Greg",
  "James",
  "Ethan",
  "Julian",
  "Arthur",
  "Liam",
  "Ryan",
  "Caleb",
  "Thomas",
  "Harry",
  "William",
  "Barry",
  "Luke",
  "Noah",
  "Vincent",
  "Zachary",
  "Ken",
  "Samuel",
  "November",
  "Sammy",
  "Kevin",
  "Raian",
  "Jeff",
  "Oogway"
];

var firstNameFemale = [
  "Sarah",
  "Sara",
  "Zara",
  "Cordelia",
  "Maya",
  "Delilah",
  "Harper",
  "Ottilie",
  "Sienna",
  "Lily",
  "Florence",
  "Gemma",
  "Stella",
  "Isabel",
  "Matilda",
  "Iris",
  "Violet",
  "Chealsea",
  "Norah",
  "Olivia",
  "Amara",
  "Ada",
  "Auora",
  "Marzia",
  "Thyme",
  "Veronica",
  "Oogwaya"
];

var lastNames = [
  "Martan",
  "Smith",
  "Jasonson",
  "Middleton",
  "Miller",
  "Robinson",
  "Stevens",
  "Brown",
  "Bled",
  "Harrison",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Taylor",
  "Jackson",
  "Moore",
  "Timothy",
  "Clark",
  "White",
  "Walker",
  "Young",
  "Hill",
  "Campbell",
  "Mitchell",
  "Carter"
];

function generateUsername() {
  return `${Username2[Math.floor(Math.random() * Username2.length)]}${
    Username1[Math.floor(Math.random() * Username1.length)]
  }_${getRandomNumber()}`;
}

function generatePassword(p) {
  return getRandomString(p);
}

function generateName() {
  if (Math.floor(Math.random() * 11) > 5)
    return `${
      firstNameMale[Math.floor(Math.random() * firstNameMale.length)]
    } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  else
    return `${
      firstNameFemale[Math.floor(Math.random() * firstNameFemale.length)]
    } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function onClick() {
  document.getElementById("user").value = generateUsername();
  document.getElementById("pass").value = generatePassword(Math.ceil(Math.random() * 15) + 5);
  document.getElementById("fullname").value = generateName();
}

//Customised generation functions

function customname() {
  if (document.getElementById("male").checked === true) {
    return `${
      firstNameMale[Math.floor(Math.random() * firstNameMale.length)]
    } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  } else if (document.getElementById("female").checked === true) {
    return `${
      firstNameFemale[Math.floor(Math.random() * firstNameFemale.length)]
    } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  } else {
    return generateName();
  }
}

function onClickC() {
  var p = document.getElementById("passlength").value;
  var propmt1 = p;
  var warnbox = document.getElementById("warnbox");
  var propmt = parseInt(propmt1, 10);
  if (propmt1 === "") propmt = 15
  if (isNaN(propmt)) return warnbox.innerHTML = "That is not a number.";
  if (propmt < 5) return warnbox.innerHTML = "The password is too small. Please input a number between 5 and 30.";
  if (propmt > 30) return warnbox.innerHTML = "The password is too long. Please input a number between 5 and 30.";
  warnbox.innerHTML = "";

  
  document.getElementById("user").value = generateUsername();
  document.getElementById("pass").value = generatePassword(propmt);
  document.getElementById("fullname").value = customname();
}