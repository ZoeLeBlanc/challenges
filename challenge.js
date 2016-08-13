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
var dividerOutput = document.getElementById("challenge4");

var numbArray = [7, 8, 9, 10];
var smallestNumb = "";
smallestNumb = numbArray.reduce(function (prev, curr) { return prev * curr; });
console.log(smallestNumb);

var i = 1;
//console.log(i);
while (i %  1 != 0 || i %  2 != 0 || i %  3 != 0 || i %  4 != 0 ||
         i %  5 != 0 || i %  6 != 0 || i %  7 != 0 || i %  8 != 0 ||
         i % 9 != 0 || i % 10 != 0 ){
    i++;
//console.log(i);
}
console.log(i);
//dividerOutput.innerHTML = "<p>" + i + "</p>";
dividerOutput.innerHTML += "<p> Maybe this " + smallestNumb + " or maybe this " + i + "</p>";

//Challenge 5
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
	}
	
}

fibonacciGenerator(500);
/*
var fibs = [];

if (limit > 0) {
    fibs.push(0);
    if (limit > 1) {
        fibs.push(1);
        for (var i = 2; i < numberToDisplay; i++) {
            fibs.push(fibs[i - 2] + fibs[i - 1]);
        }
    }
}

console.log(fibs);


function fibInputs(n) {
  return fibGenerator(n, 1, 0);
}
function fibGenerator(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return fibGenerator(n - 1, a + b, a);
  }
}




function fibonacciGenerator() {
	var a = 0, b = 1, f;
	while( i < 500) {
		document.write(i);
		f = a + b;
        a = b;
        b = f;
	}
}


fibonacciGenerator();
/*
for (var fib of fibonacciGenerator()) {
    console.log( fib );
}
var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);
    }
};
var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

var a=0,b=1,c;
var inputNumber=prompt("Please enter fibonacci range number");
document.write("Fibonacci");
if(inputNumber!=undefined && !isNaN(inputNumber)){
 
while (b<=parseInt(inputNumber))
{
if(c!=undefined)
document.write(c);
document.write("<br/>");
c=a+b;
a=b;
b=c;
}
}
var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);
    }
};

function fibRecursive(n) {
  return fibLoop(n, 1, 0);
}
function fibLoop(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return fibLoop(n - 1, a + b, a);
  }
}

function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (var v of foo()) {
    console.log( v );
}
// 1 2 3 4 5

console.log( v ); // still `5`, not `6` :(
*/

//Challenge 6
var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Square(numbs) {
  return numbs.map(function (i) {
    return Math.pow(i, 2);
  });
}

var diffNumbs = numbs.reduce(function (prev, curr) { return prev - curr; });
console.log(diffNumbs);

var sumNumbs = numbs.reduce(function (prev, curr) { return prev + curr; });
console.log(sumNumbs);


