var height = $('.modal').height(height);
var link = document.getElementById('link');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
link.onclick = function() {
    modal.style.display = "block";
    $('.page').css('filter', 'blur(10px)');
}
span.onclick = function() {
    modal.style.display = "none";
     $('.page').css('filter', 'blur()');
}

window.onclick = function(event) {
    if(event.target==modal) {
        this.modal.style.display = "none";
    }
}

var height = $('.open').height(height);
var orbita = document.getElementById('orbita');
var open = document.getElementById('myOpen');
var exit = document.getElementsByClassName('exit')[0];
orbita.onclick = function() {
    open.style.display = "block";
    $('.page').css('filter', 'blur(10px)');
}
exit.onclick = function() {
     $('.page').css('filter', 'blur()');
    open.style.display = "none";
     
}

window.onclick = function(event) {
    if(event.target==open) {
        this.open.style.display = "none"
    }
}

var height = $('.box').height(height);
var viva = document.getElementById('viva');
var box = document.getElementById('myBox');
var out = document.getElementsByClassName('out')[0];
viva.onclick = function() {
    box.style.display = "block";
    $('.page').css('filter', 'blur(10px)');
}
out.onclick = function() {
     $('.page').css('filter', 'blur()');
    box.style.display = "none"
}

window.onclick = function(event) {
    if(event.target==box) {
        this.open.style.display = "none"
    }
}


