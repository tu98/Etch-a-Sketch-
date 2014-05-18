$(document).ready(function() {
    displayGrid(16);
    var currentHi;

    $("#16").addClass("running");

    $("#home").addClass("tRun");



    //testi('#16');
});

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