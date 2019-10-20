function fillUpInputs(){
    select = document.getElementById('hours');
    for (var i = 0; i<=60; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }

    select = document.getElementById('mins');
    for (var i = 0; i<=60; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }

    select = document.getElementById('secs');
    for (var i = 0; i<=60; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}

function timerDone(){
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1';
}

// shows time
function updateTimer(h, m, s){
    document.getElementById("demo").innerHTML =  h + "h "
    + m + "m " + s + "s ";
}

function updateSharableLink(l){
    document.getElementById("sharable").value =  l;
}

function setTimer(){
    document.getElementById("sharableLink").style.visibility = "visible";

    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("mins").value;
    var seconds = document.getElementById("secs").value;

    var currentTime = new Date();
    // console.log({today: currentTime.toString()});
    currentTime.setTime(currentTime.getTime() + seconds*1000 + minutes*60*1000 + hours *60*60*1000); 
    // console.log("Until: " + currentTime.toTimeString());
    window.history.pushState("string", "RickAstyley", "/index.html?" + currentTime.getTime());
    updateSharableLink(window.location.href.toString());
    hideInputs();
    startTimer(hours, minutes, seconds);    
}

function startTimer(hours, minutes, seconds){
    updateTimer(hours, minutes, seconds);
    var x = setInterval(function() {
        if(hours <= 0 && minutes <= 0 && seconds <= 0){
            timerDone();
            updateTimer(hours, minutes, seconds);
            return;
        }
       seconds -= 1;

       if(seconds < 0){
           seconds = 59;
           minutes -=1;
            if(minutes < 0){
                minutes = 59;
                hours -= 1; 
            }
       }
       updateTimer(hours, minutes, seconds);
    }, 1000);
}

function copyLink() {
    var copyText = document.getElementById("sharable");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the url");
}

function hideInputs(){
    document.getElementById("timer").style.visibility="hidden";
    document.getElementById("sharableLink").style.visibility = "visible";
    document.getElementById("timer").style.width="0";
    document.getElementById("timer").style.height="0";
}

function main(){
    console.log({currentDate: (new Date()).toLocaleString()});
    var arg = window.location.search.substr(1);
    if(arg.length > 0){
        hideInputs();
        document.getElementById("sharableLink").style.visibility = "hidden";
        var countDownDate  = new Date();
        countDownDate.setTime(arg);
        console.log(countDownDate.toLocaleString());

        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        startTimer(hours, minutes, seconds);
    }else{
        fillUpInputs();
    }
}
main();