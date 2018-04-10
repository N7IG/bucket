function compact(array) {
	let newArray = [];
	array.forEach((item) => {if(item){newArray.push(item)}});
	return newArray;
}

function difference(array, ...values) { 
	let flatArray = flattenDeep(values);
	let newArray = [];
	array.forEach((item) => {
		if(!flatArray.includes(item)) {
			newArray.push(item)
		}
	});
	return newArray;
}

function intersection(...arrays) {
	console.log(arrays)
	let newArray = [];
	let incl = true;
	arrays[0].forEach((item) => {
		incl = true;
		arrays.forEach((arr) => {
			if(!arr.includes(item)){
				incl = false;
			}
		})
		if(incl){
			newArray.push(item);
		};
	});
	return newArray;
}

function flattenDeep(array) {
	let newArray = [];
	array.forEach((item) => {
		if(!Array.isArray(item)) {
			newArray.push(item);
		} else {
			newArray = newArray.concat(flattenDeep(item));
		}
	});

	return newArray;
}

function groupBy(array, func) {
	let groupObject = {};
	array.forEach((item) => {
		if(groupObject[item[func] || func(item)]){
			groupObject[item[func] || func(item)].push(item);
		} else {
			groupObject[item[func] || func(item)] = [item];
		}
	}); 
	return groupObject;
}
