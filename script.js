document.addEventListener("DOMContentLoaded", function () {
    console.log("Alumni Connect Loaded!");

    // Image Carousel Logic
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});

//login script
document.addEventListener("DOMContentLoaded", function () {
    console.log("Login Page Loaded!");

    // Simulating form submission
    const loginForm = document.querySelector(".login-form");
    
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "test@alumni.com" && password === "password") {
            alert("Login Successful!");
            window.location.href = "index.html"; // Redirect to homepage
        } else {
            alert("Invalid email or password!");
        }
    });
});


//signup script
function setRole(role) {
    document.querySelectorAll(".role-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="setRole('${role}')"]`).classList.add("active");

    if (role === "alumni") {
        document.getElementById("graduation-year").style.display = "block";
        document.getElementById("department").style.display = "block";
    } else {
        document.getElementById("graduation-year").style.display = "none";
        document.getElementById("department").style.display = "none";
    }
}

setRole("alumni");


//contribute
function setDonation(type) {
    document.querySelectorAll(".donate-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="setDonation('${type}')"]`).classList.add("active");
}

setDonation("one-time");

//student dashboard
// Dark Mode Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Engagement Chart
// Dark Mode Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Live Announcements
const announcements = [
    "🎓 Alumni Meetup on 5th April - Register Now!",
    "💡 Internship opportunities at Microsoft available.",
    "🏆 Congrats to the hackathon winners from our batch!"
];

let index = 0;
setInterval(() => {
    document.querySelector(".announcements ul").innerHTML = `<li>${announcements[index]}</li>`;
    index = (index + 1) % announcements.length;
}, 3000);

