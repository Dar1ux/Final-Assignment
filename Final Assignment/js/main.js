function changeColor(event) {
    var h1 = document.getElementsByTagName('h1');
    var x = Math.floor(event.clientX / 10);
    var r = 255 - x;
    var g = 192 - x;
    var b = 203 - x;
    //h1[0].innerHTML = "rgb(" + r + "," + g + "," + b + ")";
    //h1[0].innerHTML = 'rgb(' + toString(r) + ',' + toString(g) + ',' + toString(b);
    h1[0].style.color = "rgb(" + r + "," + g + "," + b + ")";
    
    
}
setInterval(changeColor('red'), 2000);
setInterval(changeColor('blue'),2000);