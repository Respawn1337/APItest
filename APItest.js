var url = 'http://api.open-notify.org/iss-now.json';
var img_path = 'Mercator_projection_SW.jpg';

var canvas, ctx, img;

function setup() {
    canvas = document.getElementById('imgCanvas');
    ctx = canvas.getContext('2d');
    img = new Image();

    loadImage();
    }
    
 function getData(){
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var iss_position = JSON.stringify(myJson.iss_position);
            lat = myJson.iss_position.latitude;
            long = myJson.iss_position.longitude;
            // console.log(lat+','+' '+long)

            updateCanvas();
            updateCanvasPlot(lat, long, 1, 1, "red", 8);
        });
  }

  function loadImage() {

    createImage();

	function createImage() {
		img = new Image();
		img.onload = imageLoaded;
		img.src = img_path;
	}

	function imageLoaded() {
        updateCanvas();
		//alert(canvas.toDataURL("image/png"));
		
        setInterval(function () { getData(); }, 1500);
	}
}

function updateCanvas() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);
}
function updateCanvasPlot(lat, long, height, width, color, size) {
    //calculate coradinates
    //Latitude measures X-asis, Longitude measures Y-axis
    y = (((parseFloat(lat) + 90) / 180) * img.height);
    x = (((parseFloat(long) + 180) / 360) * img.width);

    console.log("x:" + x + " y:" + y);

    //Save plot
    ctx.beginPath();
	ctx.rect(x,y,height,width);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
}

window.onload = setup;