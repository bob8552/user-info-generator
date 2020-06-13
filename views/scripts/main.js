function getRandomString(length) {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_)(*&^%$#@!-=;/,.";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

function getRandomNumber() {
  var randomChars = "1234567890";
  var result = "";
  for (var i = 0; i < 1; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
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
  "jack",
  "doodoo",
  "disappointed"
];

function generateUsername() {
  return `${Username2[Math.floor(Math.random() * Username2.length)]}${Username1[Math.floor(Math.random() * Username1.length)]}_${getRandomNumber()}`;
}

function generatePassword() {
  return getRandomString(15);
}

function onClick() {
  document.getElementById("user").value = generateUsername();
  document.getElementById("pass").value = generatePassword();
}
