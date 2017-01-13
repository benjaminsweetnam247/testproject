import test from 'ava';
var Bear = require('./app.js');


test('should growl', async t => {
	var bear = new Bear()
	var says = bear.growl()
	t.is(says, 'The any bear says grrr')
})

test('should run', async t => {
  var bear = new Bear()
  var runs = bear.run()
  t.is(runs,  'The any bear runs fast')
})