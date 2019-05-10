window.orig = 0;
var traverse = function traverse(pos){
    window.bar = document.querySelector("div.viewing>div.slides-pointers>div>span.active").getElementsByTagName("b")[0];
    if(window.orig==0){
        window.orig = parseInt(window.bar.style.animationDuration.slice(0,-1)); //original duration
    }
    clearInterval(window.increase);
    if(pos=='fwd'){
        if(window.vdo.duration){
            window.bar.style.animationDuration = window.orig + 's';
            window.barDuration = parseFloat(window.bar.style.animationDuration.slice(0,-1));
            window.ie.getElementsByTagName('video')[0].currentTime+=5;
            window.increase = setInterval(movefwd, 0);
            var mw = 0;
            function movefwd() {
              if (mw >= 100) {
                clearInterval(window.increase);
                window.bar.style.animationDuration = 0 +'s';
              } else {
                var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage
                window.bar.style.minWidth = cp + '%'; 
                mw=cp;
              }
            }
        }


    } else if(pos=='bwd'){
        // clearInterval(window.increase);
        var ct = window.ie.getElementsByTagName('video')[0].currentTime;
        if(ct>5){
            window.ie.getElementsByTagName('video')[0].currentTime = ct - 5;
            window.bar.style.animationDuration = (parseInt(window.bar.style.animationDuration.slice(0,-1)) + 5) + 's';
            // window.bar.style.animationDuration = 999999 +'s';
            window.increase = setInterval(movefwd, 0);
            var mw = 0;
            function movefwd() {
                if (mw >= 100) {
                    clearInterval(window.increase);
                    window.bar.style.animationDuration = 0 +'s';
                } else {
                    var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage
                    // window.bar.style.minWidth = 0.00001 + '%';
                    window.bar.style.minWidth = 0 + '%';
                    window.bar.style.width = cp + '%';
                    mw=cp;
                }
            }
        } 
        else{
            // window.bar.style.animationDuration = (parseInt(window.bar.style.animationDuration.slice(0,-1)))+window.ie.getElementsByTagName('video')[0].currentTime + 's';
            window.ie.getElementsByTagName('video')[0].currentTime = 0.00001;
            // window.nextTimeout = setTimeout(function(){
            //     window.zuckObj.nextItem(false);
            // }, window.vdo.duration*1000)
            var pspan = document.querySelector("div.viewing>div.slides-pointers>div>span.active");
            var theBar = pspan.getElementsByTagName("b")[0];
            pspan.removeChild(theBar);
            console.log(theBar);
            var bTag = "<b style='animation-duration: "+ window.vdo.duration +"s'>";
            // var bTag = "<b style='"+ window.durStyle.style.cssText +"'>";
            pspan.innerHTML=bTag;


            $("div.viewing>div.slides-pointers>div>span.active>b").bind('oanimationend animationend webkitAnimationEnd', function() { 
                window.zuckObj.nextItem(false); 
             });
        }

    }
}

var togglePause = function togglePause(){
    var viewing = document.querySelector(".viewing");
    viewing.classList.toggle("paused");
    if(window.vdo.paused){
        window.vdo.play();
    } else{
        window.vdo.pause();
    }
}

// var fwd = function fwd(){
//     if(window.vdo.duration){
//         window.barDuration = parseFloat(window.bar.style.animationDuration.slice(0,-1));
//         window.ie.getElementsByTagName('video')[0].currentTime+=5;
//         var id = setInterval(frame, 0);
//         mw = 0;
//         function frame() {
//           if (mw >= 100) {
//             clearInterval(id);
//             window.bar.style.animationDuration = 0 +'s';
//           } else {

//             var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage
//             window.bar.style.minWidth = cp + '%'; 
//             mw=cp;
//           }
//         }
//     }
// }
