const result = document.getElementById("result");

const mul = function() {
	const num1 = document.getElementById("1stNum").value;
	const num2 = document.getElementById("2ndNum").value;
	result.innerHTML = num1 * num2;
};

const div = function() {
	const num1 = document.getElementById("1stNum").value;
	const num2 = document.getElementById("2ndNum").value;
	result.innerHTML = (num1 / num2);
};

document.getElementById("multiply").addEventListener("click", mul);
document.getElementById("divide").addEventListener("click", div);