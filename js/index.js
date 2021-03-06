"use strict";

//added jQuery through the settings wheel
$(function () {
    $("button.return-to-top").css({ "position": "fixed", "bottom": "0", "left": "0" });
});

//function for the "back to top" button

// When the user clicks on the button, scroll to the top of the document
function to_top() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}