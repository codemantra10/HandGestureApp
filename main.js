var gesture1="";
var gesture2="";
Webcam.set({
height:300,
width:300,
image_format:"png",
png_quality:90,
});
Webcam.attach("webcamview");
function captureimage(){
Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML="<img src='"+data_uri+"'id='finalimage'>";
})
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dZjLPyYEz/model.json",modelLoaded);
function modelLoaded(){
console.log("MY MODEL WORKS!");
}
function identify(){
image=document.getElementById("finalimage");
classifier.classify(image,gotResult);
}
function gotResult(Error,Result){
if (Error) {
console.log(Error);
} else {
console.log(Result);
document.getElementById("e1name").innerHTML=Result[0].label; 
document.getElementById("e2name").innerHTML=Result[1].label;
gesture1=Result[0].label
gesture2=Result[1].label
if (gesture1=="Amazing") {
document.getElementById("e1").innerHTML="👌🏽";
} 
else if(gesture1=="Thumbs Up/Down"){
    document.getElementById("e1").innerHTML="👍🏽/👎🏽";
}
else if(gesture1=="Peace"){
    document.getElementById("e1").innerHTML="✌🏽";
}
}
if (gesture2=="Amazing") {
    document.getElementById("e2").innerHTML="👌🏽";
    } 
    else if(gesture2=="Thumbs Up/Down"){
        document.getElementById("e2").innerHTML="👍🏽/👎🏽";
    }
    else if(gesture2=="Peace"){
        document.getElementById("e2").innerHTML="✌🏽";
    }
}
