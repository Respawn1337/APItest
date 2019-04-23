var url = 'http://api.open-notify.org/iss-now.json';
var img = 'Mercator_projection_SW.jpg';



function setup() {
    createCanvas(1600, 1400);
   /* ctx.drawImage(img)*/
    loadJSON(url, getData, 'jsonp');
}

/*function setup() {
    
}*/

function getData(data) {
    var lat = 'data.iss_position.latitude';
    var long = 'data.iss_position.longitude';
    issX = map(lat, -45, 90, 0, width);
    issY = map(long, -90, 90, 0, height);

}

function draw() {
    background(img);
    ellipse(issX, issY, 24, 24);


}

setInterval(function () { getData(); }, 3000);


