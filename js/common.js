/* ===== common js ===== */

/* Append header.html and footer.html component */
$(function(){
    $("#header").load("header.html"); 
    $("footer").load("footer.html"); 
});

/* Show window textbox when there is no downloadable file after clicking the button */
$(document).ready(function() {
    $('.download-cv').click(function() {
        alert('Oops! There is no downloadable file here!');
    });
});
