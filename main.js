img="";
status1="";
objects=[];

function modelLoaded(){

    console.log("Model Loaded");
    status1=true;

}

function gotResult(error,results){

if(error){

    console.log(error);
    
}

else{

console.log(results);
objects=results;

}

}

function setup(){

    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status1:detectingObjects";

}

function preload(){


}

function draw(){

    image(video, 0, 0, 380, 380);
    if(status1!=""){
    objectDetector.detect(video, gotResult);
        r=random(255);
        g=random(255);
        b=random(255);
        for(i=0;i<objects.length;i++){

            document.getElementById("status").innerHTML = "status:objectDetected";
            document.getElementById("number_of_objects").innerHTML ="Baby Detected:"+objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);

            text(objects[i].label+" "+percent+"%",objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        
        }

    }

}



