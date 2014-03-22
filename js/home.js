/* This script will be executed only on the Home screen (see data/app.xml). */

var audio = document.querySelector("audio");
var img = this.querySelector("img");

this.addEventListener(Savvy.READY, function(){
    console.log("ready");
	// fired when the "ready" event is published to the Home screen
	window.addEventListener("resize", scalePirateImage);
	this.querySelector("#version").innerHTML = config.version;
	scalePirateImage();
	setPirateImageOpacity();
});

this.addEventListener(Savvy.ENTER, function(){
        console.log("enter");

	// fired when the "enter" event is published to the Home screen
	img.onclick = playPause;
	img.animate("tada");
	if (typeof audio.paused == "boolean") {
		img.style.cursor = "pointer";
	}
});

this.addEventListener(Savvy.EXIT, function(e){
    
        console.log("exit");

	// fired when the "exit" event is published to the Home screen
	window.removeEventListener("resize", scalePirateImage);
});

function scalePirateImage(){
	var height = document.body.getBoundingClientRect().height;
	height -= parseInt(window.getComputedStyle(Home.querySelector("h1")).height);
	height -= parseInt(window.getComputedStyle(Home.querySelector("button")).height) * 3;
	img.style.height = height + "px";
}

function playPause(){
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
	
	setPirateImageOpacity();
}

function setPirateImageOpacity(){
	img.style.opacity = (audio.paused) ? 0.25 : 1;
}