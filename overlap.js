var overlap = function(arr1, arr2) {
	if (arr2.length < arr1.length) {
		var temp = arr1;
		arr1 = arr2;
		arr2 = temp;
		compare(arr1, arr2);
	}

	else {
		compare(arr1, arr2);
	}
}

var compare = function(arr1, arr2) {
	console.log(`Arr1 is ${arr1} and Arr2 is ${arr2}`);
	
	var duplicate = [];
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				duplicate.push(arr1[i]);
			}
		}
	}
	if (duplicate.length > 0) {
		console.log(`The values that intersect are ${duplicate}`);
		return duplicate;
	}
	else {
		console.log(`None of the values intersect`);
		return duplicate;
	}
	
}

overlap([1,2,3,-4,5,2], [3,-4,0]);




// Time Complexity
// The above solution takes 2 parts. Function expression 'overlap' to define the shorter array as arr1.
// Finding the shorter array takes O(1) time and is constant since we check the smaller of the 2 arrays once.
// The second function expression then compares each element in arr1 to each element in arr2 to find overlaps.
// Because we have nested for loops and arr1 is being compared against each other element, we have to iterate 'n' times by 'm' times.
// The nested for loopis the most significant part of this function since we can omit the other constants as 'n' and 'm' get bigger
// Big O takes a time complexity of O(n^2) or O(n*m) where n is arr1.length and m is arr2.length

// Space Complexity:
// Look at everything that will take up memory including variables, data structures, allocations, function call
// List all the variables. In the first function, we just have a few constant variables (overlap, arr1, arr2, temp).
// In the 2nd function, we check if we have to push an item to variable duplicate. The worst case is up to n times
// The n is the most significant here as the rest are all constants so the Space Complexity is O(n)