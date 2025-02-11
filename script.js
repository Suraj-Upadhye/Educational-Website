// homepage (index.html)
function exploreCourses() {
    // alert("Redirecting to the Courses page...");
    window.location.href = "courses.html";
}



// courses page (courses.html)
document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("category");
    const difficultyFilter = document.getElementById("difficulty");
    const courseCards = document.querySelectorAll(".course-card");

    function filterCourses() {
        const selectedCategory = categoryFilter.value;
        const selectedDifficulty = difficultyFilter.value;

        courseCards.forEach(card => {
            const courseCategory = card.getAttribute("data-category");
            const courseDifficulty = card.getAttribute("data-difficulty");

            const matchesCategory = (selectedCategory === "all" || selectedCategory === courseCategory);
            const matchesDifficulty = (selectedDifficulty === "all" || selectedDifficulty === courseDifficulty);

            if (matchesCategory && matchesDifficulty) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    categoryFilter.addEventListener("change", filterCourses);
    difficultyFilter.addEventListener("change", filterCourses);
});





// Resources.html

// Search Functionality
function searchResources() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let resources = document.querySelectorAll(".resource-item");

    resources.forEach(resource => {
        let title = resource.querySelector("h3").textContent.toLowerCase();
        let description = resource.querySelector("p").textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            resource.style.display = "block";
        } else {
            resource.style.display = "none";
        }
    });
}

// Filter Resources by Category
function filterResources() {
    let category = document.getElementById("category").value;
    let resources = document.querySelectorAll(".resource-item");

    resources.forEach(resource => {
        if (category === "all" || resource.getAttribute("data-category") === category) {
            resource.style.display = "block";
        } else {
            resource.style.display = "none";
        }
    });
}




// about.html

const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.display = i === index ? "block" : "none";
    });
}

// Show the first testimonial
showTestimonial(currentTestimonialIndex);

document.getElementById("prevTestimonial").addEventListener("click", () => {
    currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
});

document.getElementById("nextTestimonial").addEventListener("click", () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
});

