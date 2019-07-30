$(document).ready(function() {

	var navFixed = false;
			$(document).scroll(function() {
				var offset = $(window).scrollTop();
				if(offset > 695 && navFixed == false){
					navFixed = true;
					$("#navBar").addClass("fixedNav");
				} else if(offset <= 695 && navFixed == true){
					navFixed = false;
					$("#navBar").removeClass("fixedNav");
				};
			});

});