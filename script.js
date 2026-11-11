
// 1. Select Navigation Links

let navLinks = document.querySelectorAll("nav ul li a");


// 2. Smooth Scrolling

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        let section = document.querySelector(
            link.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// 3. Highlight Active Navigation Link

window.addEventListener("scroll", function() {

    let sections = document.querySelectorAll("section");

    sections.forEach(function(section) {

        let top = section.offsetTop - 100;

        let bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {

            navLinks.forEach(function(link) {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + section.id) {

                    link.classList.add("active");

                }

            });

        }

    });

});


// 4. Create Back To Top Button

let topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);


// Show and Hide Back To Top Button

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


// Back To Top Function

topButton.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// 5. Automatically Update Copyright Year

let footer = document.querySelector("footer p");

footer.innerHTML = "Copyright &copy; " +
    new Date().getFullYear() +
    " MyPortfolio. All Rights Reserved.";
