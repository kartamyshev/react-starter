// Generated from src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CQLListener = require('./CQLListener').CQLListener;
var grammarFileName = 'CQL.g4';

var serializedATN = [
  '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0003\u001a\u00b8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004',
  '\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007',
  '\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f',
  '\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002',
  '\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003$\n\u0003',
  '\r\u0003\u000e\u0003%\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004',
  '+\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004',
  '\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00045\n\u0004\f\u0004\u000e',
  '\u00048\u000b\u0004\u0003\u0005\u0003\u0005\u0007\u0005<\n\u0005\f\u0005',
  '\u000e\u0005?\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003',
  '\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003',
  '\u0006\u0003\u0006\u0003\u0006\u0007\u0006M\n\u0006\f\u0006\u000e\u0006',
  'P\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003',
  '\u0006\u0007\u0006W\n\u0006\f\u0006\u000e\u0006Z\u000b\u0006\u0003\u0006',
  '\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006a\n\u0006',
  '\f\u0006\u000e\u0006d\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006',
  '\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006',
  '\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006',
  '\u0005\u0006u\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007',
  '\u0003\u0007\u0003\u0007\u0005\u0007}\n\u0007\u0003\b\u0003\b\u0003',
  '\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005',
  '\b\u008a\n\b\u0003\b\u0003\b\u0003\b\u0007\b\u008f\n\b\f\b\u000e\b\u0092',
  '\u000b\b\u0003\b\u0005\b\u0095\n\b\u0005\b\u0097\n\b\u0003\t\u0003\t',
  '\u0007\t\u009b\n\t\f\t\u000e\t\u009e\u000b\t\u0003\n\u0003\n\u0007\n',
  '\u00a2\n\n\f\n\u000e\n\u00a5\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b',
  '\u0003\u000b\u0005\u000b\u00ab\n\u000b\u0003\f\u0003\f\u0007\f\u00af',
  '\n\f\f\f\u000e\f\u00b2\u000b\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e',
  '\u0003\u000e\u0002\u0003\u0006\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010',
  '\u0012\u0014\u0016\u0018\u001a\u0002\u0004\u0004\u0002\u0007\u0007\n',
  '\n\u0004\u0002\u0007\r\u0011\u0011\u0002\u00c5\u0002\u001c\u0003\u0002',
  '\u0002\u0002\u0004\u001f\u0003\u0002\u0002\u0002\u0006*\u0003\u0002',
  '\u0002\u0002\b9\u0003\u0002\u0002\u0002\nt\u0003\u0002\u0002\u0002\f',
  '|\u0003\u0002\u0002\u0002\u000e\u0096\u0003\u0002\u0002\u0002\u0010',
  '\u0098\u0003\u0002\u0002\u0002\u0012\u009f\u0003\u0002\u0002\u0002\u0014',
  '\u00aa\u0003\u0002\u0002\u0002\u0016\u00ac\u0003\u0002\u0002\u0002\u0018',
  '\u00b3\u0003\u0002\u0002\u0002\u001a\u00b5\u0003\u0002\u0002\u0002\u001c',
  '\u001d\u0005\u0006\u0004\u0002\u001d\u001e\u0007\u0002\u0002\u0003\u001e',
  '\u0003\u0003\u0002\u0002\u0002\u001f#\u0007\u0003\u0002\u0002 !\u0005',
  '\u0018\r\u0002!"\u0005\u0014\u000b\u0002"$\u0003\u0002\u0002\u0002',
  '# \u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002',
  "\u0002%&\u0003\u0002\u0002\u0002&\u0005\u0003\u0002\u0002\u0002'(\b",
  "\u0004\u0001\u0002(+\u0005\b\u0005\u0002)+\u0005\u000e\b\u0002*'\u0003",
  '\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+6\u0003\u0002\u0002\u0002',
  ',-\f\u0004\u0002\u0002-.\u0005\u0010\t\u0002./\u0005\u000e\b\u0002/',
  '5\u0003\u0002\u0002\u000201\f\u0003\u0002\u000212\u0005\u0010\t\u0002',
  '23\u0005\b\u0005\u000235\u0003\u0002\u0002\u00024,\u0003\u0002\u0002',
  '\u000240\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u000264\u0003\u0002',
  '\u0002\u000267\u0003\u0002\u0002\u00027\u0007\u0003\u0002\u0002\u0002',
  '86\u0003\u0002\u0002\u00029=\u0005\n\u0006\u0002:<\u0005\n\u0006\u0002',
  ';:\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002',
  '\u0002=>\u0003\u0002\u0002\u0002>\t\u0003\u0002\u0002\u0002?=\u0003',
  '\u0002\u0002\u0002@u\u0005\f\u0007\u0002AB\u0005\u0018\r\u0002BC\u0007',
  '\u0007\u0002\u0002CD\u0005\u000e\b\u0002Du\u0003\u0002\u0002\u0002E',
  'F\u0005\u0018\r\u0002FG\u0007\u0007\u0002\u0002GH\u0005\f\u0007\u0002',
  'Hu\u0003\u0002\u0002\u0002IJ\u0005\u0018\r\u0002JN\u0007\u000b\u0002',
  '\u0002KM\u0005\u0014\u000b\u0002LK\u0003\u0002\u0002\u0002MP\u0003\u0002',
  '\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OQ\u0003',
  '\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0005\u0016\f\u0002R',
  'u\u0003\u0002\u0002\u0002ST\u0005\u0018\r\u0002TX\u0007\f\u0002\u0002',
  'UW\u0005\u0014\u000b\u0002VU\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002',
  '\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y[\u0003\u0002',
  '\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\u0005\u0016\f\u0002\\u\u0003',
  '\u0002\u0002\u0002]^\u0005\u0018\r\u0002^b\u0007\r\u0002\u0002_a\u0005',
  '\u0014\u000b\u0002`_\u0003\u0002\u0002\u0002ad\u0003\u0002\u0002\u0002',
  'b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002ce\u0003\u0002\u0002',
  '\u0002db\u0003\u0002\u0002\u0002ef\u0005\u0016\f\u0002fu\u0003\u0002',
  '\u0002\u0002gh\u0005\u0018\r\u0002hi\u0007\u0011\u0002\u0002ij\u0005',
  '\u0016\f\u0002ju\u0003\u0002\u0002\u0002kl\u0005\u0018\r\u0002lm\u0007',
  '\n\u0002\u0002mn\u0005\u0016\f\u0002nu\u0003\u0002\u0002\u0002op\u0005',
  '\u0018\r\u0002pq\u0007\u0007\u0002\u0002qr\u0005\u0016\f\u0002ru\u0003',
  '\u0002\u0002\u0002su\u0005\u0016\f\u0002t@\u0003\u0002\u0002\u0002t',
  'A\u0003\u0002\u0002\u0002tE\u0003\u0002\u0002\u0002tI\u0003\u0002\u0002',
  '\u0002tS\u0003\u0002\u0002\u0002t]\u0003\u0002\u0002\u0002tg\u0003\u0002',
  '\u0002\u0002tk\u0003\u0002\u0002\u0002to\u0003\u0002\u0002\u0002ts\u0003',
  '\u0002\u0002\u0002u\u000b\u0003\u0002\u0002\u0002vw\u0007\u0004\u0002',
  '\u0002wx\u0005\u0006\u0004\u0002xy\u0007\u0005\u0002\u0002y}\u0003\u0002',
  '\u0002\u0002z{\u0007\u0004\u0002\u0002{}\u0007\u0005\u0002\u0002|v\u0003',
  '\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002}\r\u0003\u0002\u0002\u0002',
  '~\u007f\u0007\u0004\u0002\u0002\u007f\u0080\u0005\u000e\b\u0002\u0080',
  '\u0081\u0007\u0005\u0002\u0002\u0081\u0097\u0003\u0002\u0002\u0002\u0082',
  '\u0083\u0005\u0016\f\u0002\u0083\u0084\u0005\u0012\n\u0002\u0084\u0085',
  '\u0005\u0016\f\u0002\u0085\u0097\u0003\u0002\u0002\u0002\u0086\u0087',
  '\u0005\u0016\f\u0002\u0087\u0089\u0005\u0012\n\u0002\u0088\u008a\u0007',
  '\u0004\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003',
  '\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u0090\u0005',
  '\u0016\f\u0002\u008c\u008d\u0007\u0006\u0002\u0002\u008d\u008f\u0005',
  '\u0016\f\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0092\u0003',
  '\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003',
  '\u0002\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003',
  '\u0002\u0002\u0002\u0093\u0095\u0007\u0005\u0002\u0002\u0094\u0093\u0003',
  '\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0097\u0003',
  '\u0002\u0002\u0002\u0096~\u0003\u0002\u0002\u0002\u0096\u0082\u0003',
  '\u0002\u0002\u0002\u0096\u0086\u0003\u0002\u0002\u0002\u0097\u000f\u0003',
  '\u0002\u0002\u0002\u0098\u009c\u0007\b\u0002\u0002\u0099\u009b\u0005',
  '\u0014\u000b\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009e\u0003',
  '\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003',
  '\u0002\u0002\u0002\u009d\u0011\u0003\u0002\u0002\u0002\u009e\u009c\u0003',
  '\u0002\u0002\u0002\u009f\u00a3\u0007\t\u0002\u0002\u00a0\u00a2\u0005',
  '\u0014\u000b\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003',
  '\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003',
  '\u0002\u0002\u0002\u00a4\u0013\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003',
  '\u0002\u0002\u0002\u00a6\u00ab\u0007\u000f\u0002\u0002\u00a7\u00a8\u0007',
  '\u000f\u0002\u0002\u00a8\u00a9\t\u0002\u0002\u0002\u00a9\u00ab\u0007',
  '\u000e\u0002\u0002\u00aa\u00a6\u0003\u0002\u0002\u0002\u00aa\u00a7\u0003',
  '\u0002\u0002\u0002\u00ab\u0015\u0003\u0002\u0002\u0002\u00ac\u00b0\u0007',
  '\u000e\u0002\u0002\u00ad\u00af\u0007\u000f\u0002\u0002\u00ae\u00ad\u0003',
  '\u0002\u0002\u0002\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003',
  '\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u0017\u0003',
  '\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007',
  '\u000e\u0002\u0002\u00b4\u0019\u0003\u0002\u0002\u0002\u00b5\u00b6\t',
  '\u0003\u0002\u0002\u00b6\u001b\u0003\u0002\u0002\u0002\u0014%*46=NX',
  'bt|\u0089\u0090\u0094\u0096\u009c\u00a3\u00aa\u00b0'
].join('');

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function(ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [
  null,
  "'sortBy'",
  "'('",
  "')'",
  "','",
  "'='",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "':'"
];

var symbolicNames = [
  null,
  null,
  null,
  null,
  null,
  'EQUALS',
  'BOOLEAN_OPERATOR',
  'PROX_OPERATOR',
  'RELATION_OPERATOR',
  'ANY',
  'ALL',
  'WITHIN',
  'VALUE',
  'SLASH_VALUE',
  'QUOTED',
  'INDEX',
  'SAME_RELATION',
  'HIGH_RELATION',
  'LOW_RELATION',
  'AND',
  'OR',
  'NOT',
  'PROX',
  'LETTER',
  'WS'
];

var ruleNames = [
  'parse',
  'sortClause',
  'statement',
  'operand_2',
  'operand',
  'parStatement',
  'proxOperand',
  'booleanOperator',
  'proxOperator',
  'modifier',
  'value',
  'index',
  'operator'
];

function CQLParser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(
    this,
    atn,
    decisionsToDFA,
    sharedContextCache
  );
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;
  return this;
}

