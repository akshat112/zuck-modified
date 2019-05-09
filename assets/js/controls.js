// // Testing the width 
// var fwd = function fwd(elements){
//     if(video.duration){
//       var currentWidth = itemPointer.getElementsByTagName('b')[0].style.width;
//       currentWidth = parseInt(currentWidth.slice(0,-2));
//       console.log(currentWidth);
//       //var newWidth = currentWidth+10;
//       //console.log(newWidth);
//       setVendorVariable(itemPointer.getElementsByTagName('b')[0].style, 'width', "".concat(30));
//     }
//   }
//   fwd();

//   var query = function query(qs) {
//     return d.querySelectorAll(qs)[0];
//   };

// var modalContainer1 = query('#zuck-modal');
// var target1 = 'viewing';
// var useless1 = '';
// var transform1 = '0';
// var modalSlider1 = query("#zuck-modal-slider-".concat(id));
// var slideItems1 = {
//     previous: query('#zuck-modal .story-viewer.previous'),
//     next: query('#zuck-modal .story-viewer.next'),
//     viewing: query('#zuck-modal .story-viewer.viewing')
// };
// var currentStory1 = slideItems1[target1].getAttribute('data-story-id');
// zuck.internalData['currentStory1'] = currentStory1;
// var myStoryId = zuck.internalData['currentStory1'];
// var myItems = query("#zuck-modal [data-story-id=\"".concat(myStoryId, "\"]"));
// myItems = myItems.querySelectorAll('[data-index].active');
// var myItemElement = myItems[1];
// var myItemPointer = myItems[0];
// console.log(myItemPointer);
// //console.log(myStoryId + " - " + myItems.querySelectorAll('[data-index].active')[1].innerHTML);
/*
///////////////////////////////////////////////////////////
var fwd = function fwd(){
    // if(window.bwdflag){
    //     clearInterval(window.decrease);
    //     window.bwdflag=0;
    // }
    window.fwdflag = 1;
    if(window.vdo.duration){
        window.barDuration = parseFloat(window.bar.style.animationDuration.slice(0,-1));
        window.ie.getElementsByTagName('video')[0].currentTime+=5;
        var mw = 0; //parseFloat(window.bar.style.minWidth.slice(0,-1));
        increase = setInterval(move, 10);
        console.log(mw);
        function move() {
          if (mw >= 100) {
              clearInterval(increase);
              window.bar.style.animationDuration = 0 +'s';
            //mw=0;
          } else {
            var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage
            window.bar.style.minWidth = cp + '%'; 
            mw=cp;
            console.log(mw);
          }
        }
    }
}
/////////////////////////////////////////////////////////////
*/

// var bwd = function bwd(){
//     if(window.fwdflag){
//         clearInterval(window.increase); 
//         window.fwdflag=0;
//     }
//     if(window.vdo.duration){
//         window.barDuration = parseFloat(window.bar.style.animationDuration.slice(0,-1));
//         window.ie.getElementsByTagName('video')[0].currentTime-=5;
//         var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage
//             window.bar.style.minWidth = cp + '%';
//     }

// }

// var bwd = function bwd(){
//     if(window.fwdflag){
//         clearInterval(window.increase);
//         window.fwdflag=0;
//     }
//     window.bwdflag = 1;
//     if(window.vdo.duration){
//         window.barDuration = parseFloat(window.bar.style.animationDuration.slice(0,-1));
//         window.ie.getElementsByTagName('video')[0].currentTime-=5;
//         window.decrease = setInterval(move, 10);
//         var mw = 0; //parseFloat(window.bar.style.minWidth.slice(0,-1));
//         console.log(mw);
//         function move() {
//           if (mw <= 0) {
//             clearInterval(window.decrease);
//             // window.bar.style.animationDuration = 0 +'s';
//           } else {
//             var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage
//             window.bar.style.minWidth = cp + '%'; 
//             mw=cp;
//             console.log(mw);
//           }
//         }
//     }
// }

/*
var fwd = function fwd(){
    if(window.vdo.duration){
        // var ctime = window.vdo.currentTime;
        // console.log(ctime);
        // console.log("Bar duration: " + window.bar.style.animationDuration)
        window.barDuration = parseFloat(window.bar.style.animationDuration.slice(0,-1));
        // var complete = ctime/window.barDuration;
        window.ie.getElementsByTagName('video')[0].currentTime+=5;
        // ctime = window.ie.getElementsByTagName('video')[0].currentTime;
        // console.log("New current time: " + ctime);
        // var newCompleted = (ctime/window.barDuration)*100;
        // console.log("New completed: " + newCompleted);
        // var remainingPercentage = 100-newCompleted;
        // var remainingTime = window.barDuration-window.ie.getElementsByTagName('video')[0].currentTime;
        // console.log("Rt: " + remainingTime);

        // var blah = remainingPercentage/remainingTime/100;
        // console.log("blah: " + blah);
        
        // console.log(window.count)
        // window.count+=5;
        // console.log(window.count);
        
        
        // var incBy = ctime/window.barDuration;
        // console.log("Incby: " + complete);
        // var complete = (complete + incBy)*100;
        // console.log("complete New: " + complete);
        
        // var completeP = newCompleted + "%";
        // console.log("complete %: " + completeP);
        // window.bar.style.minWidth=completeP;

        var id = setInterval(frame, 10);
        mw = parseFloat(window.bar.style.minWidth.slice(0,-1));
        //var widthIncrease = 
        function frame() {
          if (mw >= 100) {
            clearInterval(id);
            window.bar.style.animationDuration = 0 +'s';
          } else {

            var cp = window.ie.getElementsByTagName('video')[0].currentTime/window.barDuration*100; //current percentage

            // mw+=blah; 
            window.bar.style.minWidth = cp + '%'; 
            mw=cp;
            // console.log("in Interval: "+ mw+"%")
          }
        }




        // window.bar.style.animationDuration = remainingTime + 's';

        // var nc = parseFloat(window.bar.style.animationDuration.slice(0,-1))-5;
        // nc = nc + "s";
        // window.bar.style.animationDuration=nc;

        // window.bar.style.animationPlayState=running;
        // window.bar.style.webkitAnimationPlayState=running;

        
        // window.bar.style.webkitAnimation = 'none';
        // window.bar.style.animation = 'none';
        // setTimeout(function(){
        //     window.bar.style.webkitAnimation = 'zuckSlideTime';
        //     window.bar.style.animation = 'zuckSlideTime';
        // }, 100);

    }
} */



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

            // mw+=blah; 
            window.bar.style.minWidth = cp + '%'; 
            mw=cp;
            // console.log("in Interval: "+ mw+"%")
          }
        }
    }
}
