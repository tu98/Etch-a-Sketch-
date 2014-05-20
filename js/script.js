
$(document).ready(function() {

    $("#16").addClass("gridRunning");

    $("#home").addClass("tRun");

    $("#vanilla").addClass("gameRunning");

    displayGrid()
    
});


//Should use append after the loop
//http://www.upgradetheweb.com/2014/04/jquery-performance-optimization/

function displayGrid () { 

	var n = $('.gridRunning').attr('id');
	var size = 800;
	var boxSize = (800 - (2*n))/n;
	var wrap = $("#grid").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}

	eval($('.gameRunning').attr('id')+'()');

}

function vanilla () {
	$('.square').mouseenter(function() {
		$(this).css('background-color', 'white');
	});
}

function fruit () {
	$('.square').mouseenter(function() {
		$(this).css('background-color', 'rgb('+(Math.floor(Math.random() *256))+','
			+(Math.floor(Math.random() *256))+','+(Math.floor(Math.random() *256))+')');
	});
}


function tail() {
	$('.square').mouseenter(function() {
		$(this).css('opacity', 0);
		$(this).fadeTo('slow', 1);
	});
}


function puny() {
	$('.square').mouseenter(function() {
		$(this).css('opacity', $(this).css('opacity') - 0.1);
});
}

function backToBlack () {
	displayGrid();
}



//Remove currently highlighted grid button and highlight the clicked one
//Add special running classes to the running grid
function gridHi(id) {
	$('.gridB').removeClass("gridRunning");
	$('#'+id).addClass("gridRunning"); // $(this) wouldn't work for some reason
}

//Basically the same function as above only for the sketch mode
//I tried to take in 'class' as a parameter and got an error
function modeHi(id) {
	$('.controls').removeClass("gameRunning");
	$('#'+id).addClass("gameRunning");
}