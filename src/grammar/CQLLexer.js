// Generated from CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

var serializedATN = [
  '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0002\u0003\u0010\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002',
  '\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002',
  '\u0003\u0002\u0005\u0002\u000f\n\u0002\u0002\u0002\u0003\u0003\u0003',
  '\u0003\u0002\u0002\u0002\u0010\u0002\u0003\u0003\u0002\u0002\u0002\u0003',
  '\u000e\u0003\u0002\u0002\u0002\u0005\u0006\u0007v\u0002\u0002\u0006',
  '\u0007\u0007t\u0002\u0002\u0007\b\u0007w\u0002\u0002\b\u000f\u0007g',
  '\u0002\u0002\t\n\u0007h\u0002\u0002\n\u000b\u0007c\u0002\u0002\u000b',
  '\f\u0007n\u0002\u0002\f\r\u0007u\u0002\u0002\r\u000f\u0007g\u0002\u0002',
  '\u000e\u0005\u0003\u0002\u0002\u0002\u000e\t\u0003\u0002\u0002\u0002',
  '\u000f\u0004\u0003\u0002\u0002\u0002\u0004\u0002\u000e\u0002'
].join('');

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function(ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

function CQLLexer(input) {
  antlr4.Lexer.call(this, input);
  this._interp = new antlr4.atn.LexerATNSimulator(
    this,
    atn,
    decisionsToDFA,
    new antlr4.PredictionContextCache()
  );
  return this;
}

CQLLexer.prototype = Object.create(antlr4.Lexer.prototype);
CQLLexer.prototype.constructor = CQLLexer;

Object.defineProperty(CQLLexer.prototype, 'atn', {
  get: function() {
    return atn;
  }
});

CQLLexer.EOF = antlr4.Token.EOF;
CQLLexer.BOOLEAN = 1;

CQLLexer.prototype.channelNames = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

CQLLexer.prototype.modeNames = ['DEFAULT_MODE'];

CQLLexer.prototype.literalNames = [];

CQLLexer.prototype.symbolicNames = [null, 'BOOLEAN'];

CQLLexer.prototype.ruleNames = ['BOOLEAN'];

CQLLexer.prototype.grammarFileName = 'CQL.g4';

exports.CQLLexer = CQLLexer;
