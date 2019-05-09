var fwd = function fwd(){
    if(window.vdo.duration){
        window.barDuration = parseFloat(window.bar.style.animationDuration.slice(0,-1));
        window.ie.getElementsByTagName('video')[0].currentTime+=5;
        var id = setInterval(frame, 0);
        mw = 0;
        function frame() {
          if (mw >= 100) {
            clearInterval(id);
            window.bar.style.animationDuration = 0 +'s';
          } else {

            var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage
            window.bar.style.minWidth = cp + '%'; 
            mw=cp;
          }
        }
    }
}
