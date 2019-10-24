const removeFromArray = function(array,...args) {
	filterArr = Array.from(arguments);
	return array.filter(function(value, index, arr) {
		for(let i=1; i < filterArr.length; i++) {
			if (value != filterArr[i]) {
				continue;
			} 
			return (value != filterArr[i]);
		}
		return true
	})
}

module.exports = removeFromArray
