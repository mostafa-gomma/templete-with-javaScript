let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
	//console.log('local storage is Not empty you  can set It on Root Now');
	//console.log(localStorage.getItem("color_option"));
	
	document.documentElement.style.setProperty('--main--color', mainColors);
	
	document.querySelectorAll(".colors-list li").forEach(element => {
		
		element.classList.remove("active");
		
	if (element.dataset.color === mainColors) {
		
		element.classList.add("active");
	}
		
		
		
		
	});
	
};

let backgroundOption= true;

let backinterval;


let backgroundlocalItem =localStorage.getItem("background_option")

if (backgroundlocalItem!==null) {
	
	if(backgroundlocalItem === 'true') {
		
	
	
	backgroundOption = true;
	
} else {
	backgroundOption = false;
}
	document.querySelectorAll('.random span').forEach(element=>{
		
		element.classList.remove("active");
	});
	if(backgroundlocalItem === "true"){
		
		document.querySelector(".random .yes").classList.add("active");
		
		
	}else{
		document.querySelector(".random .no").classList.add("active");
	}


	
	
	
}








document.querySelector(".toggle-setting .fa-gear").onclick =function () {
	
	this.classList.toggle("fa-spin");
	
	document.querySelector(".settings-Box").classList.toggle("open");
};

const colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach(li=> {
	
li.addEventListener("click",(e)=> {
	
	document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
	
	localStorage.setItem("color_option",e.target.dataset.color);
	
handleActive(e);
	
});	
 
});
              
    //declear yes and no





const randomyes  = document.querySelectorAll(".random span");

randomyes.forEach(span=> {
	
span.addEventListener("click",(e)=> {
	handleActive(e);
	
	if (e.target.dataset.random === 'yes'){
		
		backgroundOption = true;
		
		randomizeimgs();
		
		localStorage.setItem("background_option",true);
		
		
	} else {
		backgroundOption = false;
		
		clearInterval(backinterval);
		
		localStorage.setItem("background_option",false);
	}
	
	
});	
 
});





let landingPage = document.querySelector(".landing-page");


let imgsArray = [ "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];





function randomizeimgs() {

	if (backgroundOption === true) {
	
backinterval = setInterval(()=> {
	
	let randomNumber = Math.floor(Math.random() * imgsArray.length);
	
	landingPage.style.backgroundImage = 'url("image/' + imgsArray[randomNumber] + '")';
	
	}, 2000);
	}
	
}
randomizeimgs();	

	
	
	//select skill
let ourSkill = document.querySelector(".skill");

window.onscroll = function () {
	
	//offset Top 
	let skilloffsetTop = ourSkill.offsetTop;
	

	
	//outer Height
	let skillouterHeight = ourSkill.offsetHeight;
	

	
	
	//window Height
	let skillwindow = this.innerHeight;
	
	
	//windowscrolltop
	let windowscrollTop = this.pageYOffset;
	
	
if (windowscrollTop  > (skilloffsetTop + skillouterHeight - skillwindow)) {
		
		
		let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
		
		allSkills.forEach(skill => {
			
			skill.style.width = skill.dataset.progress;
			
		});
	}
 };	


//create popup with the image 
let ourGallery = document.querySelectorAll(".gallary img ");

ourGallery.forEach(img => {
	img .addEventListener('click',(e)=> {
		let overlay = document.createElement('div');
		
		overlay.className ='popup-overlay';
		
		document.body.appendChild(overlay);
		
	let popupBox = document.createElement('div');
		
		popupBox.className = 'popup-box'
		
		if (img.alt !== null) {
			
			let imgHeading = document.createElement('h2');
			
			let imgText = document.createTextNode(img.alt);
			
			imgHeading.appendChild(imgText);
			
			popupBox.appendChild(imgHeading);
			
			
		}
		
		let popupImage = document.createElement('img');
		
		popupImage.src = img.src;
		
		popupBox.appendChild(popupImage);
		
		document.body.appendChild(popupBox);
		
		let closeButton = document.createElement('span');
		
		let closeText =document.createTextNode('X');
		
		closeButton.appendChild(closeText);
		
		closeButton.className = 'close-button';
		
		popupBox.appendChild(closeButton);
		
		});
	});


document.addEventListener('click', function (e) {
	
	if (e.target.className =='close-button') {
		
		e.target.parentNode.remove();
		
		document.querySelector('.popup-overlay').remove();
	}
	
});


//selsct AllBullets

const allBullets =document.querySelectorAll(".nav-bullets .bullet");

const allllinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {
	
	
elements.forEach(ele => {
	
	
	ele.addEventListener("click",(e) => {
		e.preventDefault();
		
		document.querySelector(e.target.dataset.section).scrollIntoView({
			
			behavior: 'smooth'
		});
		
		
		
	});
	
	
	
	
	
});

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContent = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
	
	bulletsSpan.forEach(span => {
		
		span.classList.remove("active");
	});
	
	if( bulletLocalItem ==='block') {
		
		bulletsContent.style.display = 'block';
		document.querySelector(".bullets-option .yes").classList.add("active");
		
	} else {
		bulletsContent.style.display = 'none';
		document.querySelector(".bullets-option .no").classList.add("active");
		
	}
	
	
	
}











bulletsSpan.forEach(span => {
	
	span.addEventListener('click', (e)=> {
		
		if (span.dataset.display ==='show') {
			
			bulletsContent.style.display = 'block';
			
			localStorage.setItem("bullets-option",'block');
		
		} else{
			
			bulletsContent.style.display = 'none';
			localStorage.setItem("bullets-option",'none');
			
		}
		
		handleActive(e);
		
		
		
		
		
		
  });
	
	
});


document.querySelector(".reset-button").onclick = function () {
	
	
	localStorage.clear();
	
	//localStorage.removeItem("option-box");
	//localStorage.removeItem("background-option");
	//localStorage.removeItem("bullets-option");
	
	
	window.location.reload();
	
	
	
};



















scrollToSomewhere(allBullets);

scrollToSomewhere(allllinks);



//Handle Active state 

function handleActive(ev) {
	
	ev.target.parentElement.querySelectorAll('.active').forEach(element => {
	
	element.classList.remove("active");
		
	});
	
	ev.target.classList.add("active");
	}



let toggleBtn = document.querySelector(".toggle-menu");
let thelinks  =document.querySelector(".links");

toggleBtn.onclick = function (e) {
	
	e.stopPropagation();
	
	this.classList.toggle("menu-active");
	
	thelinks.classList.toggle("open");
	
	
};

document.addEventListener("click", (e) => {
	
	if (e.target !== toggleBtn &&e.target !== thelinks) {
		if (thelinks.classList.contains("open")) {
		toggleBtn.classList.toggle("menu-active");
	    thelinks.classList.toggle("open");
			}
	}
	
	
});
thelinks.onclick =function (e){
	e.stopPropagation();
	
}






















	
	
	



















