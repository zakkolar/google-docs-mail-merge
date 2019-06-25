import { expect } from 'chai';
import 'mocha';
import {DateIsRule} from "./DateIsRule";
import {DateIsBeforeRule} from "./DateIsBeforeRule";
import {DateIsAfterRule} from "./DateIsAfterRule";

describe('Date is rule', () => {
    const rule = new DateIsRule();

    it('should say 10/2/2018 is 10/2/2018', () => {
        expect(rule.test("10/2/2018", "10/2/2018")).to.equal(true);
    });

    it('should say 2018-10-02 is 2018-10-02', () => {
        expect(rule.test("10/2/2018", "10/2/2018")).to.equal(true);
    });

    it('should not say 10/2/2018 is 10/1/2018', () => {
        expect(rule.test("10/2/2018", "10/1/2018")).to.equal(false);
    });

    it('should not say 10/2/2018 is 10/1/2019', () => {
        expect(rule.test("10/2/2018", "10/1/2019")).to.equal(false);
    });


});

describe('Date is before rule', () => {
    const rule = new DateIsBeforeRule();

    it('should say 10/2/2018 is not before 10/2/2018', () => {
        expect(rule.test("10/2/2018", "10/2/2018")).to.equal(false);
    });

    it('should say 10/1/2018 is before 10/2/2018', () => {
        expect(rule.test("10/1/2018", "10/2/2018")).to.equal(true);
    });

    it('should say 10/3/2018 is not before 10/2/2018', () => {
        expect(rule.test("10/3/2018", "10/2/2018")).to.equal(false);
    });

    it('should say 2018-10-01 is before 2018-10-02', () => {
        expect(rule.test("2018-10-01", "2018-10-02")).to.equal(true);
    });

    it('should say 2018-10-03 is not before 2018-10-02', () => {
        expect(rule.test("2018-10-03", "2018-10-02")).to.equal(false);
    });




});

describe('Date is after rule', () => {
    const rule = new DateIsAfterRule();

    it('should not say 10/2/2018 is after 10/2/2018', () => {
        expect(rule.test("10/2/2018", "10/2/2018")).to.equal(false);
    });

    it('should say 10/1/2018 is not after 10/2/2018', () => {
        expect(rule.test("10/1/2018", "10/2/2018")).to.equal(false);
    });

    it('should say 10/3/2018 is after 10/2/2018', () => {
        expect(rule.test("10/3/2018", "10/2/2018")).to.equal(true);
    });

    it('should say 2018-10-01 is not after 2018-10-02', () => {
        expect(rule.test("2018-10-01", "2018-10-02")).to.equal(false);
    });

    it('should say 2018-10-03 is after 2018-10-02', () => {
        expect(rule.test("2018-10-03", "2018-10-02")).to.equal(true);
    });



});