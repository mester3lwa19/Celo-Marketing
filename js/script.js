/* animation on scrolling */
const observer = new IntersectionObserver((entires)=> {
    entires.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
        else {
            entry.target.classList.remove("show");

        }
    })
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));


/* scroll to sections */
let navHome =  document.getElementById("nav-home");
let navServices = document.getElementById("nav-services");
let navAbout = document.getElementById("nav-about");
let Naveager = document.getElementById("nav-eager");
navHome.addEventListener("click", ()=> {
    window.scrollTo(0,0)
})

navServices.addEventListener("click", ()=> {
    window.scrollTo(0,720)
})
navAbout.addEventListener("click", ()=> {
    window.scrollTo(0,1750)
})
Naveager.addEventListener("click", ()=> {
    window.scrollTo(0,3420)
})

/* two language */
let welcome = document.getElementById("welcome"),
    HeroP = document.getElementById("hero-p")












// /* active navlink on scroll */
// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll("nav a");
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");
        
//         if(top >= offset && top < offset + height) {
//             navlinks.forEach(links => {
//                 links.classList.remove("self-active");
//                 document.querySelector('nav a[href*=' + id + ']').classList.add("self-active");
//             })
//         }
//     })
// }