// Generated from ./src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0005!\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004 \n\u0004\u0002\u0002\u0005\u0003\u0003\u0005\u0004\u0007\u0005",
    "\u0003\u0002\u0002\u0002\"\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0003",
    "\t\u0003\u0002\u0002\u0002\u0005\u000b\u0003\u0002\u0002\u0002\u0007",
    "\u001f\u0003\u0002\u0002\u0002\t\n\u0007\"\u0002\u0002\n\u0004\u0003",
    "\u0002\u0002\u0002\u000b\f\u0007\"\u0002\u0002\f\r\u0007c\u0002\u0002",
    "\r\u000e\u0007\"\u0002\u0002\u000e\u000f\u0007?\u0002\u0002\u000f\u0010",
    "\u0007\"\u0002\u0002\u0010\u0011\u00073\u0002\u0002\u0011\u0012\u0007",
    "4\u0002\u0002\u0012\u0013\u0007=\u0002\u0002\u0013\u0006\u0003\u0002",
    "\u0002\u0002\u0014\u0015\u0007x\u0002\u0002\u0015\u0016\u0007c\u0002",
    "\u0002\u0016 \u0007t\u0002\u0002\u0017\u0018\u0007n\u0002\u0002\u0018",
    "\u0019\u0007g\u0002\u0002\u0019 \u0007v\u0002\u0002\u001a\u001b\u0007",
    "e\u0002\u0002\u001b\u001c\u0007q\u0002\u0002\u001c\u001d\u0007p\u0002",
    "\u0002\u001d\u001e\u0007u\u0002\u0002\u001e \u0007v\u0002\u0002\u001f",
    "\u0014\u0003\u0002\u0002\u0002\u001f\u0017\u0003\u0002\u0002\u0002\u001f",
    "\u001a\u0003\u0002\u0002\u0002 \b\u0003\u0002\u0002\u0002\u0004\u0002",
    "\u001f\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CQLLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CQLLexer.prototype = Object.create(antlr4.Lexer.prototype);
CQLLexer.prototype.constructor = CQLLexer;

Object.defineProperty(CQLLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

CQLLexer.EOF = antlr4.Token.EOF;
CQLLexer.T__0 = 1;
CQLLexer.T__1 = 2;
CQLLexer.VARIABLE = 3;

CQLLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CQLLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CQLLexer.prototype.literalNames = [ null, "' '", "' a = 12;'" ];

CQLLexer.prototype.symbolicNames = [ null, null, null, "VARIABLE" ];

CQLLexer.prototype.ruleNames = [ "T__0", "T__1", "VARIABLE" ];

CQLLexer.prototype.grammarFileName = "CQL.g4";



exports.CQLLexer = CQLLexer;

