var id = document.getElementById("box");

document.getElementById("button1").addEventListener("click", function(){
     
     var boxHeight = window.getComputedStyle(id, null).getPropertyValue("height");
     var boxWidth = window.getComputedStyle(id, null).getPropertyValue("width");
     
     currentHeight = parseInt(boxHeight);
     currentWidth = parseInt(boxWidth);
     
     id.style.height = (currentHeight + 10) + 'px';
     id.style.width = (currentWidth + 10) + 'px';
     

});

document.getElementById("button2").addEventListener("click", function(){
     
    var boxHeight = window.getComputedStyle(id, null).getPropertyValue("height");
    var boxWidth = window.getComputedStyle(id, null).getPropertyValue("width");
    
    currentHeight = parseInt(boxHeight);
    currentWidth = parseInt(boxWidth);
    
    id.style.height = (currentHeight - 10) + 'px';
    id.style.width = (currentWidth - 10) + 'px';
    

});

document.getElementById("button3").addEventListener("click", function(){

    id.style.backgroundColor = 'blue';

});

document.getElementById("button4").addEventListener("click", function(){

    var boxOpacity = window.getComputedStyle(id, null).getPropertyValue("opacity");

    currentOpacity = parseFloat(boxOpacity);
    id.style.opacity = (currentOpacity - 0.1);

});

document.getElementById("button5").addEventListener("click", function(){

    var boxOpacity = window.getComputedStyle(id, null).getPropertyValue("opacity");

    currentOpacity = parseFloat(boxOpacity);
    id.style.opacity = (currentOpacity + 0.1);

});

document.getElementById("button6").addEventListener("click", function(){

    id.style.height = "150px";
    id.style.width = "150px";
    id.style.backgroundColor = "orange";
    id.style.opacity = "1.0"
    
});