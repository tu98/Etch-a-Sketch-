//Initialize
$(document).ready(function() {

    $("#16").addClass("gridRunning");

    $("#home").addClass("tRun");

    $("#vanilla").addClass("gameRunning");

    displayGrid()
    
});


//Should use append after the loop
//http://www.upgradetheweb.com/2014/04/jquery-performance-optimization/

function displayGrid () { 

	//Search for the selected grid with gridRunning class
	//Retreive ID of gridRunning which is the number of squares per row
	var n = $('.gridRunning').attr('id'); 
	var size = 800;
	var boxSize = (800 - (2*n))/n; // 2*n because of border
	var wrap = $("#grid").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}


	//Find currently running game mode through gameRunning class
	//Retrieve the ID of the selected game mode
	//Run function with eval(id())
	//(ID name is the same name as the corresponding function) 
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
//Add special running class to the selected grid
function gridHi(id) {
	$('.gridB').removeClass("gridRunning");
	$('#'+id).addClass("gridRunning"); // $(this) wouldn't work for some reason
}

//Basically the same function as above only for the sketch mode
//I tried to take in 'class' as a parameter and have only one function
//But I got an error
function modeHi(id) {
	$('.controls').removeClass("gameRunning");
	$('#'+id).addClass("gameRunning");
}