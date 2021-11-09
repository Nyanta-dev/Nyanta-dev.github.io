const expect = require("chai").expect;
const scripts = require("../.git/../scripts/script");

describe('pow', () => {
	let x, n, result;

	x = 2;
	n = 3;
	result = 8;
	it(`${x} ^ ${n} = ${result}`, () => {
		const resultTest = scripts.pow(x, n);
		expect(resultTest).to.equal(result);
	});

	x = 2;
	n = 4;
	result = 16;
	it(`${x} ^ ${n} = ${result}`, () => {
		const resultTest = scripts.pow(x, n);
		expect(resultTest).to.equal(result);
	});

	x = 3;
	n = 2;
	result = 9;
	it(`${x} ^ ${n} = ${result}`, () => {
		const resultTest = scripts.pow(x, n);
		expect(resultTest).to.equal(result);
	});
});
