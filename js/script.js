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
// hiddenElements.forEach((el)=> {
//     el.addEventListener("mouseover",(el) => {
//         el.target.classList.toggle(".hidden");
//         el.target.classList.toggle(".show");
//         el.target.classList.toggle(".element");
//     })
// });
