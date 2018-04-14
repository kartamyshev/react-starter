import * as React from 'react';
import { withContext } from '@utils/index';
import { Button } from '@components/Button/Button';

import './Posts.less';

@withContext('Posts')
export class Posts extends React.Component<{
  own?: any;
  derived?: any;
  actions?: any;
}, any> {
  public render() {
    const { post } = this.props.derived;

    return (
      <div className="posts">
        <div>
          { !post && 'Post will appear here' }
          { post && post.body }
        </div>
        <Button
          disabled={false}
          className="button"
          text="Fetch Data"
          action={this.fetchData}
        />
      </div>
    );
  }

  private fetchData = () => {
    const {
      startFetching,
      fetchData,
      endFething,
      attachPost
    } = this.props.actions;

    startFetching();
    fetchData()
      .then((post: any) => {
        endFething();
        attachPost(post);
    });
  }
}
