burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightnav =document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
	rightnav.classList.toggle('visibility-class');
	navList.classList.toggle('visibility-class');
	navbar.classList.toggle('height-nav');

})