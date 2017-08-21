// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: DecimalDigits NumericLiteralSeparator DecimalDigit
info: |
  NumericLiteralSeparator ::
    _

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

---*/

assert.sameValue(Number("123456789_0"), 1234567890);
assert.sameValue(Number("123456789_1"), 1234567891);
assert.sameValue(Number("123456789_2"), 1234567892);
assert.sameValue(Number("123456789_3"), 1234567893);
assert.sameValue(Number("123456789_4"), 1234567894);
assert.sameValue(Number("123456789_5"), 1234567895);
assert.sameValue(Number("123456789_6"), 1234567896);
assert.sameValue(Number("123456789_7"), 1234567897);
assert.sameValue(Number("123456789_8"), 1234567898);
assert.sameValue(Number("123456789_9"), 1234567899);
