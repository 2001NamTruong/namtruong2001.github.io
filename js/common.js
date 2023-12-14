/* ===== common js ===== */

/* Show window textbox when there is no downloadable file after clicking the button */
$(document).ready(function() {
    $('.download-cv').click(function() {
        alert('Oops! There is no downloadable file here!');
    });
});