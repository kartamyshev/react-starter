// Generated from ./src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CQLListener = require('./CQLListener').CQLListener;
var grammarFileName = "CQL.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\u0012\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002",
    "\u0004\u0002\u0004\u0002\u0002\u0002\u0010\u0002\u0006\u0003\u0002\u0002",
    "\u0002\u0004\u000e\u0003\u0002\u0002\u0002\u0006\u000b\u0005\u0004\u0003",
    "\u0002\u0007\b\u0007\u0003\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t",
    "\u0007\u0003\u0002\u0002\u0002\n\r\u0003\u0002\u0002\u0002\u000b\t\u0003",
    "\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003\u0002",
    "\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\u000e\u000f\u0007\u0005",
    "\u0002\u0002\u000f\u0010\u0007\u0004\u0002\u0002\u0010\u0005\u0003\u0002",
    "\u0002\u0002\u0003\u000b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '", "' a = 12;'" ];

var symbolicNames = [ null, null, null, "VARIABLE" ];

var ruleNames =  [ "init", "statement" ];

function CQLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CQLParser.prototype = Object.create(antlr4.Parser.prototype);
CQLParser.prototype.constructor = CQLParser;

Object.defineProperty(CQLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CQLParser.EOF = antlr4.Token.EOF;
CQLParser.T__0 = 1;
CQLParser.T__1 = 2;
CQLParser.VARIABLE = 3;

CQLParser.RULE_init = 0;
CQLParser.RULE_statement = 1;

function InitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CQLParser.RULE_init;
    return this;
}

InitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitContext.prototype.constructor = InitContext;

InitContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

InitContext.prototype.enterRule = function(listener) {
    if(listener instanceof CQLListener ) {
        listener.enterInit(this);
	}
};

InitContext.prototype.exitRule = function(listener) {
    if(listener instanceof CQLListener ) {
        listener.exitInit(this);
	}
};




CQLParser.InitContext = InitContext;

CQLParser.prototype.init = function() {

    var localctx = new InitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CQLParser.RULE_init);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.statement();
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CQLParser.T__0) {
            this.state = 5;
            this.match(CQLParser.T__0);
            this.state = 6;
            this.statement();
            this.state = 11;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CQLParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.VARIABLE = function() {
    return this.getToken(CQLParser.VARIABLE, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CQLListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CQLListener ) {
        listener.exitStatement(this);
	}
};




CQLParser.StatementContext = StatementContext;

CQLParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CQLParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(CQLParser.VARIABLE);
        this.state = 13;
        this.match(CQLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
