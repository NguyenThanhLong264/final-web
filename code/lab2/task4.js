const checkPwdMatch = function() {
	if (
		document.getElementById("pwd").value == 
		document.getElementById("pwd-retype").value
	) {
		alert("Match");
	} else {
		alert("Not match");
	}
};

document.getElementById("submit").addEventListener("click", checkPwdMatch);