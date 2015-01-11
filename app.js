#!/usr/bin/env node

_ = require('underscore');
fs.require('fs');

var input = process.argv[1];
var output = process.argv[2];

if (!input) {
	input = './input.json';
}

if (!output) {
	output = './output.json';
}

fs.readFile(input, 'utf-8', function (err, data) {
	if (err) {
		throw new Error(e.code + ': ' + e.message);
	}
});

var result = _.indexBy(arr, function (item) {
	return item.dept;
});

fs.readFile(output, result, function (err) {
	if (err) {
		throw new Error(e.code + ': ' + e.message);
	}
});
