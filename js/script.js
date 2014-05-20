/* I followed the directions to this project pretty closely 
except I don't ask the user for an input for the grid size
IMHO this actually gives the user too much choice
since I found it very annoying to have to type in a number
each time I wanted to try out a new sketch game.

Instead I decided to give the user three different buttons for grid 
size choice. I wrote my displayGrid function to take any n
to keep with the spirit of the challenge.

This led to an interesting problem. I wanted the user to choose 
a grid size and be able to select new sketch games without having
to re-difine their prefered grid. Likewise I wanted the user 
To be in a a sketch game, change the grid size, and not
have to redefine their current game mode.

This is why I save it in the two variables


This way of doing things also gave the advantage of being able to run
several game modes on the same grid which I chose not to allow
by running the backToBlack() function before each game mode

Another advantage is that I'm even able to run several game modes
at once

//check out callee to gt function name





*/
$(document).ready(function() {
    var currentHi;
    //currentGame ="vanilla";
    //currentGrid =16;

    $("#16").addClass("running");

    $("#home").addClass("tRun");

    $("#vanilla").addClass("gameRunning");

    //displayGrid(16);
    displayGrid()
    
});


//Should use append after the loop
//http://www.upgradetheweb.com/2014/04/jquery-performance-optimization/

function displayGrid () { //n used to be param
	//currentGrid=n;
	var n = $('.running').attr('id');
	var size = 800;
	var boxSize = (800 - (2*n))/n;
	var wrap = $("#grid").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}

	//var currentGame = "vanilla";


	//Eval is apparently bad practice
	/*$('.gameRunning').each(function() {
		//var x = this.id;
		eval(($(this).id)+"()");
	});*/
	//var x = $('.controls.id')
	//eval(currentGame+"()");
	//eval(x+"()");

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

/*function tail() {
	$(".square").hover(function() {
		$(this).css("opacity", 1);
	}, function () {
		$(this).fadeTo('fast', 0);
	});
}
*/

/*function tail() {
	$('.square').mouseover(function() {
		$(this).css("opacity", 1);
	}).mouseout(function() {
		$(this).stop().animate({backgroundColor: 'black'} 1000);
	});
}*/




//working one!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*function tail() {
	$(".squares").hover(function() {
	$(this).css("opacity", 1);
	}, function () {
	$(this).fadeTo('fast', 0);
});*/
function tail() {
	$('.square').mouseenter(function() {
		$(this).css('opacity', 0);
		$(this).fadeTo('slow', 1);
	});
}






//Own function since it will call this when choosing other 
//sketch modes
function backToBlack () {
	displayGrid();
}


//Remove currently highlighted grid button
//And highlight the clicked one
function gridHi(id) {
	$('.gridB').removeClass("running");
	$('#'+id).addClass("running"); // $(this) wouldn't work for some reason
}

//Basically the same function as above
//I tried to take in 'class' as a parameter and got an error
function modeHi(id) {
	$('.controls').removeClass("gameRunning");
	$('#'+id).addClass("gameRunning");
}



//Avoid global variables by having special classes on selected and then 
//ID's that can run the function