CQLParser.prototype = Object.create(antlr4.Parser.prototype);
CQLParser.prototype.constructor = CQLParser;

Object.defineProperty(CQLParser.prototype, 'atn', {
  get: function() {
    return atn;
  }
});

CQLParser.EOF = antlr4.Token.EOF;
CQLParser.T__0 = 1;
CQLParser.T__1 = 2;
CQLParser.T__2 = 3;
CQLParser.T__3 = 4;
CQLParser.EQUALS = 5;
CQLParser.BOOLEAN_OPERATOR = 6;
CQLParser.PROX_OPERATOR = 7;
CQLParser.RELATION_OPERATOR = 8;
CQLParser.ANY = 9;
CQLParser.ALL = 10;
CQLParser.WITHIN = 11;
CQLParser.VALUE = 12;
CQLParser.SLASH_VALUE = 13;
CQLParser.QUOTED = 14;
CQLParser.INDEX = 15;
CQLParser.SAME_RELATION = 16;
CQLParser.HIGH_RELATION = 17;
CQLParser.LOW_RELATION = 18;
CQLParser.AND = 19;
CQLParser.OR = 20;
CQLParser.NOT = 21;
CQLParser.PROX = 22;
CQLParser.LETTER = 23;
CQLParser.WS = 24;

CQLParser.RULE_parse = 0;
CQLParser.RULE_sortClause = 1;
CQLParser.RULE_statement = 2;
CQLParser.RULE_operand_2 = 3;
CQLParser.RULE_operand = 4;
CQLParser.RULE_parStatement = 5;
CQLParser.RULE_proxOperand = 6;
CQLParser.RULE_booleanOperator = 7;
CQLParser.RULE_proxOperator = 8;
CQLParser.RULE_modifier = 9;
CQLParser.RULE_value = 10;
CQLParser.RULE_index = 11;
CQLParser.RULE_operator = 12;

function ParseContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_parse;
  return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.statement = function() {
  return this.getTypedRuleContext(StatementContext, 0);
};

ParseContext.prototype.EOF = function() {
  return this.getToken(CQLParser.EOF, 0);
};

ParseContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterParse(this);
  }
};

ParseContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitParse(this);
  }
};

CQLParser.ParseContext = ParseContext;

CQLParser.prototype.parse = function() {
  var localctx = new ParseContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, CQLParser.RULE_parse);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 26;
    this.statement(0);
    this.state = 27;
    this.match(CQLParser.EOF);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function SortClauseContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_sortClause;
  return this;
}

SortClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SortClauseContext.prototype.constructor = SortClauseContext;

SortClauseContext.prototype.index = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(IndexContext);
  } else {
    return this.getTypedRuleContext(IndexContext, i);
  }
};

SortClauseContext.prototype.modifier = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ModifierContext);
  } else {
    return this.getTypedRuleContext(ModifierContext, i);
  }
};

SortClauseContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterSortClause(this);
  }
};

SortClauseContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitSortClause(this);
  }
};

CQLParser.SortClauseContext = SortClauseContext;

CQLParser.prototype.sortClause = function() {
  var localctx = new SortClauseContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, CQLParser.RULE_sortClause);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 29;
    this.match(CQLParser.T__0);
    this.state = 33;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 30;
      this.index();
      this.state = 31;
      this.modifier();
      this.state = 35;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (_la === CQLParser.VALUE);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function StatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_statement;
  return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.operand_2 = function() {
  return this.getTypedRuleContext(Operand_2Context, 0);
};

