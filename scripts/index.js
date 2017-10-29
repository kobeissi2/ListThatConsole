var consoleImage = document.getElementById("consoleImage");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var score = document.getElementById("score");
var scoreDialog = document.getElementById("score-dialog");
var playAgain = document.getElementById("play-again");

var consoleImages = [];
var answers = [];
var options = [];
var correctAnswer = "";
var scoreNum = 0;

score.innerHTML = scoreNum;
playAgain.style.display = "none";

FillImagesAndAnswers();
GetFourAnswers();
SetAnswers();


function FillImagesAndAnswers() {
  consoleImages[0] = new Image();
  consoleImages[0].src = "images/32X.jpg";
  answers[0] = "32X";

  consoleImages[1] = new Image();
  consoleImages[1].src = "images/3DO.jpg";
  answers[1] = "3DO";

  consoleImages[2] = new Image();
  consoleImages[2].src = "images/Action-Max-System.jpg";
  answers[2] = "Action Max ";

  consoleImages[3] = new Image();
  consoleImages[3].src = "images/Amiga-CD32.jpg";
  answers[3] = "Amiga CD32";

  consoleImages[4] = new Image();
  consoleImages[4].src = "images/Atari-2600.jpg";
  answers[4] = "Atari 2600";

  consoleImages[5] = new Image();
  consoleImages[5].src = "images/Atari-5200.jpg";
  answers[5] = "Atari 5200";

  consoleImages[6] = new Image();
  consoleImages[6].src = "images/Atari-7800.jpg";
  answers[6] = "Atari 7800";

  consoleImages[7] = new Image();
  consoleImages[7].src = "images/Atari-Jaguar-CD.jpg";
  answers[7] = "Atari Jaguar CD";

  consoleImages[8] = new Image();
  consoleImages[8].src = "images/Bally-Arcade.png";
  answers[8] = "Bally Arcade";

  consoleImages[9] = new Image();
  consoleImages[9].src = "images/Casio-PV1000.png";
  answers[9] = "Casio PV1000";

  consoleImages[10] = new Image();
  consoleImages[10].src = "images/ColecoVision.jpg";
  answers[10] = "ColecoVision";

  consoleImages[11] = new Image();
  consoleImages[11].src = "images/CreatiVision.png";
  answers[11] = "CreatiVision";

  consoleImages[12] = new Image();
  consoleImages[12].src = "images/Dreamcast.jpg";
  answers[12] = "Dreamcast";

  consoleImages[13] = new Image();
  consoleImages[13].src = "images/Emerson-Arcadia-2001.png";
  answers[13] = "Emerson Arcadia 2001";

  consoleImages[14] = new Image();
  consoleImages[14].src = "images/Epoch-Cassette-Vision.png";
  answers[14] = "Epoch Cassette Vision";

  consoleImages[15] = new Image();
  consoleImages[15].src = "images/Fairchild-Channel-F-System-II.jpg";
  answers[15] = "Channel F System II";

  consoleImages[16] = new Image();
  consoleImages[16].src = "images/Fairchild-Channel-F.png";
  answers[16] = "Channel F System";

  consoleImages[17] = new Image();
  consoleImages[17].src = "images/FM-Towns-Marty.jpg";
  answers[17] = "FM Towns Marty";

  consoleImages[18] = new Image();
  consoleImages[18].src = "images/GameCube.jpg";
  answers[18] = "GameCube";

  consoleImages[19] = new Image();
  consoleImages[19].src = "images/Intellivision.png";
  answers[19] = "Intellivision";

  consoleImages[20] = new Image();
  consoleImages[20].src = "images/Magnavox-Odyssey-2.png";
  answers[20] = "Magnavox Odyssey 2";

  consoleImages[21] = new Image();
  consoleImages[21].src = "images/Magnavox-Odyssey.jpg";
  answers[21] = "Magnavox Odyssey";

  consoleImages[22] = new Image();
  consoleImages[22].src = "images/N64.jpg";
  answers[22] = "Nintendo 64";

  consoleImages[23] = new Image();
  consoleImages[23].src = "images/NEC-PC-FX.jpg";
  answers[23] = "NEC PC FX";

  consoleImages[24] = new Image();
  consoleImages[24].src = "images/Neo-Geo-CD.jpg";
  answers[24] = "Neo Geo CD";

  consoleImages[25] = new Image();
  consoleImages[25].src = "images/Neo-Geo.jpg";
  answers[25] = "Neo Geo";

  consoleImages[26] = new Image();
  consoleImages[26].src = "images/NES.jpg";
  answers[26] = "NES";

  consoleImages[27] = new Image();
  consoleImages[27].src = "images/Nintendo-Color-TV-Game-Blockbreaker-FL.jpg";
  answers[27] = "Nintendo Color TV";

  consoleImages[28] = new Image();
  consoleImages[28].src = "images/Nintendo_Switch.png";
  answers[28] = "Nintendo Switch";

  consoleImages[29] = new Image();
  consoleImages[29].src = "images/Philips-CDi.jpg";
  answers[29] = "Philips CDi";

  consoleImages[30] = new Image();
  consoleImages[30].src = "images/Pioneer-LaserActive.jpg";
  answers[30] = "Pioneer LaserActive";

  consoleImages[31] = new Image();
  consoleImages[31].src = "images/Pippin-Atmark.jpg";
  answers[31] = "Pippin Atmark";

  consoleImages[32] = new Image();
  consoleImages[32].src = "images/PS2.jpg";
  answers[32] = "Playstation 2";

  consoleImages[33] = new Image();
  consoleImages[33].src = "images/PS3.jpg";
  answers[33] = "Playstation 3";

  consoleImages[34] = new Image();
  consoleImages[34].src = "images/PS4-Pro.jpg";
  answers[34] = "Playstation 4 Pro";

  consoleImages[35] = new Image();
  consoleImages[35].src = "images/PS4.jpg";
  answers[35] = "Playstation 4";

  consoleImages[36] = new Image();
  consoleImages[36].src = "images/PSX.jpg";
  answers[36] = "Playstation X";

  consoleImages[37] = new Image();
  consoleImages[37].src = "images/RCA-Studio-II-FL.jpg";
  answers[37] = "RCA Studio II";

  consoleImages[38] = new Image();
  consoleImages[38].src = "images/Sega-Genesis.jpg";
  answers[38] = "Sega Genesis";

  consoleImages[39] = new Image();
  consoleImages[39].src = "images/Sega-Master-System.jpg";
  answers[39] = "Sega Master System";

  consoleImages[40] = new Image();
  consoleImages[40].src = "images/Sega-Saturn.jpg";
  answers[40] = "Sega Saturn";

  consoleImages[41] = new Image();
  consoleImages[41].src = "images/SNES.jpg";
  answers[41] = "Super NES";

  consoleImages[42] = new Image();
  consoleImages[42].src = "images/Super-Cassette-Vision.jpg";
  answers[42] = "Super Cassette Vision";

  consoleImages[43] = new Image();
  consoleImages[43].src = "images/TurboDuo.jpg";
  answers[43] = "TurboDuo";

  consoleImages[44] = new Image();
  consoleImages[44].src = "images/TurboGrafx16.jpg";
  answers[44] = "TurboGrafx16";

  consoleImages[45] = new Image();
  consoleImages[45].src = "images/VC-4000.png";
  answers[45] = "VC-4000";

  consoleImages[46] = new Image();
  consoleImages[46].src = "images/Vectrex.png";
  answers[46] = "Vectrex";

  consoleImages[47] = new Image();
  consoleImages[47].src = "images/Wii.png";
  answers[47] = "Wii";

  consoleImages[48] = new Image();
  consoleImages[48].src = "images/Wii_U.png";
  answers[48] = "Wii U";

  consoleImages[49] = new Image();
  consoleImages[49].src = "images/Xbox-360.jpg";
  answers[49] = "Xbox 360";

  consoleImages[50] = new Image();
  consoleImages[50].src = "images/Xbox-One-X.png";
  answers[50] = "Xbox One X";

  consoleImages[51] = new Image();
  consoleImages[51].src = "images/Xbox-One.jpg";
  answers[51] = "Xbox One";

  consoleImages[52] = new Image();
  consoleImages[52].src = "images/Xbox.png";
  answers[52] = "Xbox";

  consoleImages[53] = new Image();
  consoleImages[53].src = "images/Zanussi-Ping-o-tronic.jpg";
  answers[53] = "Ping O Tronic";
}

