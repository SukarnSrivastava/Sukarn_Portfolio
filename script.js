var typed = new Typed('#element', {
    strings: ['Web Developer', 'Front-end developer', 'UI/UX designer', 'React.js developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,

});

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots*marked)/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i=0; i < dots; i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
    
})

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const endBtn = document.getElementById("endingButton");

endBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSelection = document.getElementById("home")
    console.log(targetSelection)
    targetSelection.scrollIntoView({
        top: targetSelection.offsetTop,
        behavior: "smooth"
      });
})