StatementContext.prototype.proxOperand = function() {
  return this.getTypedRuleContext(ProxOperandContext, 0);
};

StatementContext.prototype.statement = function() {
  return this.getTypedRuleContext(StatementContext, 0);
};

StatementContext.prototype.booleanOperator = function() {
  return this.getTypedRuleContext(BooleanOperatorContext, 0);
};

StatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterStatement(this);
  }
};

StatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitStatement(this);
  }
};

CQLParser.prototype.statement = function(_p) {
  if (_p === undefined) {
    _p = 0;
  }
  var _parentctx = this._ctx;
  var _parentState = this.state;
  var localctx = new StatementContext(this, this._ctx, _parentState);
  var _prevctx = localctx;
  var _startState = 4;
  this.enterRecursionRule(localctx, 4, CQLParser.RULE_statement, _p);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 40;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
    switch (la_) {
      case 1:
        this.state = 38;
        this.operand_2();
        break;

      case 2:
        this.state = 39;
        this.proxOperand();
        break;
    }
    this._ctx.stop = this._input.LT(-1);
    this.state = 52;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        if (this._parseListeners !== null) {
          this.triggerExitRuleEvent();
        }
        _prevctx = localctx;
        this.state = 50;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
        switch (la_) {
          case 1:
            localctx = new StatementContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(
              localctx,
              _startState,
              CQLParser.RULE_statement
            );
            this.state = 42;
            if (!this.precpred(this._ctx, 2)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 2)'
              );
            }

            this.state = 43;
            this.booleanOperator();
            this.state = 44;
            this.proxOperand();
            break;

          case 2:
            localctx = new StatementContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(
              localctx,
              _startState,
              CQLParser.RULE_statement
            );
            this.state = 46;
            if (!this.precpred(this._ctx, 1)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 1)'
              );
            }

            this.state = 47;
            this.booleanOperator();
            this.state = 48;
            this.operand_2();
            break;
        }
      }
      this.state = 54;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
    }
  } catch (error) {
    if (error instanceof antlr4.error.RecognitionException) {
      localctx.exception = error;
      this._errHandler.reportError(this, error);
      this._errHandler.recover(this, error);
    } else {
      throw error;
    }
  } finally {
    this.unrollRecursionContexts(_parentctx);
  }
  return localctx;
};

function Operand_2Context(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_operand_2;
  return this;
}

Operand_2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Operand_2Context.prototype.constructor = Operand_2Context;

Operand_2Context.prototype.operand = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(OperandContext);
  } else {
    return this.getTypedRuleContext(OperandContext, i);
  }
};

Operand_2Context.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterOperand_2(this);
  }
};

Operand_2Context.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitOperand_2(this);
  }
};

CQLParser.Operand_2Context = Operand_2Context;

CQLParser.prototype.operand_2 = function() {
  var localctx = new Operand_2Context(this, this._ctx, this.state);
  this.enterRule(localctx, 6, CQLParser.RULE_operand_2);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 55;
    this.operand();
    this.state = 59;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        this.state = 56;
        this.operand();
      }
      this.state = 61;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OperandContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_operand;
  return this;
}

OperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandContext.prototype.constructor = OperandContext;

OperandContext.prototype.copyFrom = function(ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function WithinStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

WithinStatementContext.prototype = Object.create(OperandContext.prototype);
WithinStatementContext.prototype.constructor = WithinStatementContext;

CQLParser.WithinStatementContext = WithinStatementContext;

WithinStatementContext.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

WithinStatementContext.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
};

