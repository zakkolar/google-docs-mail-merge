import { expect } from 'chai';
import 'mocha';
import {TextIsExactlyRule} from "./TextIsExactlyRule";
import {TextIsEmptyRule} from "./TextIsEmptyRule";
import {TextIsNotEmptyRule} from "./TextIsNotEmptyRule";
import {TextStartsWithRule} from "./TextStartsWithRule";
import {TextEndsWithRule} from "./TextEndsWithRule";
import {TextContainsRule} from "./TextContainsRule";
import {TextDoesNotContainRule} from "./TextDoesNotContainRule";
import {TextIsNotRule} from "./TextIsNotRule";

describe('Text is exactly', () => {

    it('should match "Zak" with "Zak"', () => {
        const TextIsExactly = new TextIsExactlyRule();
        expect(TextIsExactly.test("Zak", "Zak")).to.equal(true);
    });

    it('should not match "Zak" with "zak"', () => {
        const TextIsExactly = new TextIsExactlyRule();
        expect(TextIsExactly.test("Zak", "zak")).to.equal(false);
    });

    it('should not match "Zak" with null', () => {
        const TextIsExactly = new TextIsExactlyRule();
        expect(TextIsExactly.test("Zak", null)).to.equal(false);
    });

});

describe('Text is not', () => {

    it('should not say "Zak" is not "Zak"', () => {
        const TestIsNot = new TextIsNotRule();
        expect(TestIsNot.test("Zak", "Zak")).to.equal(false);
    });

    it('should say "Zak" is not "zak"', () => {
        const TestIsNot = new TextIsNotRule();
        expect(TestIsNot.test("Zak", "zak")).to.equal(true);
    });

    it('should say "Zak" is not null', () => {
        const TestIsNot = new TextIsNotRule();
        expect(TestIsNot.test("Zak", null)).to.equal(true);
    });

});

describe('Text is empty', () => {
    it('should identify "" as empty', () => {
        const TextIsEmpty = new TextIsEmptyRule();
        expect(TextIsEmpty.test("")).to.equal(true);
    });

    it('should not identify "Zak" as empty', () => {
        const TextIsEmpty = new TextIsEmptyRule();
        expect(TextIsEmpty.test("Zak")).to.equal(false);
    });

});

describe('Text is not empty', () => {
    const TextIsNotEmpty = new TextIsNotEmptyRule();

    it('should  identify "Zak" as not empty', () => {

        expect(TextIsNotEmpty.test("Zak")).to.equal(true);
    });
    it('should not identify "" as not empty', () => {
        expect(TextIsNotEmpty.test("")).to.equal(false);
    });
});

describe('Text starts with', () => {
    const TextStartsWith = new TextStartsWithRule();

    it('should say "Carrot" starts with "Car"', () => {
        expect(TextStartsWith.test("Carrot", "Car")).to.equal(true);
    });
    it('should not say "Apple" starts with "Car"', () => {
        expect(TextStartsWith.test("Apple", "Car")).to.equal(false);
    });
});


describe('Text ends with', () => {
    const rule = new TextEndsWithRule();

    it('should say "Carrot" ends with "rot"', () => {
        expect(rule.test("Carrot", "rot")).to.equal(true);
    });
    it('should not say "Apple" ends with "rot"', () => {
        expect(rule.test("Apple", "rot")).to.equal(false);
    });
});

describe('Text contains', () => {
    const rule = new TextContainsRule();

    it('should say "Carrot" contains "rr"', () => {
        expect(rule.test("Carrot", "rr")).to.equal(true);
    });
    it('should not say "Apple" contains "rr"', () => {
        expect(rule.test("Apple", "rr")).to.equal(false);
    });
});

describe('Text does not contain', () => {
    const rule = new TextDoesNotContainRule();

    it('should  say "Apple" does not contains "rr"', () => {
        expect(rule.test("Apple", "rr")).to.equal(true);
    });

    it('should not say "Carrot" does not contain "rr"', () => {
        expect(rule.test("Carrot", "rr")).to.equal(false);
    });

});
