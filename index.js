const webcamVideo = document.getElementById("webcam-video");

const canvas = document.getElementById("picture");
const ctx = canvas.getContext("2d");

let photos = [];

const constraints = {
    video: {
        width: 500,
        height: 400,
    }
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    webcamVideo.srcObject = stream;
})
.catch((error) => {
    console.error(error);
    alert("Heyy, I need access to your cam so I can see your beautiful face (｡•̀ᴗ-)✧")
})

function snap(){
    canvas.width = 500;
    canvas.height = 400;
    ctx.drawImage(webcamVideo, 0, 0, canvas.width, canvas.height);
    photos.push(canvas.toDataURL("image/png"))
}

function download(){
    const imgURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "selfie.png";
    link.click();
    document.removeChild(link);
}