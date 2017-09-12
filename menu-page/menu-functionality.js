$(document).ready(function(){
    $("#menu-icon").click(function(){
    	menuDisplayed =  $(".wrapper").css("display")=="block" || $(".wrapper").css("display")=="inline-block"; 
        console.log($(".wrapper").css("display"));
    	if(menuDisplayed) {
    		 $(".wrapper").css({"display": "none"});
    		 $(".hide").css({"visibility": "visible"});
    	} else {
	         $(".hide").css({"visibility": "hidden"});
    		 $(".wrapper").css({"display": "inline-block"});
    	}
    });
});
