class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var pref=await database.ref('playerCount').once("value")
      if (pref.exists()){
        playerCount= pref.val()
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
    human1= createSprite(100,200);
    human2= createSprite(300,200);
    human3= createSprite(500,200);
    humans= [human1,human2,human3];
  }
  play(){
    form.hide()
    Player.getPlayerinfo()
    if (allPlayers!==undefined){
       var index=0;
       var x=0;
       var y;
       for (var plr in allPlayers){
       index=index+1
       x=x+200;
       y=displayHeight-allPlayers[plr].distance;
       humans[index-1].x=x;
       humans[index-1].y=y;
       if(index===player.index){
         humans[index-1].shapeColor="red";
         camera.position.x=displayWidth/2;
         camera.position.y=humans[index-1].y;
       }
    }
  }
if (keyIsDown(UP_ARROW)&&player.index!==null){
   player.distance+=50
   player.update()
}
if (keyIsDown(DOWN_ARROW)&&player.index!==null){
   player.distance+=-50
   player.update()
}

drawSprites();
}
}