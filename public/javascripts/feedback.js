//Function will be used to, eventually, start events to send an email to the user

function sendEmail(event){
	event.preventDefault();
	var form = document.getElementById("userform");
	var title, firstName, lastName, email, comments; 
	var collection = new Array();
	var text = "";

	// Recheck the validity of the elements and collect messages if not valid
	if(!form.elements["first-name"].checkValidity()){
		collection.push("\"First Name\" is a required field");
	}
	if(!form.elements["last-name"].checkValidity()){
		collection.push("\"Last Name\" is a required field");
	}
	if(!form.elements["email"].checkValidity()){
		collection.push("\"Email\" is a required field and must be a valid email");	
	}
	if(!form.elements["phone"].checkValidity()){
		collection.push("\"Phone Num\" must be in the form of (###)-###-#### to be valid");
	}
	if(!form.elements["comment"].checkValidity()){
		collection.push("\"Comments\" is a required field");
	}
	if(collection.length > 0){
		for(var element of collection){
			text += element + '\n';
		}
		alert(text);
		return false;
	}

	firstName = form.elements["first-name"].value;
	lastName = form.elements["last-name"].value;

	text = "Thank you for your submission, " +firstName+" "+lastName+".";
	text += "\n\nYour information is being processed.\nA confirmation email will be sent to you shortly.";
	alert(text);
	form.submit();
}