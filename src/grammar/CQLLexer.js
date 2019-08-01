// Generated from ./src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b&\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0006\u0005\u0017\n\u0005\r\u0005\u000e\u0005\u0018\u0003",
    "\u0006\u0006\u0006\u001c\n\u0006\r\u0006\u000e\u0006\u001d\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0006\u0007#\n\u0007\r\u0007\u000e\u0007$\u0002",
    "\u0002\b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u0003\u0002\u0005\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"",
    "\u000b\u0002\u000b\f\u000f\u000f\"\"$$*+..11<<>@\u0002(\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f",
    "\u0003\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002\u0002\u0007\u0013",
    "\u0003\u0002\u0002\u0002\t\u0016\u0003\u0002\u0002\u0002\u000b\u001b",
    "\u0003\u0002\u0002\u0002\r\"\u0003\u0002\u0002\u0002\u000f\u0010\u0007",
    "}\u0002\u0002\u0010\u0004\u0003\u0002\u0002\u0002\u0011\u0012\u0007",
    ".\u0002\u0002\u0012\u0006\u0003\u0002\u0002\u0002\u0013\u0014\u0007",
    "\u007f\u0002\u0002\u0014\b\u0003\u0002\u0002\u0002\u0015\u0017\t\u0002",
    "\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002",
    "\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002",
    "\u0002\u0002\u0019\n\u0003\u0002\u0002\u0002\u001a\u001c\t\u0003\u0002",
    "\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
    "\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f \b\u0006\u0002\u0002",
    " \f\u0003\u0002\u0002\u0002!#\n\u0004\u0002\u0002\"!\u0003\u0002\u0002",
    "\u0002#$\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%\u000e\u0003\u0002\u0002\u0002\u0006\u0002\u0018",
    "\u001d$\u0003\b\u0002\u0002"].join("");


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
CQLLexer.T__2 = 3;
CQLLexer.INT = 4;
CQLLexer.WS = 5;
CQLLexer.LETTER = 6;

CQLLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CQLLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CQLLexer.prototype.literalNames = [ null, "'{'", "','", "'}'" ];

CQLLexer.prototype.symbolicNames = [ null, null, null, null, "INT", "WS", 
                                     "LETTER" ];

CQLLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "INT", "WS", "LETTER" ];

CQLLexer.prototype.grammarFileName = "CQL.g4";



exports.CQLLexer = CQLLexer;

