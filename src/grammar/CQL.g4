grammar CQL;

init
  : statement (' ' statement)*
  ;

statement
  : VARIABLE ' a = 12;'
  ;

VARIABLE: 'var' | 'let' | 'const';

// init
//   : '{' value (',' value)* '}'
//   ;

// value
//   : init
//   | INT
//   ;

// INT: [0-9]+;
// WS: [ \t\r\n]+ -> skip;













































// sortClause : 'sortBy' (index modifier)+;

// statement   : operand_2
//             | proxOperand
//             | statement (booleanOperator) proxOperand
//             | statement (booleanOperator) operand_2;

// operand_2  : operand (operand)*;

// operand     : parStatement                                      #parenthesisStatement
//             | index op=EQUALS proxOperand                       #proxStatement
//             | index op=EQUALS                     parStatement  #equalsStatement_1
//             | index op=ANY    (modifier)*         value         #anyStatement
//             | index op=ALL    (modifier)*         value         #allStatement
//             | index op=WITHIN (modifier)*         value         #withinStatement
//             | index op=INDEX                      value         #indexStatement
//             | index op=RELATION_OPERATOR          value         #relationStatement
//             | index op=EQUALS                     value         #equalsStatement_2
//             | value                                             #valueStatement
//             ;


// parStatement: '(' statement ')'
//               | '(' ')';
// proxOperand
//   : '(' proxOperand ')'
//   | value proxOperator value
//   | value proxOperator '('? value (',' value)* ')'?
//   ;

// booleanOperator : BOOLEAN_OPERATOR (modifier)*;
// proxOperator    : PROX_OPERATOR (modifier)*;

// modifier:  SLASH_VALUE | SLASH_VALUE (RELATION_OPERATOR | EQUALS) VALUE;

// value: VALUE (SLASH_VALUE)*;
// index: VALUE;
// operator: EQUALS | ANY | ALL | WITHIN | INDEX | RELATION_OPERATOR | BOOLEAN_OPERATOR | PROX_OPERATOR;

// EQUALS: '=';

// BOOLEAN_OPERATOR : (AND|OR|NOT);
// PROX_OPERATOR    : PROX;
// RELATION_OPERATOR :(LOW_RELATION | '<' | '<=' | '=' | '>=' | '>');

// ANY: ('any'   | 'ANY');
// ALL: ('all'   | 'ALL');
// WITHIN : ('within' | 'WITHIN');

// VALUE: LETTER | QUOTED;
// SLASH_VALUE: '/' WS* VALUE;
// QUOTED: '"'  ~('"')* '"';

// INDEX     : ':';

// SAME_RELATION  : '=/same' | '=/SAME';
// HIGH_RELATION  : '=/high' | '=/HIGH';
// LOW_RELATION   : '=/low' | '=/LOW';

// AND: 'and' | 'AND';
// OR: 'or' | 'OR';
// NOT: 'not' | 'NOT';
// PROX: 'prox' | 'PROX';

// LETTER: ~[(),:=/"<> \t\r\n]+;
// WS:   [ \t\r\n]->skip;
