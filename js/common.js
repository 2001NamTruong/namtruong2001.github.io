/* ===== common js ===== */

/* Show window textbox when there is no downloadable file after clicking the button */
$(document).ready(function() {
    $('.download-cv').click(function() {
        alert('You are about to access to my CV folder. Click OK to continue.');
    });

    $('.hire-me').click(function() {
        alert('Thank you for hiring me.');
    });
});