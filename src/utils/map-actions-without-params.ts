export const mapActionsWithoutParams = (actions: any, context: any) => {
  return Object.keys(actions).reduce((agg: any, action: any) => {
    agg[action] = () => { context.setState(actions[action]); };
    return agg;
  }, {});
};
