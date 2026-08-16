/* =====================================================
   HEADER
===================================================== */

const header =
    document.getElementById("site-header");

const menuToggle =
    document.getElementById("menu-toggle");

const navbar =
    document.getElementById("navbar");

const backToTop =
    document.getElementById("back-to-top");

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section[id]");


/* =====================================================
   SCROLL UI
===================================================== */

function updateScrollUI() {

    const scroll = window.scrollY;


    /* Sticky header */

    header.classList.toggle(
        "sticky",
        scroll > 30
    );


    /* Back to top */

    backToTop.classList.toggle(
        "show",
        scroll > 500
    );


    /* Active navigation */

    let current = "home";


    sections.forEach(section => {

        if (
            scroll >=
            section.offsetTop - 180
        ) {

            current =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.toggle(
            "active",

            link.getAttribute("href")
            === `#${current}`
        );

    });

}


window.addEventListener(
    "scroll",
    updateScrollUI,
    {
        passive: true
    }
);

updateScrollUI();


/* =====================================================
   MOBILE MENU
===================================================== */

menuToggle.addEventListener(
    "click",
    () => {

        const open =
            navbar.classList.toggle(
                "open"
            );


        menuToggle.setAttribute(
            "aria-expanded",
            open
        );

    }
);


/* Close mobile menu */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navbar.classList.remove(
                "open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* =====================================================
   BACK TO TOP
===================================================== */

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =====================================================
   PACKAGE MODAL
===================================================== */

const modal =
    document.getElementById(
        "package-modal"
    );

const modalTitle =
    document.getElementById(
        "modal-title"
    );

const modalClose =
    document.getElementById(
        "modal-close"
    );

const modalContact =
    document.getElementById(
        "modal-contact"
    );


function openModal(destination) {

    modalTitle.textContent =
        destination + " Package";


    modal.classList.add("open");


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* Open package */

document
    .querySelectorAll(".details-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openModal(
                    button.dataset.destination
                );

            }
        );

    });


/* Close */

modalClose.addEventListener(
    "click",
    closeModal
);


/* Click outside */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* Escape */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* Enquire */

modalContact.addEventListener(
    "click",
    closeModal
);


/* =====================================================
   NEWSLETTER
===================================================== */

const form =
    document.getElementById(
        "newsletter-form"
    );

const message =
    document.getElementById(
        "form-message"
    );


form.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        if (!email) {
            return;
        }


        message.textContent =
            "Thanks! You are on the travel updates list.";


        form.reset();

    }
);