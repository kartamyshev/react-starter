import * as React from 'react';
import { getContextForChunk } from '@utils/getContextForChunk';
import { getStateForChunk } from '@utils/getStateForChunk';
import { getActionsForChunk } from '@utils/getActionsForChunk';

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
