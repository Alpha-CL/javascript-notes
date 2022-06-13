let util = {
	getSingle(func) {
		let result;
		if (!result) {
			result = func.apply(this, arguments);
		}
		return result;
	}
};