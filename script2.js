var musik=new Audio();
musik.src="hbd.mp3";
musik.loop=true;
musik.play();
function mulai(){
    var audio = document.getElementById("play");
    play.addEventListener('click', fplay);
    
};
window.addEventListener('load',mulai);
    