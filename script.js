
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// CLOSE MOBILE MENU

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// PROJECT DETAILS

const projectDetails = {

    smart: {
        number: "01 / MY WORK",
        title: "SmartSupport AI",
        description:
            "An AI-powered customer support chatbot developed for a fashion retail shop. It uses Google's Gemini AI and FastAPI to provide customer support and shop information through a conversational interface.",
        tags: ["Python", "FastAPI", "Gemini AI", "REST API"]
    },

    churn: {
        number: "02 / MY WORK",
        title: "Customer Churn Prediction",
        description:
            "A machine learning project that analyzes customer information to identify customers who may leave a service. It includes data preparation, exploratory data analysis, customer segmentation and churn prediction.",
        tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"]
    },

    placement: {
        number: "03 / MY WORK",
        title: "Student Placement Prediction",
        description:
            "A machine learning project designed to predict student placement possibilities based on academic performance and other student-related factors.",
        tags: ["Python", "Pandas", "Scikit-learn"]
    }

};


// PROJECT MODAL

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");

let previouslyFocusedElement = null;


// OPEN PROJECT DETAILS

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("click", () => {

        const project = projectDetails[card.dataset.project];

        if (!project) return;

        previouslyFocusedElement = card;

        modalNumber.textContent = project.number;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modalTags.replaceChildren();

        project.tags.forEach(tag => {

            const tagElement = document.createElement("span");

            tagElement.textContent = tag;

            modalTags.appendChild(tagElement);

        });

        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        modalClose.focus();

    });

});


// CLOSE MODAL

function closeProjectModal() {

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }

}

modalClose.addEventListener("click", closeProjectModal);


// CLICK OUTSIDE TO CLOSE

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeProjectModal();
    }

});


// ESCAPE KEY TO CLOSE

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("show")
    ) {
        closeProjectModal();
    }

});


// SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.15 });

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}
