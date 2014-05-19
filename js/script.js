$(document).ready(function() {
    displayGrid(16);
    var currentHi;

    $("#16").addClass("running");

    $("#home").addClass("tRun");

    $("#4").addClass("gameRunning");
    
    vanilla();



    //testi('#16');
});


//Should use append after the loop
//http://www.upgradetheweb.com/2014/04/jquery-performance-optimization/
function displayGrid (n) {
	var size = 800;
	var boxSize = (800 - (2*n))/n;
	var wrap = $("#grid").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}
}

function vanilla () {
	//$('#grid div').unbind();
	$('.square').mouseenter(function() {
		$(this).css('background-color', 'white');
	});
}

//Own function since it will call this when choosing other 
//sketch modes
function backToBlack () {
	$('.square').css('background-color', 'black');
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