import { describe, it } from "mocha";
import * as israelid from "./dist";
/** @ts-ignore */
import * as assert from "assert";

describe('israelid', () => {
	it("good ids", () => {
		[
			"123456782",
			"654223999",
			"000000000",
			"111111118",
			"222222226",
			"333333334",
			"444444442",
		].forEach(id => assert.equal(israelid.valid(id), true))
	});
	it("bad ids", () => {
		[
			"123456789",
			"654223991",
			"999999999",
			"555555550",
		].forEach(id => assert.equal(israelid.valid(id), false))
	}),
	it("checksum digit", () => {
		[
			["12345678", '2'],
			["65422399", '9'],
			["00000000", '0'],
			["11111111", '8'],
			["22222222", '6'],
			["33333333", '4'],
			["44444444", '2'],
		].forEach(([id, expected]) => assert.equal(israelid.checksum_digit(id!), expected))
	}),
	it("complement", () => {
		[
			["123456782", 0],
			["12345678", 2],
			["111", 3],
			["11111", 6],
			["10", 9],
		].forEach(([id, expected]) => assert.equal(israelid.control_complement(id!), expected))
	})
});