WithinStatementContext.prototype.WITHIN = function() {
  return this.getToken(CQLParser.WITHIN, 0);
};

WithinStatementContext.prototype.modifier = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ModifierContext);
  } else {
    return this.getTypedRuleContext(ModifierContext, i);
  }
};
WithinStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterWithinStatement(this);
  }
};

WithinStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitWithinStatement(this);
  }
};

function IndexStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

IndexStatementContext.prototype = Object.create(OperandContext.prototype);
IndexStatementContext.prototype.constructor = IndexStatementContext;

CQLParser.IndexStatementContext = IndexStatementContext;

IndexStatementContext.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

IndexStatementContext.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
};

IndexStatementContext.prototype.INDEX = function() {
  return this.getToken(CQLParser.INDEX, 0);
};
IndexStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterIndexStatement(this);
  }
};

IndexStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitIndexStatement(this);
  }
};

function ValueStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ValueStatementContext.prototype = Object.create(OperandContext.prototype);
ValueStatementContext.prototype.constructor = ValueStatementContext;

CQLParser.ValueStatementContext = ValueStatementContext;

ValueStatementContext.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
};
ValueStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterValueStatement(this);
  }
};

ValueStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitValueStatement(this);
  }
};

function ParenthesisStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ParenthesisStatementContext.prototype = Object.create(OperandContext.prototype);
ParenthesisStatementContext.prototype.constructor = ParenthesisStatementContext;

CQLParser.ParenthesisStatementContext = ParenthesisStatementContext;

ParenthesisStatementContext.prototype.parStatement = function() {
  return this.getTypedRuleContext(ParStatementContext, 0);
};
ParenthesisStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterParenthesisStatement(this);
  }
};

ParenthesisStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitParenthesisStatement(this);
  }
};

function AnyStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

AnyStatementContext.prototype = Object.create(OperandContext.prototype);
AnyStatementContext.prototype.constructor = AnyStatementContext;

CQLParser.AnyStatementContext = AnyStatementContext;

AnyStatementContext.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

AnyStatementContext.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
};

AnyStatementContext.prototype.ANY = function() {
  return this.getToken(CQLParser.ANY, 0);
};

AnyStatementContext.prototype.modifier = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ModifierContext);
  } else {
    return this.getTypedRuleContext(ModifierContext, i);
  }
};
AnyStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterAnyStatement(this);
  }
};

AnyStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitAnyStatement(this);
  }
};

function ProxStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ProxStatementContext.prototype = Object.create(OperandContext.prototype);
ProxStatementContext.prototype.constructor = ProxStatementContext;

CQLParser.ProxStatementContext = ProxStatementContext;

ProxStatementContext.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

ProxStatementContext.prototype.proxOperand = function() {
  return this.getTypedRuleContext(ProxOperandContext, 0);
};

ProxStatementContext.prototype.EQUALS = function() {
  return this.getToken(CQLParser.EQUALS, 0);
};
ProxStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterProxStatement(this);
  }
};

ProxStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitProxStatement(this);
  }
};

function EqualsStatement_1Context(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

EqualsStatement_1Context.prototype = Object.create(OperandContext.prototype);
EqualsStatement_1Context.prototype.constructor = EqualsStatement_1Context;

CQLParser.EqualsStatement_1Context = EqualsStatement_1Context;

EqualsStatement_1Context.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

EqualsStatement_1Context.prototype.parStatement = function() {
  return this.getTypedRuleContext(ParStatementContext, 0);
};

EqualsStatement_1Context.prototype.EQUALS = function() {
  return this.getToken(CQLParser.EQUALS, 0);
};
EqualsStatement_1Context.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterEqualsStatement_1(this);
  }
};

EqualsStatement_1Context.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitEqualsStatement_1(this);
  }
};

function RelationStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

RelationStatementContext.prototype = Object.create(OperandContext.prototype);
RelationStatementContext.prototype.constructor = RelationStatementContext;

CQLParser.RelationStatementContext = RelationStatementContext;

RelationStatementContext.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

RelationStatementContext.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
};

RelationStatementContext.prototype.RELATION_OPERATOR = function() {
  return this.getToken(CQLParser.RELATION_OPERATOR, 0);
};
RelationStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterRelationStatement(this);
  }
};

RelationStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitRelationStatement(this);
  }
};

function EqualsStatement_2Context(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

EqualsStatement_2Context.prototype = Object.create(OperandContext.prototype);
EqualsStatement_2Context.prototype.constructor = EqualsStatement_2Context;

CQLParser.EqualsStatement_2Context = EqualsStatement_2Context;

EqualsStatement_2Context.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

EqualsStatement_2Context.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
};

