/*====================================================
        Cloud Portfolio JavaScript
        Author : Ambati Mokesh Reddy
=====================================================*/


// =====================================
// LOADER
// =====================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.6s";

});


// =====================================
// STICKY HEADER
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.classList.toggle("active");

});


// =====================================
// CLOSE MENU AFTER CLICK
// =====================================

document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});



// =====================================
// ACTIVE NAVIGATION
// =====================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});




// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});




// =====================================
// TYPING EFFECT
// =====================================

const roles = [

    "Cloud Engineer",

    "Azure Engineer",

    "Terraform Engineer",

    "DevOps Engineer",

    "Site Reliability Engineer"

];

let roleIndex = 0;

let charIndex = 0;

let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();




// =====================================
// COUNTER ANIMATION
// =====================================

const counters = document.querySelectorAll(".stat-card h2");

const speed = 100;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                setTimeout(update, 25);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const statsSection = document.querySelector(".stats");

if (statsSection) {

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

    observer.observe(statsSection);

}




// =====================================
// SCROLL REVEAL
// =====================================

const revealElements = document.querySelectorAll(

    ".about,.education,.experience,.skills,.projects,.github,.certifications,.contact,.timeline"

);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();




// =====================================
// PROJECT FILTER
// =====================================

const filterButtons = document.querySelectorAll(".project-filter button");

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        filterButtons.forEach(button => {

            button.classList.remove("active");

        });

        btn.classList.add("active");

    });

});




// =====================================
// CONTACT FORM
// =====================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}




// =====================================
// SCROLL TO TOP BUTTON
// =====================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




// =====================================
// CURRENT YEAR
// =====================================

const year = document.querySelector(".year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}




// =====================================
// CONSOLE MESSAGE
// =====================================

console.log("%cWelcome Recruiter 👋", "color:#38bdf8;font-size:24px;font-weight:bold;");

console.log("%cDesigned & Developed by Ambati Mokesh Reddy", "color:#22c55e;font-size:16px;");

console.log("%cCloud Engineer | Azure | AWS | Terraform | DevOps", "color:white;font-size:14px;");



//=====================================
// PROJECT MODAL
//=====================================

const moreButtons = document.querySelectorAll(".more-btn");
const modals = document.querySelectorAll(".project-modal");
const closeButtons = document.querySelectorAll(".close");

// Open Modal

moreButtons.forEach(button=>{

button.addEventListener("click",()=>{

const modalID = button.dataset.modal;

document.getElementById(modalID).classList.add("active");

});

});

// Close Button

closeButtons.forEach(close=>{

close.addEventListener("click",()=>{

close.parentElement.parentElement.classList.remove("active");

});

});

// Click Outside

window.addEventListener("click",(e)=>{

modals.forEach(modal=>{

if(e.target===modal){

modal.classList.remove("active");

}

});

});

// ESC Key

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modals.forEach(modal=>{

modal.classList.remove("active");

});

}

});