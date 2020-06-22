const navbarSlide = ()=>{
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar-links');
    const navbarLinks = document.querySelectorAll('.navbar-links li')
    //toggle na v
    burger.addEventListener('click',()=>{
        navbar.classList.toggle('navbar-active')

        //animate links
        navbarLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation=''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.45}s`
            }
        });
        //burger animation
        burger.classList.toggle('toggle')
    });    
}
navbarSlide();