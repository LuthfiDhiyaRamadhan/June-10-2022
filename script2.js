var musik=new Audio();
musik.src="hbd.mp3";

function mulai(){
    var play=document.getElementById('play');
    play.addEventListener('click',fplay);

    function fplay(){
        musik.play();
        musik.loop=true;
    }
    
}


window.addEventListener('load', mulai);
    