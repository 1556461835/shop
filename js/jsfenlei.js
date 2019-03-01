let leftBox = document.querySelector(".si");
let rightBox = document.querySelector(".si-rg");
let rightS = document.querySelectorAll(".si-rg>div");
let leftS = document.querySelectorAll(".si div");
// let box = document.querySelector(".middle")
let root = document.documentElement;
// console.log(box.offsetHeight)
// let maxscrolltop = rightBox.offsetHeight - box.offsetHeight
let steep = 5;
console.log(leftS)
leftS.forEach(function(val,index){
	val.onclick = function(){
		leftS.forEach(function(ele){
			ele.classList.remove("active")
		})
		val.classList.add("active")
// 		if(rightBox.scrollTop>rightS[index].offsetTop){
// 			steep = -60;
// 		}else {
// 			steep = 15;
// 		}
		
		let time = setInterval(function(){
			if(rightBox.scrollTop /* + steep */>=rightS[index].offsetTop /* && steep>0 */){
				rightBox.scrollTop = rightS[index].offsetTop
				clearInterval(time)
			}else if(rightBox.scrollTop /* + steep */<=rightS[index].offsetTop /* && steep<0 */){
				rightBox.scrollTop=rightS[index].offsetTop
				clearInterval(time)
			}/* else if(maxscrolltop<=rightBox.scrollTop && steep>0){
				clearInterval(time)
			} */else{
				rightBox.scrollTop = rightBox.scrollTop + steep;
			}
		},100)
		
	}
})
rightBox.onscroll = function(){
	rightS.forEach(function(val,index){
		if(rightBox.scrollTop>=val.offsetTop && rightBox.scrollTop < val.offsetTop+val.offsetHeight){
			leftS[index].classList.add("active")
		}else{
			leftS[index].classList.remove("active")
		}
	})
}