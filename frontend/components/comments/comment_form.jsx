import React from 'react';
import { merge } from 'lodash';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: this.props.postId,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const comment = merge({}, this.state);
    this.props.action(comment);
    this.setState({body: ''})
  }

  update (e) {
    this.setState({ body: e.target.value });
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render () {
    return (
      <div className='total-comment-form-div'>
        <div className='photo-and-comment-form'>
          <div className='comment-photo-div'></div>
          <div className='comment-form-div'>
            <input type='text'
              className='comment-input'
              value={this.state.body}
              onKeyPress={this.handleKeyPress}
              onChange={this.update}
              placeholder='Leave a comment'
              />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm
