// Generated from CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CQLListener = require('./CQLListener').CQLListener;
var grammarFileName = 'CQL.g4';

var serializedATN = [
  '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0003\u0003\f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003',
  '\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004',
  '\u0002\u0004\u0002\u0002\u0002\t\u0002\u0006\u0003\u0002\u0002\u0002',
  '\u0004\t\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002',
  '\u0007\b\u0007\u0002\u0002\u0003\b\u0003\u0003\u0002\u0002\u0002\t\n',
  '\u0007\u0003\u0002\u0002\n\u0005\u0003\u0002\u0002\u0002\u0002'
].join('');

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function(ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [];

var symbolicNames = [null, 'BOOLEAN'];

var ruleNames = ['parse', 'value'];

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
CQLParser.BOOLEAN = 1;

CQLParser.RULE_parse = 0;
CQLParser.RULE_value = 1;

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

ParseContext.prototype.value = function() {
  return this.getTypedRuleContext(ValueContext, 0);
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
    this.state = 4;
    this.value();
    this.state = 5;
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

ValueContext.prototype.BOOLEAN = function() {
  return this.getToken(CQLParser.BOOLEAN, 0);
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
  this.enterRule(localctx, 2, CQLParser.RULE_value);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 7;
    this.match(CQLParser.BOOLEAN);
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

exports.CQLParser = CQLParser;
