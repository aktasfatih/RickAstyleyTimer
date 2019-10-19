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

}

function updateTimer(h, m, s){
    document.getElementById("demo").innerHTML =  h + "h "
    + m + "m " + s + "s ";
}

function startTimer(){
    document.getElementById("timer").style.visibility="hidden";
    document.getElementById("sharableLink").style.visibility = "visible";
    document.getElementById("timer").style.width="0";
    document.getElementById("timer").style.height="0";

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
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

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML =  hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
        //   clearInterval(x);
        //   document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function main(){
    fillUpInputs();

}
main();