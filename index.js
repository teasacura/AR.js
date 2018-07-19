document.documentElement.requestFullscreen();

//  AFRAME.registerComponent('markerhandler', {
//     init: function () {{
//
//     // Set up the tick throttling. Will check if marker is active every 500ms
//     this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
//   },
//
//   tick: function(t, dt) {
//
//     if (document.querySelector("#barcode-01").object3D.visible == true) {
//       console.log("MARKER IS PRESENT")
//
//   		let scene = document.querySelector('#a-scene');
//   	  let AR-Object01 = document.querySelector('#box-01');
//     	// AR-Object02 = document.querySelector('#Object02');
//       // AR-VideoScreen =  document.querySelector('#videoScreen');
//
//       AR-Object01.addEventListener('click', function () { console.log("box-01 clickable in AR") });
//       // AR-Object02.addEventListener('click', function () { console.log("object02 clickable in AR") });
//       // videoScreen.addEventListener('click', function () { playPauseVideo(); console.log("Video Play Toggle") });
//       // playing = true;
//
//     }
//
//     }else {
//       console.log("No Marker");
//     }
//
// });
//
// });





//
// AFRAME.registerComponent('markerhandler', {
//     init: function () {{
//
//     // Set up the tick throttling. Will check if marker is active every 500ms
//     this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
//   },
//
//   tick: function(t, dt) {
//
//     if (document.querySelector("#hiroMarker").object3D.visible == true && playing == false) {
//       // MARKER IS PRESENT
//       //alert("MARKER IS PRESENT")
//
//   		scene = document.querySelector('#a-scene');
//   	  AR-Object01 = document.querySelector('#Object01');
//     	AR-Object02 = document.querySelector('#Object02');
//       AR-VideoScreen =  document.querySelector('#videoScreen');
//
//       AR-Object01.addEventListener('click', function () { console.log("object01 clickable in AR") });
//       AR-Object02.addEventListener('click', function () { console.log("object02 clickable in AR") });
//       videoScreen.addEventListener('click', function () { playPauseVideo(); console.log("Video Play Toggle") });
//       playing = true;
//
//     }
//
//     }else {
//       // MARKER IS HIDDEN, do nothing (up to you)
//     }
//
// });
//
// function playPauseVideo(){
//
// if (video.paused)
//     video.play();
//   else
//     video.pause();
// }
//   });
