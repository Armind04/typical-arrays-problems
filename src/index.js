
exports.min = function min (array = []) {
	return array.length == 0 ? 0 : Math.min(...array);
}

exports.max = function max (array = []) {
 	return array.length == 0 ? 0 : Math.max(...array);
}

exports.avg = function avg (array  = []) {
	if (array.length == 0) return 0;
	return array.reduce((sum, x) => {
   		return sum + x;
 	}, 0) / [...array].length
}
