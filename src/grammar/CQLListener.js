// Generated from CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CQLParser.
function CQLListener() {
  antlr4.tree.ParseTreeListener.call(this);
  return this;
}

CQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CQLListener.prototype.constructor = CQLListener;

// Enter a parse tree produced by CQLParser#parse.
CQLListener.prototype.enterParse = function(ctx) {};

// Exit a parse tree produced by CQLParser#parse.
CQLListener.prototype.exitParse = function(ctx) {};

// Enter a parse tree produced by CQLParser#value.
CQLListener.prototype.enterValue = function(ctx) {};

// Exit a parse tree produced by CQLParser#value.
CQLListener.prototype.exitValue = function(ctx) {};

exports.CQLListener = CQLListener;
