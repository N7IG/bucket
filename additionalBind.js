var a = {};
var b = {};

bindValue(a, b, (v) => v * 2);

function bindValue(a, b, c) {
	var aProp;
	Object.defineProperty(a, 'value', {
		set: function(newValue) { 
			aProp = newValue;
			b.value = c(newValue); 
			// b.value = newValue;
		},
		get: function () {   
        	return aProp;  
    	},  
		enumerable: true,
		configurable: true
	});
}

a.value = 4;
console.log("a.value = " + a.value);
console.log("b.value = " + b.value);
console.log("a.value + b.value = " + (a.value + b.value));