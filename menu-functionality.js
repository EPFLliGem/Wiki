$(document).ready(function(){
    $("#menu-icon").click(function(){
    	menuDisplayed =  $(".wrapper").css("display")=="grid" || $(".wrapper").css("display")=="inline"; 
    	if(menuDisplayed) {
    		 $(".wrapper").css({"display": "none"});
    		 $(".hide").css({"visibility": "visible"});
    	} else {
	    		 $(".hide").css({"visibility": "hidden"});
	    		 
	    		 /*Treat special case for the browser EDGE*/
	    		 if( !!navigator.userAgent.match(/Trident\/7\./)|| window.navigator.userAgent.indexOf("Edge") > -1) {
	    			$(".placeholder").css({"display":"none"});
	    		    $(".wrapper").css({"display": "inline"});
	    		    $(".box").css({"border-radius":"0px"}) 
	    		 } 
	    		 /*Display grid for the other browsers*/
	    		 else {
    			 $(".wrapper").css({"display": "grid"});
	    		 }
    	}
    });
});