EqualsStatement_2Context.prototype.EQUALS = function() {
  return this.getToken(CQLParser.EQUALS, 0);
};
EqualsStatement_2Context.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterEqualsStatement_2(this);
  }
};

EqualsStatement_2Context.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitEqualsStatement_2(this);
  }
};

function AllStatementContext(parser, ctx) {
  OperandContext.call(this, parser);
  this.op = null; // Token;
  OperandContext.prototype.copyFrom.call(this, ctx);
  return this;
}

AllStatementContext.prototype = Object.create(OperandContext.prototype);
AllStatementContext.prototype.constructor = AllStatementContext;

CQLParser.AllStatementContext = AllStatementContext;

AllStatementContext.prototype.index = function() {
  return this.getTypedRuleContext(IndexContext, 0);
};

AllStatementContext.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
};

AllStatementContext.prototype.ALL = function() {
  return this.getToken(CQLParser.ALL, 0);
};

AllStatementContext.prototype.modifier = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ModifierContext);
  } else {
    return this.getTypedRuleContext(ModifierContext, i);
  }
};
AllStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterAllStatement(this);
  }
};

AllStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitAllStatement(this);
  }
};

CQLParser.OperandContext = OperandContext;

CQLParser.prototype.operand = function() {
  var localctx = new OperandContext(this, this._ctx, this.state);
  this.enterRule(localctx, 8, CQLParser.RULE_operand);
  var _la = 0; // Token type
  try {
    this.state = 114;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
    switch (la_) {
      case 1:
        localctx = new ParenthesisStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.parStatement();
        break;

      case 2:
        localctx = new ProxStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 2);
        this.state = 63;
        this.index();
        this.state = 64;
        localctx.op = this.match(CQLParser.EQUALS);
        this.state = 65;
        this.proxOperand();
        break;

      case 3:
        localctx = new EqualsStatement_1Context(this, localctx);
        this.enterOuterAlt(localctx, 3);
        this.state = 67;
        this.index();
        this.state = 68;
        localctx.op = this.match(CQLParser.EQUALS);
        this.state = 69;
        this.parStatement();
        break;

      case 4:
        localctx = new AnyStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 4);
        this.state = 71;
        this.index();
        this.state = 72;
        localctx.op = this.match(CQLParser.ANY);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === CQLParser.SLASH_VALUE) {
          this.state = 73;
          this.modifier();
          this.state = 78;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 79;
        this.value();
        break;

      case 5:
        localctx = new AllStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 5);
        this.state = 81;
        this.index();
        this.state = 82;
        localctx.op = this.match(CQLParser.ALL);
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === CQLParser.SLASH_VALUE) {
          this.state = 83;
          this.modifier();
          this.state = 88;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 89;
        this.value();
        break;

      case 6:
        localctx = new WithinStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 6);
        this.state = 91;
        this.index();
        this.state = 92;
        localctx.op = this.match(CQLParser.WITHIN);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === CQLParser.SLASH_VALUE) {
          this.state = 93;
          this.modifier();
          this.state = 98;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 99;
        this.value();
        break;

      case 7:
        localctx = new IndexStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 7);
        this.state = 101;
        this.index();
        this.state = 102;
        localctx.op = this.match(CQLParser.INDEX);
        this.state = 103;
        this.value();
        break;

      case 8:
        localctx = new RelationStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 8);
        this.state = 105;
        this.index();
        this.state = 106;
        localctx.op = this.match(CQLParser.RELATION_OPERATOR);
        this.state = 107;
        this.value();
        break;

      case 9:
        localctx = new EqualsStatement_2Context(this, localctx);
        this.enterOuterAlt(localctx, 9);
        this.state = 109;
        this.index();
        this.state = 110;
        localctx.op = this.match(CQLParser.EQUALS);
        this.state = 111;
        this.value();
        break;

      case 10:
        localctx = new ValueStatementContext(this, localctx);
        this.enterOuterAlt(localctx, 10);
        this.state = 113;
        this.value();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ParStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_parStatement;
  return this;
}

ParStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype
);
ParStatementContext.prototype.constructor = ParStatementContext;

ParStatementContext.prototype.statement = function() {
  return this.getTypedRuleContext(StatementContext, 0);
};

ParStatementContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterParStatement(this);
  }
};

ParStatementContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitParStatement(this);
  }
};

CQLParser.ParStatementContext = ParStatementContext;

CQLParser.prototype.parStatement = function() {
  var localctx = new ParStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 10, CQLParser.RULE_parStatement);
  try {
    this.state = 122;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(CQLParser.T__1);
        this.state = 117;
        this.statement(0);
        this.state = 118;
        this.match(CQLParser.T__2);
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 120;
        this.match(CQLParser.T__1);
        this.state = 121;
        this.match(CQLParser.T__2);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ProxOperandContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_proxOperand;
  return this;
}

ProxOperandContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype
);
ProxOperandContext.prototype.constructor = ProxOperandContext;

ProxOperandContext.prototype.proxOperand = function() {
  return this.getTypedRuleContext(ProxOperandContext, 0);
};

ProxOperandContext.prototype.value = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ValueContext);
  } else {
    return this.getTypedRuleContext(ValueContext, i);
  }
};

ProxOperandContext.prototype.proxOperator = function() {
  return this.getTypedRuleContext(ProxOperatorContext, 0);
};

ProxOperandContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterProxOperand(this);
  }
};

ProxOperandContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitProxOperand(this);
  }
};

CQLParser.ProxOperandContext = ProxOperandContext;

CQLParser.prototype.proxOperand = function() {
  var localctx = new ProxOperandContext(this, this._ctx, this.state);
  this.enterRule(localctx, 12, CQLParser.RULE_proxOperand);
  var _la = 0; // Token type
  try {
    this.state = 148;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 13, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(CQLParser.T__1);
        this.state = 125;
        this.proxOperand();
        this.state = 126;
        this.match(CQLParser.T__2);
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 128;
        this.value();
        this.state = 129;
        this.proxOperator();
        this.state = 130;
        this.value();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 132;
        this.value();
        this.state = 133;
        this.proxOperator();
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === CQLParser.T__1) {
          this.state = 134;
          this.match(CQLParser.T__1);
        }

        this.state = 137;
        this.value();
        this.state = 142;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 138;
            this.match(CQLParser.T__3);
            this.state = 139;
            this.value();
          }
          this.state = 144;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        }

        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
        if (la_ === 1) {
          this.state = 145;
          this.match(CQLParser.T__2);
        }
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function BooleanOperatorContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_booleanOperator;
  return this;
}

BooleanOperatorContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype
);
BooleanOperatorContext.prototype.constructor = BooleanOperatorContext;

BooleanOperatorContext.prototype.BOOLEAN_OPERATOR = function() {
  return this.getToken(CQLParser.BOOLEAN_OPERATOR, 0);
};

BooleanOperatorContext.prototype.modifier = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ModifierContext);
  } else {
    return this.getTypedRuleContext(ModifierContext, i);
  }
};

BooleanOperatorContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterBooleanOperator(this);
  }
};

BooleanOperatorContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitBooleanOperator(this);
  }
};

CQLParser.BooleanOperatorContext = BooleanOperatorContext;

CQLParser.prototype.booleanOperator = function() {
  var localctx = new BooleanOperatorContext(this, this._ctx, this.state);
  this.enterRule(localctx, 14, CQLParser.RULE_booleanOperator);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 150;
    this.match(CQLParser.BOOLEAN_OPERATOR);
    this.state = 154;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === CQLParser.SLASH_VALUE) {
      this.state = 151;
      this.modifier();
      this.state = 156;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ProxOperatorContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_proxOperator;
  return this;
}

ProxOperatorContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype
);
ProxOperatorContext.prototype.constructor = ProxOperatorContext;

ProxOperatorContext.prototype.PROX_OPERATOR = function() {
  return this.getToken(CQLParser.PROX_OPERATOR, 0);
};

ProxOperatorContext.prototype.modifier = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ModifierContext);
  } else {
    return this.getTypedRuleContext(ModifierContext, i);
  }
};

ProxOperatorContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterProxOperator(this);
  }
};

ProxOperatorContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitProxOperator(this);
  }
};

CQLParser.ProxOperatorContext = ProxOperatorContext;

CQLParser.prototype.proxOperator = function() {
  var localctx = new ProxOperatorContext(this, this._ctx, this.state);
  this.enterRule(localctx, 16, CQLParser.RULE_proxOperator);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 157;
    this.match(CQLParser.PROX_OPERATOR);
    this.state = 161;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === CQLParser.SLASH_VALUE) {
      this.state = 158;
      this.modifier();
      this.state = 163;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ModifierContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_modifier;
  return this;
}

ModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierContext.prototype.constructor = ModifierContext;

ModifierContext.prototype.SLASH_VALUE = function() {
  return this.getToken(CQLParser.SLASH_VALUE, 0);
};

ModifierContext.prototype.VALUE = function() {
  return this.getToken(CQLParser.VALUE, 0);
};

ModifierContext.prototype.RELATION_OPERATOR = function() {
  return this.getToken(CQLParser.RELATION_OPERATOR, 0);
};

