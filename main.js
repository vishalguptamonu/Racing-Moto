var car= document.getElementById('car');
var rcar= document.getElementById('rcar');
var result= document.getElementById('result');
const score= document.getElementById('score');
var game= document.getElementById('game');
var counter=0;
var sound= document.getElementById('sound');

car.addEventListener('animationiteration',function(){
    var random= ((Math.floor(Math.random() * 3)) * 130);
    car.style.left= random+ "px";
    counter++;
})

window.addEventListener('keydown', function(e){
  if(e.keyCode=="39")  {var rcarleft= parseInt(window.getComputedStyle(rcar).getPropertyValue("left"))}
   if(rcarleft<260) {rcar.style.left= (rcarleft + 130) + "px"
   sound.play();
}

   if(e.keyCode=="37"){
     var rcarleft= parseInt(window.getComputedStyle(rcar).getPropertyValue("left"));
   if(rcarleft>0) {rcar.style.left= (rcarleft - 130) + "px"}
    sound.play();
   }
})

// Game over
setInterval( function gameover(){
   var cartop= parseInt(window.getComputedStyle(car).getPropertyValue("top"));
   var carleft= parseInt(window.getComputedStyle(car).getPropertyValue("left"));
   var rcarleft= parseInt(window.getComputedStyle(rcar).getPropertyValue("left"));

   if((carleft==rcarleft) && (cartop>250) && (cartop<450)){
        result.style.display= "block";
        game.style.display= "none";
        score.innerHTML= `score: ${counter}`;

        counter=0;
   }
 
  }, 10);