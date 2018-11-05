var placeholdertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac. Fermentum posuere urna nec tincidunt praesent. Nisi scelerisque eu ultrices vitae auctor eu. Amet massa vitae tortor condimentum. Vulputate dignissim suspendisse in est. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.";

var element = document.getElementsByClassName("panel");

Array.prototype.forEach.call(element, function(e) {
  	e.getElementsByClassName("d-flex")[0].innerHTML = placeholdertext;
});



