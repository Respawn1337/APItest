var url= 'http://api.open-notify.org/iss-now.json';
var issX = 0;
var issY = 0;

function setup(){
    createCanvas (600,400);
    loadJSON(url, gotData);
}

function gotData(data){
    var lat = data.iss_position.latitude;
    var long = data.iss_position.longitude;
    issX = map(lat, -90, 90, 0, width);
    issY = map(long, -90, 90, 0, height);

}

function draw(){
    ellipse(issx, issy, 4, 4);
}

setInterval(function(){ gotData(); }, 3000);