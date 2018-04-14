import * as React from 'react';
import {
  getContextForChunk,
  getStateForChunk,
  getActionsForChunk
} from './setupProvider';

export class Provider extends React.Component<{
  chunk: string;
}, any> {
  public state = getStateForChunk(this.props.chunk);
  public actions = getActionsForChunk(this.props.chunk, { context: this });
  public Context = getContextForChunk(this.props.chunk);

  public render() {
    const { state, actions } = this;
    return (
      <this.Context.Provider value={{ state, actions }}>
        { this.props.children }
      </this.Context.Provider>
    );
  }
}
