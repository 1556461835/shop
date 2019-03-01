window.onload=function(){
	let hd_tet =document.querySelectorAll(".one li");
	let bot = document.querySelector(".two_bottom");
	hd_tet.forEach(function(val,index){
		val.onclick = function(){
			bot.style.left = -100*index + "vw";
			hd_tet.forEach(function(ele,Key){
				hd_tet[Key].classList.remove("active");
			});
			hd_tet[index].classList.add("active");
		}
	});
}