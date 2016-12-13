
// request google spreadsheet data      
function get_gs_data( url ) { 

	//holder please
	var info = [];
	
	// Hey Json, get me some stuff!
    $.getJSON(url, function(data) { 
         
        // walk the data            
    	var entry = data.feed.entry;   
    	
    	// add to our arry                   
		$(entry).each(function(){
			info.push(this.gsx$exact.$t);
		});

    });
    
    // send it home
    return (info); 
}

	// load the data from he remote spreadsheet
    var allquotes = get_gs_data('https://spreadsheets.google.com/feeds/list/15yb4A2JBWHUscoEOGwRIlJh4DHccI9OnaQ1kzWfvghc/1/public/values?alt=json');

	// fetch a given number of quotes from the array
 	function getquotes( num = 1 ) {
 		
 		// start stringing
 		var str = '';
 		
 		// how many quotes should we piece together?
 		for ($i=0; $i< num; $i++) {
 			str += allquotes[Math.floor(Math.random()*allquotes.length)] + '\n';
 		}
 		
 		// update the display content	
		$("#writing").text(str).fadeIn("slow");
	} 

  
$(document).ready(function (e) {
// let's rock and roll	 
 
 	// absolute positioning or my ignorance led me to track clicks on the div containing
 	// the guys
 	
 	$( ".book" ).click(function (e) {
 	
 		// are we on the left side? That's Myles. 
 		if ( e.pageX < (  $(window).width() / 2 ) &&  ( $("#myles").hasClass('visible') ) ) {
 			// only do something if Myles is visible

			if ( $("#paulo").hasClass('visible')) {
				// move Paulo off stage
				$("#paulo").animate({"right":"1000px"}, "slow").removeClass('visible');
				
				// update the text with, and make room for Myles next to the text
				getquotes();
				$("#writing").css("padding-left", "30%");
				
			} else {
			
				// Bring Paulo back on stage
				$("#paulo").animate({"right":"0px"}, "slow").addClass('visible');
				
				// fill the text with 2 quotes
				getquotes(2);
				$("#writing").css("padding-left", "5%");
			}

 		} else  {
 
 			// we have a click on Paulo, right side
 			
 			if ( $("#myles").hasClass('visible')) {
 				// move Myles off stage
				$("#myles").animate({"left":"1000px"}, "slow").removeClass('visible');
				
				// update the text with, and make room for Paulo next to the text
				getquotes();
				$("#writing").css("padding-right", "30%");
				
			} else {
			
				// Bring Myles back on stage
				$("#myles").animate({"left":"0px"}, "slow").addClass('visible');
				
				// fill the text with 2 quotes
				getquotes(2);
				$("#writing").css("padding-right", "5%");
			}	
 		}
	}); 		
});