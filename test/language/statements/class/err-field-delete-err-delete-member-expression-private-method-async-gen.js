// This file was procedurally generated from the following sources:
// - src/class-elements/err-delete-member-expression-private-method-async-gen.case
// - src/class-elements/delete-error/cls-decl-field-delete.template
/*---
description: It's a SyntaxError if delete operator is applied to MemberExpression.PrivateName (in field)
esid: sec-class-definitions-static-semantics-early-errors
features: [class-methods-private, class, class-fields-private, class-fields-public]
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    Static Semantics: Early Errors

      UnaryExpression : delete UnaryExpression

      It is a Syntax Error if the UnaryExpression is contained in strict mode
      code and the derived UnaryExpression is
      PrimaryExpression : IdentifierReference ,
      MemberExpression : MemberExpression.PrivateName , or
      CallExpression : CallExpression.PrivateName .

---*/


$DONOTEVALUATE();

class C {
  #x;
  
  x = delete this.#m
;
  
}
