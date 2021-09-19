var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name").value;
    var InitcapGuestName = GuestName.substr(0,1).toUpperCase()+GuestName.substr(1,GuestName.length-1);
	names_of_people.push(InitcapGuestName);
    var i= names_of_people.join("<br>");
	document.getElementById("array-display_area").innerHTML=i;
	console.log(names_of_people);
}

function sorting()
{
    names_of_people.sort();
    var i= names_of_people.join("<br>");	
    document.getElementById("array-display_area").innerHTML=i.toString();
}


function searching()
{
	var s= document.getElementById("search-input").value;
	var InitCapS = s.substr(0,1).toUpperCase()+s.substr(1,s.length-1)
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(InitCapS==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("result").innerHTML="The name " + s + " was found " + found + " time/s";
}