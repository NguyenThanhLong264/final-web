// Get a reference to the input field with id "field1"
var field1 = document.getElementById("field1");

// Attach a function to the blur event of "field1"
field1.addEventListener("blur", function() {
	// This function will be called when "field1" loses focus
	alert("Field 1 lost focus!");
});