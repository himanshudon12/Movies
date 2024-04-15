// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fileInput = document.getElementById('movieFile');

    form.addEventListener('submit', function(event) {
        if (!fileInput.files || fileInput.files.length === 0) {
            event.preventDefault(); // Prevent form submission
            alert('Please select a movie file.');
        }
    });
});
