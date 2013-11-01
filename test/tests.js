/* brackets-xunit: qunit */

// var bible_book = [31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26];
	
// test("bible reading plan small", function() {
//     var sequence_small = [1,3,4,2,5];
//     var verses_day_small = 20;
//     var small_return = [{"day":0,"start":{"chapter":1,"verse":1},"end":{"chapter":1,"verse":20}},{"day":1,"start":{"chapter":1,"verse":21},"end":{"chapter":1,"verse":31}},{"day":2,"start":{"chapter":3,"verse":1},"end":{"chapter":3,"verse":9}},{"day":3,"start":{"chapter":3,"verse":10},"end":{"chapter":3,"verse":24}},{"day":4,"start":{"chapter":4,"verse":1},"end":{"chapter":4,"verse":5}},{"day":5,"start":{"chapter":4,"verse":6},"end":{"chapter":4,"verse":25}},{"day":6,"start":{"chapter":4,"verse":26},"end":{"chapter":4,"verse":26}},{"day":7,"start":{"chapter":2,"verse":1},"end":{"chapter":2,"verse":19}},{"day":8,"start":{"chapter":2,"verse":20},"end":{"chapter":2,"verse":25}},{"day":9,"start":{"chapter":5,"verse":1},"end":{"chapter":5,"verse":14}},{"day":10,"start":{"chapter":5,"verse":15},"end":{"chapter":5,"verse":32}}];
//     var reading_plan_small = plan(bible_book, sequence_small, verses_day_small, 0, 0, 0);
// 	deepEqual(reading_plan_small, small_return);
// });

// // test data
//     var ref = ['Genesis 1','Genesis 2-20','2 Chronicles 1:15-28','2 Chronicles 2-3', '2 Kings 5-6','Psalms 101','1 Kings 1:5-9', 'Psalm 86:1-3', '1 Chronicles 5:1-3'];
//     var r = []; 
//     for(var i=0; i<ref.length; i++) { r.push({'start': bible.parseReference(ref[i]), 'end': bible.parseReference(ref[i])}); }


test("bible reading plan small", function() {
	require(['plan', 'time']);
	plan = require('plan');	
	time = require('time');
	plan.sequence = 'esveverydayinword.json'; //"Genesis 1:1-2:25","Matthew 1:1-2:12","Psalm 1:1-6"
	plan.amount = 25;
	plan.skip = [0, 6];
	plan.end = 'Sat Nov 30 2013 00:00:00 GMT-0600 (CST)';
	plan.start = 'Thu Oct 31 2013 00:00:00 GMT-0500 (CDT)';
	plan.type = 'verses';
	plan.duration = time(plan.start, plan.end, plan.skip);
	var s = plan.load();
	var p = plan.create(s);
	var o = plan.output(p, plan.duration);
});
// sdg
