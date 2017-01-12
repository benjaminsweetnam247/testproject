import test from 'ava';
var Bear = require('./app.js');


test('should growl', async t => {
	var bear = new Bear()
	var result = bear.growl()
	t.is(result, 'The any bear says grrr')
})