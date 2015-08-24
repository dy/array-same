module.exports = function (source) {
	var rest = [].slice.call(arguments, 1);
	return rest.every(function (b) {
		if (source.length !== b.length) return false;

		var a = [].slice.call(source);

		if (!b.every(function (item) {
			var idx = a.indexOf(item);
			if (idx < 0) return false;
			a.splice(idx, 1);
			return true;
		})) return false;

		if (a.length) return false;

		return true;
	});
};