#!/usr/bin/env node

_ = require('underscore');
fs = require('fs');

var input = process.argv[2];
var output = process.argv[3];

if (!input) {
	input = './input.json';
}

if (!output) {
	output = './output.json';
}

fs.readFile(input, 'utf-8', function (err, data) {
	if (err) {
		throw new Error(err.message);
	}

	var result = _.groupBy(JSON.parse(data), function (item) {
		return item.dept;
	});


	var formattedResult = JSON.stringify(result, null, 4);

	fs.writeFile(output, formattedResult, function (err) {
		if (err) {
			throw new Error(err.message);
		}
	});
});

