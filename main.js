peter_pan_song="";
harry_potter_theme_song="";
leftWrist_x="0";
leftWrist_y="0";
rightWrist_x="0";
rightWrist_y="0";

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0 , 0 ,380, 380);
}
function preload(){
    peter_pan_song=loadSound("music2.mp3");
    harry_potter_theme_song=loadSound("music1.mp3");
} 
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist_x;
        leftWrist_y = results[0].pose.leftWrist_y;
        console.log("leftWrist_x = "+leftWrist_x+"leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist_x;
        rightWrist_y = results[0].pose.rightWrist_y;
        console.log("rightWrist_x = "+rightWrist_x+"rightWrist_y = "+rightWrist_y);
    }
}