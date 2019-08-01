import antlr4 from 'antlr4';
import { CQLLexer } from './CQLLexer';
import { CQLParser } from './CQLParser';
import { Listener } from './listener';

export const parseLine = (input: string) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new CQLLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CQLParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.init();
  const listener = new Listener();

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener.result;
};
