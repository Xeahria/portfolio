// script.js

document.addEventListener('DOMContentLoaded', function () {
    const exploreButton = document.getElementById('exploreBtn');
    const aboutButton = document.querySelector('.btn[href="about.html"]');
    const portfolioButton = document.querySelector('.btn[href="portfolio.html"]');
    const container = document.querySelector('.container');
    const topButtons = document.querySelectorAll('nav a'); // Top navigation buttons

    // Function to handle the fade-out effect and navigation
    function navigateWithFade(targetUrl) {
        // Apply the fade-out class to start the transition
        container.classList.add('fade-out');

        // Wait for the fade-out transition to finish (500ms)
        setTimeout(function () {
            // Redirect to the target URL
            window.location.href = targetUrl;
        }, 500);  // 500ms should match the duration of the fade-out in CSS
    }

    // Fade-in effect after page is fully loaded
    window.addEventListener('load', function () {
        document.body.classList.add('fade-in');
    });

    // Smooth transition for the "Explore My Work" button
    if (exploreButton) {
        exploreButton.addEventListener('click', function (e) {
            e.preventDefault();
            navigateWithFade('portfolio.html'); // Navigate to the portfolio page
        });
    }

    // Smooth transition for the "About Me" button
    if (aboutButton) {
        aboutButton.addEventListener('click', function (e) {
            e.preventDefault();
            navigateWithFade('about.html'); // Navigate to the About Me page
        });
    }

    // Smooth transition for the "Portfolio" button
    if (portfolioButton) {
        portfolioButton.addEventListener('click', function (e) {
            e.preventDefault();
            navigateWithFade('portfolio.html'); // Navigate to the Portfolio page
        });
    }

    // Add fade-out for top navigation buttons
    if (topButtons) {
        topButtons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                // Delay navigation by applying the fade-out effect
                navigateWithFade(button.getAttribute('href'));
            });
        });
    }
});