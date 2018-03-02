function encode()
{
	//get the number of letters you want to rotate 
	var input_number_rotation = document.getElementById("RotationNumber").value;
	//gets the value of the elements within OriginalMessage and stores them to input_text
	var input_text = document.getElementById("OriginalMessage").value.toUpperCase();
	//convert the input to uppercase
	var upperCase_input = input_text.toUpperCase();
	//empty array for the output
	var output_ciphered_text = [];
	
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	
	if(document.getElementById("OriginalMessage").value=="")
	{
		alert("Fill up the input text area to proceed!");
	}
	else
	{
		//counts the elements within input_text
		for (var i=0; i<input_text.length; i++)
		{	
			input = alphabet.indexOf(input_text[i]);
			//if is the last character stored in input
			if (input == -1)
			{	
				//since its the last character inside input it gets pushed at the end of the array output_ciphered_text
				output_ciphered_text.push(input_text[i]);
			}
			else
			{
				//(1+13)/26 = 14  
				var coded = (input - input_number_rotation)%26;
				//encode input character at position '1' with letter at position '14' from the alphabetLowerCase
				var letter = alphabet[coded];
				//push letter that is positioned '14' in the alphabet at the end of the empty array output_ciphered_text
				output_ciphered_text.push(letter);
			}
		}
		//sets the innerHTML property of "Enciphered message" with the text included in the array "output_ciphered_text" which elements are joined altogether into string
		document.getElementById("EncipheredMessage").innerHTML = output_ciphered_text.join("");
	}
}