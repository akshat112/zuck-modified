var traverse = function traverse(pos){
    window.bar = document.querySelector("div.viewing>div.slides-pointers>div>span.active").getElementsByTagName("b")[0];
    clearInterval(window.increase);
    
    // If forward button pressed
    if(pos=='fwd'){
        if(window.vdo.duration){
            window.barDuration = window.ie.getElementsByTagName('video')[0].duration;
            window.ie.getElementsByTagName('video')[0].currentTime+=5;
            window.increase = setInterval(movefwd, 0);
            var mw = 0;
            function movefwd() {
              if (mw >= 100) {
                clearInterval(window.increase);

                window.bar.style.animationDuration = window.vdo.duration +'s';
                window.zuckObj.nextItem(false);
              } else {
                var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.ie.getElementsByTagName('video')[0].duration*100; //current percentage
                window.bar.style.minWidth = cp + '%'; 
                mw=cp;
              }
            }
        }

// If backward button pressed
    } else if(pos=='bwd'){
        

        $("#btn").hide(function(){
            setTimeout(function(){
                $("#btn").show();
            },5000)
        });


        window.barDuration = window.ie.getElementsByTagName('video')[0].duration;
        var ct = window.ie.getElementsByTagName('video')[0].currentTime;
        if(ct>5){

            // if((ct - window.prevLoc) < 5){
            //     console.log("Blah log: "+ (ct - window.prevLoc));
            //     console.log("Prev loc: " + window.prevLoc);
            //     console.log(window.ie.getElementsByTagName('video')[0].currentTime - window.prevLoc)
            //     var increment = Math.abs(5-(5-(window.prevLoc - window.ie.getElementsByTagName('video')[0].currentTime)));
            // } else{
            //     var increment = 5;
            // }

            window.ie.getElementsByTagName('video')[0].currentTime = ct - 5;
            //window.prevLoc = window.ie.getElementsByTagName('video')[0].currentTime;
            window.bar = document.querySelector("div.viewing>div.slides-pointers>div>span.active").getElementsByTagName("b")[0];

            window.bar.style.animationDuration = (parseFloat(window.bar.style.animationDuration.slice(0,-1)) + 5) + 's';
            console.log("AD: " + window.bar.style.animationDuration);
            window.increase = setInterval(movefwd, 0);
            var mw = 0;
            function movefwd() {
                if (mw >= 100) {
                    clearInterval(window.increase);
                    // window.bar.style.animationDuration = window.vdo.duration +'s';
                    window.zuckObj.nextItem(false);
                } else {
                    var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.ie.getElementsByTagName('video')[0].duration*100; //current percentage
                    window.bar.style.minWidth = cp + '%';
                    window.bar.style.width = cp + '%';
                    // window.bar.style.animationDuration = window.ie.getElementsByTagName('video')[0].duration + 's';
                    mw=cp;
                }
            }
        }
        else{
            // Removing the existing bar from the dom and adds a new bar with animation duration equal to video duration
            window.ie.getElementsByTagName('video')[0].currentTime = 0.00001;
            var pspan = document.querySelector("div.viewing>div.slides-pointers>div>span.active");
            var theBar = pspan.getElementsByTagName("b")[0];
            pspan.removeChild(theBar);
            console.log(theBar);
            var bTag = "<b style='animation-duration: "+ window.vdo.duration +"s'>";
            pspan.innerHTML=bTag;

            // Switch to next story when animation ends
            $("div.viewing>div.slides-pointers>div>span.active>b").bind('oanimationend animationend webkitAnimationEnd', function() { 
                window.zuckObj.nextItem(false); 
             });
        }

    }
}

// Pause button toggle
var togglePause = function togglePause(){
    var viewing = document.querySelector(".viewing");
    viewing.classList.toggle("paused");
    if(window.vdo.paused){
        window.vdo.play();
    } else{
        window.vdo.pause();
    }
}