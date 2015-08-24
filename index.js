module.exports = function (source) {
	if (!source || source.length === undefined) return false;

	var rest = [].slice.call(arguments, 1);
	return rest.every(function (b) {
		if (!b || source.length !== b.length) return false;

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