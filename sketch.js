var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var human1,human2,human3,humans;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount===4){
    game.update(1);
  }
  if (gameState===1){
    clear  ()
    game.play()
  }
}
