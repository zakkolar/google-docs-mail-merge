import { expect } from 'chai';
import 'mocha';
import {NumberGreaterThanRule} from "./NumberGreaterThanRule";
import {NumberGreaterThanOrEqualToRuleRule} from "./NumberGreaterThanOrEqualToRule";
import {NumberLessThanRule} from "./NumberLessThanRule";
import {NumberLessThanRuleOrEqualToRule} from "./NumberLessThanRuleOrEqualToRule";
import {NumberEqualToRule} from "./NumberEqualToRule";
import {NumberNotEqualToRule} from "./NumberNotEqualToRule";

describe('Number greater than', () => {
    const rule = new NumberGreaterThanRule();

    it('should say 10 is greater than 2', () => {
        expect(rule.test("10", "2")).to.equal(true);
    });

    it('should not say 20 is greater than 30', () => {
        expect(rule.test("20", "30")).to.equal(false);
    });

    it('should not say 20 is greater than 20', () => {
        expect(rule.test("20", "20")).to.equal(false);
    });

    it('should say 10.0 is greater than 2', () => {
        expect(rule.test("10.0", "2")).to.equal(true);
    });

    it('should not say 20.0 is greater than 30', () => {
        expect(rule.test("20.0", "30")).to.equal(false);
    });

    it('should not say 20.0 is greater than 20', () => {
        expect(rule.test("20.0", "20")).to.equal(false);
    });

    it('should say 10.0 is greater than 2.0', () => {
        expect(rule.test("10.0", "2.0")).to.equal(true);
    });

    it('should not say 20.0 is greater than 30.0', () => {
        expect(rule.test("20.0", "30.0")).to.equal(false);
    });

    it('should not say 20.0 is greater than 20.0', () => {
        expect(rule.test("20.0", "20.0")).to.equal(false);
    });

    it('should say 10 is greater than 2.0', () => {
        expect(rule.test("10", "2.0")).to.equal(true);
    });

    it('should not say 20 is greater than 30.0', () => {
        expect(rule.test("20", "30.0")).to.equal(false);
    });

    it('should not say 20 is greater than 20.0', () => {
        expect(rule.test("20", "20.0")).to.equal(false);
    });

});

describe('Number greater than or equal to', () => {
    const rule = new NumberGreaterThanOrEqualToRuleRule();

    it('should say 10 is greater than or equal to 2', () => {
        expect(rule.test("10", "2")).to.equal(true);
    });

    it('should not say 20 is greater than or equal to 30', () => {
        expect(rule.test("20", "30")).to.equal(false);
    });

    it('should say 20 is greater than or equal to 20', () => {
        expect(rule.test("20", "20")).to.equal(true);
    });

    it('should say 10.0 is greater than or equal to 2', () => {
        expect(rule.test("10.0", "2")).to.equal(true);
    });

    it('should not say 20.0 is greater than or equal to 30', () => {
        expect(rule.test("20.0", "30")).to.equal(false);
    });

    it('should say 20.0 is greater than or equal to 20', () => {
        expect(rule.test("20.0", "20")).to.equal(true);
    });

    it('should say 10.0 is greater than or equal to 2.0', () => {
        expect(rule.test("10.0", "2.0")).to.equal(true);
    });

    it('should not say 20.0 is greater than or equal to 30.0', () => {
        expect(rule.test("20.0", "30.0")).to.equal(false);
    });

    it('should say 20.0 is greater than or equal to 20.0', () => {
        expect(rule.test("20.0", "20.0")).to.equal(true);
    });

    it('should say 10 is greater than or equal to 2.0', () => {
        expect(rule.test("10", "2.0")).to.equal(true);
    });

    it('should not say 20 is greater than or equal to 30.0', () => {
        expect(rule.test("20", "30.0")).to.equal(false);
    });

    it('should say 20 is greater than or equal to 20.0', () => {
        expect(rule.test("20", "20.0")).to.equal(true);
    });

});

describe('Number less than', () => {
    const rule = new NumberLessThanRule();

    it('should not say 10 is less than 2', () => {
        expect(rule.test("10", "2")).to.equal(false);
    });

    it('should say 20 is less than 30', () => {
        expect(rule.test("20", "30")).to.equal(true);
    });

    it('should not say 20 is less than 20', () => {
        expect(rule.test("20", "20")).to.equal(false);
    });

    it('should not say 10.0 is less than 2', () => {
        expect(rule.test("10.0", "2")).to.equal(false);
    });

    it('should say 20.0 is less than 30', () => {
        expect(rule.test("20.0", "30")).to.equal(true);
    });

    it('should not say 20.0 is less than 20', () => {
        expect(rule.test("20.0", "20")).to.equal(false);
    });

    it('should not say 10.0 is less than 2.0', () => {
        expect(rule.test("10.0", "2.0")).to.equal(false);
    });

    it('should say 20.0 is less than 30.0', () => {
        expect(rule.test("20.0", "30.0")).to.equal(true);
    });

    it('should not say 20.0 is less than 20.0', () => {
        expect(rule.test("20.0", "20.0")).to.equal(false);
    });

    it('should not say 10 is less than 2.0', () => {
        expect(rule.test("10", "2.0")).to.equal(false);
    });

    it('should say 20 is less than 30.0', () => {
        expect(rule.test("20", "30.0")).to.equal(true);
    });

    it('should not say 20 is less than 20.0', () => {
        expect(rule.test("20", "20.0")).to.equal(false);
    });

});

