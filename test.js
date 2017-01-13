import test from 'ava';
var Bear = require('./app.js');


test('should growl', async t => {
	var bear = new Bear()
	var says = bear.growl()
  var runs = bear.run()
	t.is(says, 'The any bear says grrr')
  t.is(runs,  'The any bear runs fast')
})