        window.addEventListener('scroll', function () {
            let header = document.querySelector('header');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
        })

        //---------------------------BURGER MENU---------------------//

        //Const er som var, bare uden at kunne ændre på parametrene. (block scope)
        // () => er shortcode og kalder funktionen [function()]
        const navSlide = () => {
            const burger = document.querySelector(".burger");
            const nav = document.querySelector(".nav-list");
            const navLinks = document.querySelectorAll(".nav-list li");

            burger.addEventListener('click', () => {
                // Toggle
                nav.classList.toggle('nav-active');
                // animation af navlinks
                navLinks.forEach(setStyleLink);
                // burger animationen
                burger.classList.toggle('toggle');
            });
        }

        function setStyleLink(el, index) {
            if (el.style.animation) {
                el.style.animation = "";
            } else {
                el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        }

        //Kalder funktionen navSlide (Function invocation)
        navSlide();
