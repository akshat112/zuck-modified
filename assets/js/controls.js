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





var fwd = function fwd(){
    if(window.vdo.duration){
        var ctime = window.vdo.currentTime;
        console.log(ctime);
        window.ie.getElementsByTagName('video')[0].currentTime+=5;
        // console.log(window.count)
        // window.count+=5;
        // console.log(window.count);
        var nc = parseFloat(window.bar.style.animationDuration.slice(0,-1))-5;
        nc = nc + "s";
        window.bar.style.animationDuration=nc;
        // var complete = window.count/window.barDuration;
        // var incBy = 5/window.barDuration;
        // var complete = complete + incBy;
        // var completeP = complete + "%";
        // window.bar.style.width=completeP;
    }
}