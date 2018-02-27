function replacetext() {
	var input_text = document.getElementById("Encipheredmessage").value;
	document.getElementById("Originalmessage").value = input_text;
	document.getElementById("Encipheredmessage").innerHTML = "";
}