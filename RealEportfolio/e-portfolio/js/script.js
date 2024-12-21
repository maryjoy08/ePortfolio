// Project Carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");

    const projects = [
        {
            title: "Laravel Project",
            description: "",
            imageSrc: "assets/images/github.png",
            githubLink: "https://github.com/maryjoy08/Senoc_Project",
        },
        {
            title: "Simple Calculator",
            description: "",
            imageSrc: "assets/images/github.png",
            githubLink: "https://github.com/maryjoy08/Calculator",
        },
        {
            title: "Snake Game",
            description: "",
            imageSrc: "assets/images/github.png",
            githubLink: "https://github.com/maryjoy08/snakeeee",
        },
        {
            title: "Tic-Tac-Toe Game",
            description: "",
            imageSrc: "assets/images/github.png",
            githubLink: "https://github.com/maryjoy08/tictac-toe",
        },
        
      
    ];

    // Generate carousel items
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("carousel-item", "p-4", "bg-white", "rounded-lg", "shadow-lg", "transition-all", "hover:scale-105", "duration-300");
        
        projectItem.innerHTML = `
            <div class="carousel-image-container mb-4 rounded-lg overflow-hidden">
                <img src="${project.imageSrc}" alt="${project.title} Screenshot" class="w-full h-48 object-cover rounded-lg shadow-md">
            </div>
            <div class="carousel-content">
                <h3 class="text-xl font-semibold text-pink-600 mb-2">${project.title}</h3>
                <p class="text-sm text-gray-600 mb-4">${project.description}</p>
                <a class="btn inline-block py-2 px-6 text-white bg-pink-500 rounded-full text-sm font-medium shadow-md transform transition-all hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    href="${project.githubLink}" target="_blank">
                    Check it
                </a>
            </div>
        `;
        
        carousel.appendChild(projectItem);
    });

    // Add navigation functionality
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let scrollAmount = 0;
    const scrollStep = 300; // Adjust for scroll sensitivity

    nextButton.addEventListener("click", () => {
        scrollAmount += scrollStep;
        carousel.scrollLeft = scrollAmount;
    });

    prevButton.addEventListener("click", () => {
        scrollAmount -= scrollStep;
        carousel.scrollLeft = scrollAmount;
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const toggleButton = document.createElement("button");
    const navMenu = document.querySelector("nav");

    // Configure toggle button
    toggleButton.classList.add("menu-toggle");
    toggleButton.setAttribute("aria-label", "Toggle navigation menu");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.innerHTML = `
        <img src="assets/images/profile.jpg" alt="Logo" class="menu-logo">
        <div class="lines">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    `;

    document.body.appendChild(toggleButton);

    // Backdrop for overlay effect
    const backdrop = document.createElement("div");
    backdrop.classList.add("menu-backdrop");
    document.body.appendChild(backdrop);

    // Toggle menu function
    function toggleMenu() {
        const isActive = header.classList.toggle("active");
        toggleButton.setAttribute("aria-expanded", isActive);
        backdrop.classList.toggle("visible", isActive);
        document.body.classList.toggle("no-scroll", isActive); // Prevent body scrolling when menu is open
    }

    // Event listeners
    toggleButton.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", toggleMenu); // Close menu on backdrop click

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && header.classList.contains("active")) {
            header.classList.remove("active");
            toggleButton.setAttribute("aria-expanded", "false");
            backdrop.classList.remove("visible");
            document.body.classList.remove("no-scroll");
        }
    });
});

