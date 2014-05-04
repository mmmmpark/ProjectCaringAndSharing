//global state var
var monthly = true; 

function changeView()
{
	if (!monthly)
	{
		document.getElementById("viewChange").value = "View Weekly Calendar";
		monthly = true;
		document.getElementById("iframe").innerHTML = "<iframe src='https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=9ej5q4nb1er7eq3bfjt98i5a2s%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles' style=' border-width:0 ' width='1000' height='600' frameborder='0' scrolling='no'></iframe>"
	}
	else 
	{
		document.getElementById("viewChange").value = "View Monthly Calendar";
		monthly = false;
		document.getElementById("iframe").innerHTML = "<iframe src='https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=9ej5q4nb1er7eq3bfjt98i5a2s%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles' style=' border-width:0 ' width='1000' height='600' frameborder='0' scrolling='no'></iframe>"
	}
		
}

function changeDiv(target) 
{
	totalChildren = document.getElementById('right_sidebar').children.length;
	for (var i = 0; i < totalChildren; i++ )
	{
		document.getElementById('right_sidebar').children[i].style.display = "none";
	}
	document.getElementById(target).style.display = "";
}

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

function dialog(id) {
    $("#dialog-message").dialog({
	  width:  600,
	  height: 500,
      modal: true,
      buttons: {
        Close: function() {
          $( this ).dialog( "close" );
        }
      }
    });
	$("#form_iframe").attr("src", "https://docs.google.com/forms/d/"+ id + "/viewform?embedded=true")
	document.getElementById("dialog-message").style.display = "";
}

  
$(function() {
    setInterval( "slideSwitch()", 5000 );
});

$(window).bind("load", function() {
	if(window.location.hash) {
	    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
	   changeDiv(hash);
	  // Fragment exists
	} 
});
