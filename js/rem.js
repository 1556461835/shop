let width = window.innerWidth;
if(width>640){
	width = 640;
}
let fontSize = width/1080*100;

document.querySelector("html").style.fontSize = fontSize+"px";