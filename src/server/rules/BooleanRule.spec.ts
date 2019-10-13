import { expect } from 'chai';
import 'mocha';
import {BooleanIsTrueRule} from "./BooleanIsTrueRule";
import {BooleanIsFalseRule} from "./BooleanIsFalseRule";


describe('Boolean is true', () => {

    const BooleanIsTrue = new BooleanIsTrueRule();

    it('should say true is true', () => {

        expect(BooleanIsTrue.test(true)).to.equal(true);
    });

    it('should not say false is true', () => {
        expect(BooleanIsTrue.test(false)).to.equal(false);
    });

    it('should  say "value" is true', () => {
        expect(BooleanIsTrue.test("value")).to.equal(true);
    });

    it('should not say null is true', () => {
        expect(BooleanIsTrue.test(null)).to.equal(false);
    });

    it('should not say "" is true', () => {
        expect(BooleanIsTrue.test("")).to.equal(false);
    });

    it('should not say 0 is true', () => {
        expect(BooleanIsTrue.test(0)).to.equal(false);
    });


});


describe('Boolean is false', () => {

    const BooleanIsFalse = new BooleanIsFalseRule();

    it('should say true is not false', () => {

        expect(BooleanIsFalse.test(true)).to.equal(false);
    });

    it('should say false is false', () => {
        expect(BooleanIsFalse.test(false)).to.equal(true);
    });

    it('should not say "value" is false', () => {
        expect(BooleanIsFalse.test("value")).to.equal(false);
    });

    it('should say null is false', () => {
        expect(BooleanIsFalse.test(null)).to.equal(true);
    });

    it('should say "" is false', () => {
        expect(BooleanIsFalse.test("")).to.equal(true);
    });

    it('should say 0 is false', () => {
        expect(BooleanIsFalse.test(0)).to.equal(true);
    });


});