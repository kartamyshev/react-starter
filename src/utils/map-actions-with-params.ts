export const mapActionsWithParams = (actions: any, context: any) => {
  return Object.keys(actions).reduce((agg: any, action: any) => {
    agg[action] = (params: any) => {
      context.setState(actions[action](params));
    };
    return agg;
  }, {});
};
