const navBar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector('.header .menu');
menuBtn.addEventListener('click',()=>{
    navBar.classList.toggle('show');
    menuBtn.classList.toggle('fa-close');
    menuBtn.classList.toggle('fa-bars');
});
document.onscroll = () =>{
    navBar.classList.remove('show');
    menuBtn.classList.remove('fa-close');
    menuBtn.classList.add('fa-bars')
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
};
document.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.addEventListener('load', ()=>{
    // preloader Js
    function loader(){
		const preloader = document.querySelector('.preloder');
    	preloader.classList.add('fade-out');
	}
	function fadeOut(){
		setInterval(loader, 1000);
	}
	fadeOut();
 }); 