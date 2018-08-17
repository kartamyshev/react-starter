import * as React from 'react';

export let Context;
export class Provider extends React.Component<
  {
    context: React.Context<any>;
    parts: any;
  },
  any
> {
  public state = this.initializeState();
  constructor(props) {
    super(props);
    Context = this.props.context;
  }

  public render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }

  private initializeState() {
    const { parts } = this.props;
    return Object.keys(parts).reduce((state, part) => {
      state[part] = parts[part].call(null, this);
      return state;
    }, {});
  }
}
