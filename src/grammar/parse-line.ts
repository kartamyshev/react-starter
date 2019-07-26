import antlr4 from 'antlr4';
import { CQLLexer } from './CQLLexer';
import { CQLParser } from './CQLParser';
import { CQLListener } from './CQLListener';

const input = 'false';

class Listener extends CQLListener {
  // antlr4 -Dlanguage=JavaScript CQL.g4
  constructor() {
    super();
  }

  public enterParse(ctx) {
    console.log('enterParse ->', ctx.getText());
  }
  public exitParse(ctx) {
    console.log('exitParse ->', ctx.getText());
  }
}

export const parseLine = () => {
  const chars = new antlr4.InputStream(input);
  const lexer = new CQLLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CQLParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.parse();
  const listener = new Listener();

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
};
