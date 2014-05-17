$(document).ready(function() {
    displayGrid(16);
});

function displayGrid (n) {
	var size = 800;
	var boxSize = (800 - n+1)/n;
	var wrap = $("#grid").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}
}