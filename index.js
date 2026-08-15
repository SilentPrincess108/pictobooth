const webcamVideo = document.getElementById("webcam-video");

navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
    webcamVideo.srcObject = stream;
}).catch((error) => {
    console.error(error);
    //add error pop up window
})