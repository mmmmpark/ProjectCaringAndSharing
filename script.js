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