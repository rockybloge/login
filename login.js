function validation()
{
	var un=document.getElementById("username").value;
	var ps=document.getElementById("password").value;
	if( ( un=="SONU" || un=="sonu")  && ( ps=="TIGER" || ps=="tiger") )
	{
		alert("WELCOME TO MY WEBPAGE");
		open(" https://www.youtube.com/watch?v=qxPxM5_WZvA&list=RDqxPxM5_WZvA&start_radio=1");
		return false;
	}
	else
	{
		alert("Login denied");
	}
}