// Corrected and enhanced JavaScript for imageviewersupport.js
var currentIndex = 0; // Start with the first item
var thumbnails = document.querySelectorAll('.thumbnails img'); // Reference to thumbnails

function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = thumbnails.length - 1;
    if (currentIndex >= thumbnails.length) currentIndex = 0;
    updateMediaDisplay(currentIndex);
}

function updateMediaDisplay(newIndex) {
    var thumbnails = document.querySelectorAll('.thumbnails img');
    var newMedia = thumbnails[newIndex];
    var videoPlayer = document.getElementById('videoPlayer');
    var currentImage = document.getElementById('currentImage');
    var nextImage = document.getElementById('nextImage');

    if (newMedia.dataset.videoSrc) {
        // Handling video
        videoPlayer.src = newMedia.dataset.videoSrc;
        videoPlayer.style.opacity = 1;
        currentImage.style.opacity = 0;
        nextImage.style.opacity = 0; // Hide nextImage since video will play
    } else {
        // Handling image
        nextImage.src = newMedia.src;
        nextImage.alt = newMedia.alt;
        nextImage.style.opacity = 1;
        videoPlayer.style.opacity = 0; // Hide video player if image is to be shown
        // Swap logic for images as before
        setTimeout(function() {
            currentImage.src = nextImage.src;
            currentImage.alt = nextImage.alt;
            currentImage.style.opacity = 1;
            nextImage.style.opacity = 0; // Reset next image for next transition
        }, 500); // Match this duration with CSS opacity transition
    }
    // Reset video if moving away from a video
    if (!newMedia.dataset.videoSrc && videoPlayer.style.opacity == 1) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoPlayer.src = "";
        videoPlayer.load();
    }
    currentIndex = newIndex; // Update current index
}

document.addEventListener('DOMContentLoaded', function() {
    navigate(0); // Initialize display with the first media item
});