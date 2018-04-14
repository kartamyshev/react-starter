import * as React from 'react';
import { getContextForChunk } from '@utils/getContextForChunk';
import { increment, decrement, changeName } from '@store/actions';

export class Provider extends React.Component<{
  chunk: string;
}, any> {
  public state = this.getInitialState();

  public render() {
    const Context = getContextForChunk(this.props.chunk);
    return (
      <Context.Provider value={{
        state: this.state,
        actions: this.actions
      }}>
        { this.props.children }
      </Context.Provider>
    );
  }

  private getInitialState() {
    if (this.props.chunk === 'Counter') {
      return {
        counter: 0,
      };
    }
  }

  private get actions() {
    if (this.props.chunk === 'Counter') {
      return {
        increment: () => this.setState(increment),
        decrement: () => this.setState(decrement),
      };
    }
  }

}