ModifierContext.prototype.EQUALS = function() {
  return this.getToken(CQLParser.EQUALS, 0);
};

ModifierContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterModifier(this);
  }
};

ModifierContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitModifier(this);
  }
};

CQLParser.ModifierContext = ModifierContext;

CQLParser.prototype.modifier = function() {
  var localctx = new ModifierContext(this, this._ctx, this.state);
  this.enterRule(localctx, 18, CQLParser.RULE_modifier);
  var _la = 0; // Token type
  try {
    this.state = 168;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(CQLParser.SLASH_VALUE);
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 165;
        this.match(CQLParser.SLASH_VALUE);
        this.state = 166;
        _la = this._input.LA(1);
        if (
          !(_la === CQLParser.EQUALS || _la === CQLParser.RELATION_OPERATOR)
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 167;
        this.match(CQLParser.VALUE);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ValueContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_value;
  return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.VALUE = function() {
  return this.getToken(CQLParser.VALUE, 0);
};

ValueContext.prototype.SLASH_VALUE = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(CQLParser.SLASH_VALUE);
  } else {
    return this.getToken(CQLParser.SLASH_VALUE, i);
  }
};

ValueContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterValue(this);
  }
};

ValueContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitValue(this);
  }
};

CQLParser.ValueContext = ValueContext;

CQLParser.prototype.value = function() {
  var localctx = new ValueContext(this, this._ctx, this.state);
  this.enterRule(localctx, 20, CQLParser.RULE_value);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 170;
    this.match(CQLParser.VALUE);
    this.state = 174;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        this.state = 171;
        this.match(CQLParser.SLASH_VALUE);
      }
      this.state = 176;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function IndexContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_index;
  return this;
}

IndexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexContext.prototype.constructor = IndexContext;

IndexContext.prototype.VALUE = function() {
  return this.getToken(CQLParser.VALUE, 0);
};

IndexContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterIndex(this);
  }
};

IndexContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitIndex(this);
  }
};

CQLParser.IndexContext = IndexContext;

CQLParser.prototype.index = function() {
  var localctx = new IndexContext(this, this._ctx, this.state);
  this.enterRule(localctx, 22, CQLParser.RULE_index);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 177;
    this.match(CQLParser.VALUE);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OperatorContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = CQLParser.RULE_operator;
  return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.EQUALS = function() {
  return this.getToken(CQLParser.EQUALS, 0);
};

OperatorContext.prototype.ANY = function() {
  return this.getToken(CQLParser.ANY, 0);
};

OperatorContext.prototype.ALL = function() {
  return this.getToken(CQLParser.ALL, 0);
};

OperatorContext.prototype.WITHIN = function() {
  return this.getToken(CQLParser.WITHIN, 0);
};

OperatorContext.prototype.INDEX = function() {
  return this.getToken(CQLParser.INDEX, 0);
};

OperatorContext.prototype.RELATION_OPERATOR = function() {
  return this.getToken(CQLParser.RELATION_OPERATOR, 0);
};

OperatorContext.prototype.BOOLEAN_OPERATOR = function() {
  return this.getToken(CQLParser.BOOLEAN_OPERATOR, 0);
};

OperatorContext.prototype.PROX_OPERATOR = function() {
  return this.getToken(CQLParser.PROX_OPERATOR, 0);
};

OperatorContext.prototype.enterRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.enterOperator(this);
  }
};

OperatorContext.prototype.exitRule = function(listener) {
  if (listener instanceof CQLListener) {
    listener.exitOperator(this);
  }
};

CQLParser.OperatorContext = OperatorContext;

CQLParser.prototype.operator = function() {
  var localctx = new OperatorContext(this, this._ctx, this.state);
  this.enterRule(localctx, 24, CQLParser.RULE_operator);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 179;
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << CQLParser.EQUALS) |
            (1 << CQLParser.BOOLEAN_OPERATOR) |
            (1 << CQLParser.PROX_OPERATOR) |
            (1 << CQLParser.RELATION_OPERATOR) |
            (1 << CQLParser.ANY) |
            (1 << CQLParser.ALL) |
            (1 << CQLParser.WITHIN) |
            (1 << CQLParser.INDEX))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

CQLParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
  switch (ruleIndex) {
    case 2:
      return this.statement_sempred(localctx, predIndex);
    default:
      throw 'No predicate with index:' + ruleIndex;
  }
};

CQLParser.prototype.statement_sempred = function(localctx, predIndex) {
  switch (predIndex) {
    case 0:
      return this.precpred(this._ctx, 2);
    case 1:
      return this.precpred(this._ctx, 1);
    default:
      throw 'No predicate with index:' + predIndex;
  }
};

exports.CQLParser = CQLParser;
