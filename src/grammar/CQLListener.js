// Generated from ./src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CQLParser.
function CQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CQLListener.prototype.constructor = CQLListener;

// Enter a parse tree produced by CQLParser#init.
CQLListener.prototype.enterInit = function(ctx) {
};

// Exit a parse tree produced by CQLParser#init.
CQLListener.prototype.exitInit = function(ctx) {
};


// Enter a parse tree produced by CQLParser#statement.
CQLListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by CQLParser#statement.
CQLListener.prototype.exitStatement = function(ctx) {
};



exports.CQLListener = CQLListener;