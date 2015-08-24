var same = require('./');
var assert = require('assert');

assert(same([1,2], [2,1]));
assert(same([1,2,2], [2,1,2]));
assert(!same([1,2], [2,1,2]));
assert(!same([1,2,1], [2,1,2]));
assert(!same([1,2,3], [2,1]));
assert(same([1,2,3], [2,1,3], [3,2,1]));
assert(!same([1,2,3], [2,1,3], [3,4,1]));

assert(!same(1, 2));
assert(!same([1], undefined));