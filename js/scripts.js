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

function startTimer(){
    document.getElementById("timer").style.visibility="hidden";
    document.getElementById("sharableLink").style.visibility = "visible";
    document.getElementById("timer").style.width="0";
    document.getElementById("timer").style.height="0";

    // Form elements
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("mins").value;
    var seconds = document.getElementById("secs").value;

    // Finding the time in future
    var currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + seconds + minutes*60 + hours *60*60); 
    console.log("Until: " + currentTime.toLocaleString());
    window.history.pushState("string", "RickAstyley", "/index.html?" + currentTime.getTime());
    updateSharableLink(window.location.href.toString());
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

function main(){
    var date = new Date();
    date.setTime(window.location.search.substr(1));
    console.log(date.toLocaleString());


    fillUpInputs();
    setTimeout(() => {
        var Rick = document.getElementById("rick").style;
    }, 2000);
}
main();