describe('Number less than or equal to', () => {
    const rule = new NumberLessThanRuleOrEqualToRule();

    it('should not say 10 is less than or equal to 2', () => {
        expect(rule.test("10", "2")).to.equal(false);
    });

    it('should say 20 is less than or equal to 30', () => {
        expect(rule.test("20", "30")).to.equal(true);
    });

    it('should say 20 is less than or equal to 20', () => {
        expect(rule.test("20", "20")).to.equal(true);
    });

    it('should not say 10.0 is less than or equal to 2', () => {
        expect(rule.test("10.0", "2")).to.equal(false);
    });

    it('should say 20.0 is less than or equal to 30', () => {
        expect(rule.test("20.0", "30")).to.equal(true);
    });

    it('should say 20.0 is less than or equal to 20', () => {
        expect(rule.test("20.0", "20")).to.equal(true);
    });

    it('should not say 10.0 is less than or equal to 2.0', () => {
        expect(rule.test("10.0", "2.0")).to.equal(false);
    });

    it('should say 20.0 is less than or equal to 30.0', () => {
        expect(rule.test("20.0", "30.0")).to.equal(true);
    });

    it('should say 20.0 is less than or equal to 20.0', () => {
        expect(rule.test("20.0", "20.0")).to.equal(true);
    });

    it('should not say 10 is less than or equal to 2.0', () => {
        expect(rule.test("10", "2.0")).to.equal(false);
    });

    it('should say 20 is less than or equal to 30.0', () => {
        expect(rule.test("20", "30.0")).to.equal(true);
    });

    it('should say 20 is less than or equal to 20.0', () => {
        expect(rule.test("20", "20.0")).to.equal(true);
    });

});

describe('Number equal to', () => {
    const rule = new NumberEqualToRule();

    it('should not say 10 is equal to 2', () => {
        expect(rule.test("10", "2")).to.equal(false);
    });

    it('should not say 20 is equal to 30', () => {
        expect(rule.test("20", "30")).to.equal(false);
    });

    it('should say 20 is equal to 20', () => {
        expect(rule.test("20", "20")).to.equal(true);
    });

    it('should not say 10.0 is equal to 2', () => {
        expect(rule.test("10.0", "2")).to.equal(false);
    });

    it('should not say 20.0 is equal to 30', () => {
        expect(rule.test("20.0", "30")).to.equal(false);
    });

    it('should say 20.0 is equal to 20', () => {
        expect(rule.test("20.0", "20")).to.equal(true);
    });

    it('should not say 10.0 is equal to 2.0', () => {
        expect(rule.test("10.0", "2.0")).to.equal(false);
    });

    it('should not say 20.0 is equal to 30.0', () => {
        expect(rule.test("20.0", "30.0")).to.equal(false);
    });

    it('should say 20.0 is equal to 20.0', () => {
        expect(rule.test("20.0", "20.0")).to.equal(true);
    });

    it('should not say 10 is equal to 2.0', () => {
        expect(rule.test("10", "2.0")).to.equal(false);
    });

    it('should not say 20 is equal to 30.0', () => {
        expect(rule.test("20", "30.0")).to.equal(false);
    });

    it('should say 20 is equal to 20.0', () => {
        expect(rule.test("20", "20.0")).to.equal(true);
    });

});

describe('Number not equal to', () => {
    const rule = new NumberNotEqualToRule();

    it('should say 10 is not equal to 2', () => {
        expect(rule.test("10", "2")).to.equal(true);
    });

    it('should say 20 is not equal to 30', () => {
        expect(rule.test("20", "30")).to.equal(true);
    });

    it('should not say 20 is not equal to 20', () => {
        expect(rule.test("20", "20")).to.equal(false);
    });

    it('should say 10.0 is not equal to 2', () => {
        expect(rule.test("10.0", "2")).to.equal(true);
    });

    it('should say 20.0 is not equal to 30', () => {
        expect(rule.test("20.0", "30")).to.equal(true);
    });

    it('should not say 20.0 is not equal to 20', () => {
        expect(rule.test("20.0", "20")).to.equal(false);
    });

    it('should say 10.0 is not equal to 2.0', () => {
        expect(rule.test("10.0", "2.0")).to.equal(true);
    });

    it('should say 20.0 is not equal to 30.0', () => {
        expect(rule.test("20.0", "30.0")).to.equal(true);
    });

    it('should not say 20.0 is not equal to 20.0', () => {
        expect(rule.test("20.0", "20.0")).to.equal(false);
    });

    it('should say 10 is not equal to 2.0', () => {
        expect(rule.test("10", "2.0")).to.equal(true);
    });

    it('should say 20 is not equal to 30.0', () => {
        expect(rule.test("20", "30.0")).to.equal(true);
    });

    it('should not say 20 is not equal to 20.0', () => {
        expect(rule.test("20", "20.0")).to.equal(false);
    });

});