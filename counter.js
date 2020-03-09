var targetDate = new Date("April 01,2020 13:00:00").getTime();

var x = setInterval(function(){
    var todayDate = new Date().getTime();

    var distance = targetDate - todayDate; //dist is in miliseconds
    
    var days = Math.floor(distance/(1000*24*60*60));
    var hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(distance % (1000*60*60)/(1000*60));
    var seconds = Math.floor(distance % (1000*60)/(1000));
     
    document.getElementById('days').innerHTML = days ;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    //document.getElementById('timer').innerHTML = days + " days " + hours +" hours "+ minutes + " mins " + seconds + " seconds";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }


},1000)