function GetFourAnswers() {
  options = [
    Math.floor(Math.random() * 54),
    Math.floor(Math.random() * 54),
    Math.floor(Math.random() * 54),
    Math.floor(Math.random() * 54)
  ];

  for (var index = 0; index < options.length; index++) {
    if (!isUnique(options[index])) {
      options[index] = Math.floor(Math.random() * 54);
    }
  }

  correctAnswer = options[Math.floor(Math.random() * 4)];
}

function isUnique(option) {
  var counter = 0;
  for (var index = 0; index < options.length; index++) {
    if (options[index] === option) {
      counter++;
    }
  }
  return counter > 1 ? false : true;
}

function SetAnswers() {
  consoleImage.src = consoleImages[correctAnswer].src;
  first.value = answers[options[0]];
  second.value = answers[options[1]];
  third.value = answers[options[2]];
  fourth.value = answers[options[3]];
}

function CheckAnswer(answer) {
  if (answer == answers[correctAnswer]) {
    scoreNum += 100;
  } else {
    scoreNum -= 100;
  }
  score.innerHTML = scoreNum;
  if (!isWinnerOrLoser()) {
    GetFourAnswers();
    SetAnswers();
  }
}

first.onclick = function() {
  CheckAnswer(first.value);
  WinnerOrLoser();
};

second.onclick = function() {
  CheckAnswer(second.value);
  WinnerOrLoser();
};

third.onclick = function() {
  CheckAnswer(third.value);
  WinnerOrLoser();
};

fourth.onclick = function() {
  CheckAnswer(fourth.value);
  WinnerOrLoser();
};

playAgain.onclick = function() {
  location.reload();
};

var isWinnerOrLoser = function WinnerOrLoser() {
  if (scoreNum === 1000 || scoreNum === -1000) {
    scoreDialog.style.display = "none";
    if (scoreNum === 1000) {
      score.innerHTML = "You win!";
    } else {
      score.innerHTML = "You lose!";
    }
    first.disabled = true;
    second.disabled = true;
    third.disabled = true;
    fourth.disabled = true;
    playAgain.style.display = "inline";
    return true;
  }
  return false;
};
