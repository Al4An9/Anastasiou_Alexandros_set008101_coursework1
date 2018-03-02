function replacetext() {
	if (document.getElementById("EncipheredMessage").innerHTML=="")
	{
		alert("No text in the output text area. Encipher or decipher your message first!")
	}
	else
	{
		var input_text = document.getElementById("EncipheredMessage").value;
		document.getElementById("OriginalMessage").value = input_text;
		document.getElementById("EncipheredMessage").innerHTML = "";
	}
}