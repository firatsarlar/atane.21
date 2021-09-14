export default function generateNoise(selector, opacity) {
    if ( !!!document.createElement('canvas').getContext ) {
       return false;
    }
  
    var canvas = document.createElement("canvas"),
    ctx = canvas.getContext('2d'),
    x, y,
    number,
    opacity = opacity || .2;
  
    canvas.width = 145;
    canvas.height = 145;
  
    for ( x = 0; x < canvas.width; x++ ) {
       for ( y = 0; y < canvas.height; y++ ) {
          number = Math.floor( Math.random() * 60 );
  
          ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
          ctx.fillRect(x, y, 1, 1);
       }
    }
    let bgImg = document.querySelector(selector).style.backgroundImage;
    
    
    if (
        //document.attachEvent ? document.readyState === "complete" : 
        document.readyState !== "loading"
        ){
        // noise("#overlay",0.2);
        
        document.querySelector(selector).style.backgroundImage += "url(" + canvas.toDataURL("image/png") + ")";
        //console.log("noo");
    } else {
      document.addEventListener('DOMContentLoaded', ()=>{
        // noise("#overlay",0.2);
        
        document.querySelector(selector).style.backgroundImage += "url(" + canvas.toDataURL("image/png") + ")";
        //console.log("noo");
      });
    }
 }
 