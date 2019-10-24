const sumAll = function(a,b) {
	if (!Number.isInteger(a) || !Number.isInteger(b)) {
		return 'ERROR';
	} else if (a < 0 || b < 0) {
		return 'ERROR';
	}

	let c = 0;
	for(let i = (a < b ? a : b); i <= (a < b ? b : a); i++) c+=i;
	return c;
}

module.exports = sumAll
