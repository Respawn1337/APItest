var url = 'http://api.open-notify.org/iss-now.json';
var img = 'Mercator_projection_SW.jpg';


function setup() {
    // loadJSON('http://api.open-notify.org/iss-now.json', gotData);
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var iss_position = JSON.stringify(myJson.iss_position);
            lat = myJson.iss_position.latitude;
            long = myJson.iss_position.longitude;
            console.log(lat+','+' '+long)
        });

    // createCanvas(1600, 1400);
    // ctx.drawImage(img)
    
}

/* function gotData(data){
    console.log(data);
    //issX = "iss_position".latitude;
    //issY = "iss_position".longitude;
    //console.log(issX +' ' +','+' '+ issY);
    
}

function draw() {
    background(img);
    ellipse(issX, issY, 24, 24);
}
*/
setInterval(function () { setup(); }, 3000);