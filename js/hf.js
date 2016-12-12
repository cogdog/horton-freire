	var allquotes = ["the dialecticity between patience and impatience. ", "It's hard to even see much of that spark anymore, that so many beliefs have been crushed, negated, that our society is mired with an unbearable weight of cynicism.", "its going beyond pulling the quotes from the book and postulating about education", "My system is to make him thirsty, so he'll volunteer to drink. ", " the delicate relationship between teaching, giving knowl­edge, and learning knowledge", "I think it's my responsi­bility to share what I believe in, not only in discussions but in the way I live and in the way the workshops run and in the way Highlander's run, the way life is.", "The central meeting room at Highlander is circular in shape. Rock­ing chairs, a fireplace, and a spectacular view of the Smoky Mountains provide a comfortable atmosphere for workshops.", "Starting from people's experiences, and not from our understanding of the world, does not mean that we don't want the people to come with us in order to go beyond us afterward", "the quality of becoming more and more open to feel the feelings of others, to become so sensitive that we can guess what the group or one person is thinking at that moment.", "they come absolutely convinced that the teacher has to give a class to them", "You set the stage for doing something that they're uncomfortable with. You know they're uncomfortable with it, and you have to work through that business of getting them  to be comfortable with trusting them­selves a little bit, trusting their peers a little bit", "then they begin to see that you aren't going to play the role of an expert, except in the sense that you are the expert in how they're going to learn, not in what they're going to learn.", "close enough to their expectation", "You do have to make concessions like that", "The more people partici­pate in the process of their own education, the more the people participate in the process of defining what kind of production to produce, and for what and why, the more the people participate in the development of their selves.", "That was what they wanted. Now what we wanted in addition to that was to help  them  understand that they should work with a larger community. They should work with farmers, they should deal with integration, they should be part of the world. We had our own agenda.", "They had to learn to think, make decisions-not learn gimmicks, not learn techniques, but learn how to think.", "You've gotta have a structure that participants can feel comfortable with until they begin to have something to deviate from or add to", "So we turned  it all over to them, and they were in complete control. I mean they exercised that control.", "of everyone united to get a grievance settled.", "No matter where this kind of educator works, the great difficulty­or the great  adventure!-is how to make education something which, in being serious, rigorous, methodi­cal, and having a process, also creates happiness and joy.", "This transforms the practice of education into a kind of entertainment.", "it's impossible for me in this kind of education to teach how to think unless. we are teaching something, some content to  the students.", "What Myles did was to touch their memory about a subject and to remake the road. I think that it's really impossible to teach how to think more critically by just making a speech about criti­cal thought", "I mean what I'm doing with the mind is the same as nature does with the body. It's no different. I think you should stretch people to their limits and our limits", "Money has to come from the system, and people that we identify with produce that wealth.", "If I believe in social equality and don't practice it, then what I say is hollow. You have to have that kind of consis­tency.", "You have to tie the practical with the visionary.", "next is respect for people's abilities to learn and to act and to shape their own lives.", "The third thing grows out of caring for people and having respect for people's ability to do things, and that is that you value their experiences.", "Highlander can't be described as an organization because it isn't departmen­talized and mechanistically conceived. It's more of an organism, therefore it's hard to describe. It's a mosaic or a piece of weaving.", "Highlander is a kind of a weaving of many colors, some blend and some clash, but you know it's alive. ", "Movements change what goes on and how things are organized.", "We were part of the world but we had to start locally.", "Authority is necessary to the educational process as well as necessary to the freedom of the stu­dents and my own. The teacher is absolutely necessary. What is bad, what is not necessary, is authoritarianism, but not authority.", "The teacher is of course an artist, but being an artist does not mean that he or she can make the profile, can shape the students. What the educator does in teaching is to make it possible for the students to be­come themselves.", "The people who use that label are people who unknowingly, for the  most part, are dedicated to the support of the status quo.", "I'm just saying that we understand that the people who claim to be neutral, and call us propagandists because we are not neutral, are not neutral either. They're just ignorant. They don't know that they're supporters of the status quo. They don't know that that's their job. They don't know that the institution is dedicated to per­petuating a system and they're serving an institution. They have influence nevertheless.", "Conflicts are the midwife of consciousness.", "Those who come tomor­row will start acting, precisely taking what we did as the starting point.", "I think it is abso­lutely indispensable that educators be secure, capable, and have a capacity for loving and for curiosity.", "I have noth­ing against teaching. But I have many things against teaching in an authoritarian way.", "knowledge never is static. It's always in the process.", "I am humble because I am incomplete", "one of the virtues we have to create in ourselves as progressive educators is the virtue of humility.", "I try to find ways to expose them to learning processes that would finally lead them to take a look at my conclusion.", "MYLES: Well I think you have to divide that into principles. When I say what I believe, I'm talking about prin­ciples such as love and democracy, where people control their Jives. THIRD PARTY: Your vision. MYLES: My vision. Now  the strategy for my vision, the ap­proaches and processes, I've learned from other people.", "any kind of problem  has five or six good solutions and five or six bad solutions."];
	
	function getaquote() {
		$("#writing").text(allquotes[Math.floor(Math.random()*allquotes.length)]).fadeIn("slow");
	}
	
	function getafewquotes() {
		$("#writing").text( allquotes[Math.floor(Math.random()*allquotes.length)] + ' ' + allquotes[Math.floor(Math.random()*allquotes.length)] ).fadeIn("slow");
	}


$(document).ready(function (e) {

	 getafewquotes();

 
 	$( ".book" ).click(function (e) {
 	
 		if ( e.pageX < (  $(window).width() / 2 ) &&  ( $("#myles").hasClass('visible') ) ) {

			if ( $("#paulo").hasClass('visible')) {
				$("#paulo").animate({"right":"1000px"}, "slow").removeClass('visible');
				getaquote();
				$("#writing").css("padding-left", "180px");
			} else {
				$("#paulo").animate({"right":"0px"}, "slow").addClass('visible');
				getafewquotes();
				$("#writing").css("padding-left", "10px");
			}

 		} else  {
 
 
 			if ( $("#myles").hasClass('visible')) {
				$("#myles").animate({"left":"1000px"}, "slow").removeClass('visible');
				getaquote();
				$("#writing").css("padding-right", "180px");
			} else {
				$("#myles").animate({"left":"0px"}, "slow").addClass('visible');
				getafewquotes();
				$("#writing").css("padding-right", "10px");
			}

			
 		}
	}); 
	
		
});