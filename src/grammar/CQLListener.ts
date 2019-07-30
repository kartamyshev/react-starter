// Generated from src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
const antlr4 = require('antlr4/index');

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

// Enter a parse tree produced by CQLParser#sortClause.
CQLListener.prototype.enterSortClause = function(ctx) {};

// Exit a parse tree produced by CQLParser#sortClause.
CQLListener.prototype.exitSortClause = function(ctx) {};

// Enter a parse tree produced by CQLParser#statement.
CQLListener.prototype.enterStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#statement.
CQLListener.prototype.exitStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#operand_2.
CQLListener.prototype.enterOperand_2 = function(ctx) {};

// Exit a parse tree produced by CQLParser#operand_2.
CQLListener.prototype.exitOperand_2 = function(ctx) {};

// Enter a parse tree produced by CQLParser#parenthesisStatement.
CQLListener.prototype.enterParenthesisStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#parenthesisStatement.
CQLListener.prototype.exitParenthesisStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#proxStatement.
CQLListener.prototype.enterProxStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#proxStatement.
CQLListener.prototype.exitProxStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#equalsStatement_1.
CQLListener.prototype.enterEqualsStatement_1 = function(ctx) {};

// Exit a parse tree produced by CQLParser#equalsStatement_1.
CQLListener.prototype.exitEqualsStatement_1 = function(ctx) {};

// Enter a parse tree produced by CQLParser#anyStatement.
CQLListener.prototype.enterAnyStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#anyStatement.
CQLListener.prototype.exitAnyStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#allStatement.
CQLListener.prototype.enterAllStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#allStatement.
CQLListener.prototype.exitAllStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#withinStatement.
CQLListener.prototype.enterWithinStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#withinStatement.
CQLListener.prototype.exitWithinStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#indexStatement.
CQLListener.prototype.enterIndexStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#indexStatement.
CQLListener.prototype.exitIndexStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#relationStatement.
CQLListener.prototype.enterRelationStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#relationStatement.
CQLListener.prototype.exitRelationStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#equalsStatement_2.
CQLListener.prototype.enterEqualsStatement_2 = function(ctx) {};

// Exit a parse tree produced by CQLParser#equalsStatement_2.
CQLListener.prototype.exitEqualsStatement_2 = function(ctx) {};

// Enter a parse tree produced by CQLParser#valueStatement.
CQLListener.prototype.enterValueStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#valueStatement.
CQLListener.prototype.exitValueStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#parStatement.
CQLListener.prototype.enterParStatement = function(ctx) {};

// Exit a parse tree produced by CQLParser#parStatement.
CQLListener.prototype.exitParStatement = function(ctx) {};

// Enter a parse tree produced by CQLParser#proxOperand.
CQLListener.prototype.enterProxOperand = function(ctx) {};

// Exit a parse tree produced by CQLParser#proxOperand.
CQLListener.prototype.exitProxOperand = function(ctx) {};

// Enter a parse tree produced by CQLParser#booleanOperator.
CQLListener.prototype.enterBooleanOperator = function(ctx) {};

// Exit a parse tree produced by CQLParser#booleanOperator.
CQLListener.prototype.exitBooleanOperator = function(ctx) {};

// Enter a parse tree produced by CQLParser#proxOperator.
CQLListener.prototype.enterProxOperator = function(ctx) {};

// Exit a parse tree produced by CQLParser#proxOperator.
CQLListener.prototype.exitProxOperator = function(ctx) {};

// Enter a parse tree produced by CQLParser#modifier.
CQLListener.prototype.enterModifier = function(ctx) {};

// Exit a parse tree produced by CQLParser#modifier.
CQLListener.prototype.exitModifier = function(ctx) {};

// Enter a parse tree produced by CQLParser#value.
CQLListener.prototype.enterValue = function(ctx) {};

// Exit a parse tree produced by CQLParser#value.
CQLListener.prototype.exitValue = function(ctx) {};

// Enter a parse tree produced by CQLParser#index.
CQLListener.prototype.enterIndex = function(ctx) {};

// Exit a parse tree produced by CQLParser#index.
CQLListener.prototype.exitIndex = function(ctx) {};

// Enter a parse tree produced by CQLParser#operator.
CQLListener.prototype.enterOperator = function(ctx) {};

// Exit a parse tree produced by CQLParser#operator.
CQLListener.prototype.exitOperator = function(ctx) {};

module.exports = { CQLListener };
