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

//check out callee to gt function name





*/
$(document).ready(function() {
    var currentHi;
    currentGame ="vanilla";
    currentGrid =16;

    displayGrid(16);
    

    $("#16").addClass("running");

    $("#home").addClass("tRun");

    $("#4").addClass("gameRunning");
    
    //vanilla();



    //testi('#16');
});


//Should use append after the loop
//http://www.upgradetheweb.com/2014/04/jquery-performance-optimization/
function displayGrid (n) {
	currentGrid=n;
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
	eval(currentGame+"()");

}

function vanilla () {
	//$('#grid div').unbind();
	currentGame= "vanilla";
	$('.square').mouseenter(function() {
		$(this).css('background-color', 'white');
	});
}

//Own function since it will call this when choosing other 
//sketch modes
function backToBlack () {
	$('.square').css('background-color', 'black');
}


//Remove currently highlighted grid button
//And highlight the clicked one
//I feel like I should have been able to use $(this)
//but that wouldn't work for some reason
function gridHi(id) {
	$('.gridB').removeClass("running");
	$('#'+id).addClass("running");
}

/*$("#button").click( function()
           {
             alert('button clicked');
           }
      );
});*/

/*$(function(){

    $('#navigation a').click(function(){

        $('#navigation .active').removeClass('active'); // remove the class from the currently selected
        $(this).addClass('active'); // add the class to the newly clicked link

    });

});*/

//Button change

/*$function testi(id){

    $('.gridB id').addClass('running');
});*/