var app = function(){
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");
  var radius = 1; 
  var flag = false;

  canvas.addEventListener("mouseup", function(){
    console.log("Mouse Up")
    flag = false;
    return;
  })

  var getBrushShape = function(){
    var brushShapePicker = document.getElementById("brush-shape")
    return brushShapePicker.value;
  }

  canvas.addEventListener('mousemove', function(event){
      if(flag === true){
        var result = getBrushShape()
        if(parseInt(result) === 1 ){
          drawCircle(event.x, event.y, radius);
        }
        if(parseInt(result) === 2 ){
          drawSquare(event.x, event.y, radius);
        }
        if(parseInt(result) === 3 ){
          drawTriangle(event.x, event.y, radius);
        }
      
    }})

  canvas.addEventListener('mousedown', function(event){
    flag = true
    })

  var drawSquare = function(x,y,radius){
    context.fillRect(x,y, radius, radius);
  }


  // context.strokeRect(10, 100, 50, 50);

  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(100, 200);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(200, 200);
  // context.lineTo(200, 300);
  // context.lineTo(100, 300);
  // context.closePath();
  // context.stroke();

  // context.beginPath()
  // context.arc(400, 400, 35, 0, Math.PI * 2, false)
  // context.stroke()

  var drawCircle = function(x, y, radius){
    context.beginPath();
    context.arc(x, y, radius, 0,Math.PI * 2, false);
    context.fill();
  }

  


  var img = document.createElement("img");
  img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"

  // var drawDoge = function(){
  //   context.drawImage(img, 200, 200, 90, 90);
  // }

  // img.addEventListener("load", drawDoge);

  var changeColour = function(){
    context.fillStyle = this.value;
  }

  var colourPicker = document.getElementById("input-colour")
  colourPicker.addEventListener("change", changeColour);

  var changeBrushSize = function(){
     radius = this.value
  }

  var brushSizePicker = document.getElementById("brush-size")
  brushSizePicker.addEventListener("change", changeBrushSize);
}

window.addEventListener("load", app);