document.addEventListener("DOMContentLoaded", () => {
    // Ensure the body fades in when the page loads
    document.body.classList.add("loaded");

    // Apply fade-out effect on button or link click
    document.querySelectorAll("a, .btn").forEach(button => {
        button.addEventListener("click", (e) => {
            if (button.getAttribute("href")) {
                e.preventDefault();
                document.body.style.opacity = "0";
                setTimeout(() => {
                    window.location = button.getAttribute("href");
                }, 500);
            }
        });
    });
});