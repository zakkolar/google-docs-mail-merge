import {TextIsEmptyRule} from "./rules/TextIsEmptyRule";
import {TextIsNotEmptyRule} from "./rules/TextIsNotEmptyRule";
import {TextContainsRule} from "./rules/TextContainsRule";
import {TextDoesNotContainRule} from "./rules/TextDoesNotContainRule";
import {TextStartsWithRule} from "./rules/TextStartsWithRule";
import {TextEndsWithRule} from "./rules/TextEndsWithRule";
import {TextIsExactlyRule} from "./rules/TextIsExactlyRule";
import {NumberGreaterThanRule} from "./rules/NumberGreaterThanRule";
import {NumberGreaterThanOrEqualToRuleRule} from "./rules/NumberGreaterThanOrEqualToRule";
import {NumberLessThanRule} from "./rules/NumberLessThanRule";
import {NumberLessThanRuleOrEqualToRule} from "./rules/NumberLessThanRuleOrEqualToRule";
import {NumberEqualToRule} from "./rules/NumberEqualToRule";
import {NumberNotEqualToRule} from "./rules/NumberNotEqualToRule";
import {DateIsRule} from "./rules/DateIsRule";
import {DateIsBeforeRule} from "./rules/DateIsBeforeRule";
import {DateIsAfterRule} from "./rules/DateIsAfterRule";

export const RuleList = {
       isEmpty: new TextIsEmptyRule(),
       isNotEmpty: new TextIsNotEmptyRule(),
        textContains: new TextContainsRule(),
        textDoesNotContain: new TextDoesNotContainRule(),
        textStartsWith: new TextStartsWithRule(),
        textEndsWith: new TextEndsWithRule(),
        textIsExactly: new TextIsExactlyRule(),
        greaterThan: new NumberGreaterThanRule(),
        greaterThanOrEqualTo: new NumberGreaterThanOrEqualToRuleRule(),
        lessThan: new NumberLessThanRule(),
        lessThanOrEqualTo: new NumberLessThanRuleOrEqualToRule(),
        equalTo: new NumberEqualToRule(),
        notEqualTo: new NumberNotEqualToRule(),
        // dateIs: new DateIsRule(),
        // dateIsBefore: new DateIsBeforeRule(),
        // dateIsAfter: new DateIsAfterRule(),

}