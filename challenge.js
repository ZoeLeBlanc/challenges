//Challenge 1
var range = document.getElementById("ranger");
var number = document.getElementById("numero");

range.addEventListener('input', function (event) {
  number.value = event.target.value;
});
number.addEventListener('input', function (event) {
  range.value = event.target.value;
});

//Challenge 4
var divider4Output = document.getElementById("challenge4");

var numbArray = [7, 8, 9, 10];
var smallestNumb = "";
smallestNumb = numbArray.reduce(function (prev, curr) { return prev * curr; });
//console.log(smallestNumb);

var i = 1;
//console.log(i);
while (i %  1 != 0 || i %  2 != 0 || i %  3 != 0 || i %  4 != 0 ||
         i %  5 != 0 || i %  6 != 0 || i %  7 != 0 || i %  8 != 0 ||
         i % 9 != 0 || i % 10 != 0 ){
    i++;
//console.log(i);
}
//console.log(i);
//dividerOutput.innerHTML = "<p>" + i + "</p>";
divider4Output.innerHTML += "<p> Maybe this " + smallestNumb + " or maybe this " + i + "</p>";

//Challenge 5
var divider5Output = document.getElementById("challenge5");
function fibonacciGenerator(limit) {
var fib = []; // Initialize array!
fib[0] = 0;
fib[1] = 1;
	for(i = 2; i <= limit; i++) {
   		fib[i] = fib[i-2] + fib[i-1];
    	if (fib[i] > limit){
    		return;
    	};
    	console.log(fib[i]);
    	divider5Output.innerHTML += "<p>Here's your series of Fibonacci Numbers " + fib[i] + "</p>";
	}
	
}

fibonacciGenerator(500);


//Challenge 6
var divider6Output = document.getElementById("challenge6");
var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function squareD(arr) {
  return arr.map(function (i) {
  	//console.log("i", i);
    return Math.pow(i, 2);
  });
}
var squaredNumbs = squareD(numbs);
var diffNumbs = squaredNumbs.reduce(function (prev, curr) { return prev - curr; });
console.log("Difference between Numbers, " ,diffNumbs);
divider6Output.innerHTML += "<p> Difference between Numbers, " + diffNumbs + "</p>";
var sumNumbs = squaredNumbs.reduce(function (prev, curr) { return prev + curr; });
console.log("Sum between Numbers, ", sumNumbs);
divider6Output.innerHTML += "<p> Sum between Numbers, " + sumNumbs + "</p>";

