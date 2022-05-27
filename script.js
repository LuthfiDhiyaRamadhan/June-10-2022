const hbd=new Date("May 27 2022 14:08:00").getTime();

const countdown = setInterval(function(){
    const currentTime = new Date().getTime();
    const diff = hbd - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    let card=''
    const count = document.getElementById('countdown')
    card=`
    
    <div class="time">
            <h2 id="days">${d}</h2>
            <small>Days</small>
        </div>
        <div class="time">
            <h2 id="hours">${h}</h2>
            <small>Hours</small>
        </div>
        <div class="time">
            <h2 id="minutes">${m}</h2>
            <small>Minutes</small>
        </div>
        <div class="time">
            <h2 id="seconds">${s}</h2>
            <small>Seconds</small>
        </div>
    `
    count.innerHTML=card
    
    if (diff <= 0){
        count.innerHTML=`
        <a href="ucapan.html"><button>Click Me</button></a>
        `
        clearInterval(count);
    } 
},1000);


