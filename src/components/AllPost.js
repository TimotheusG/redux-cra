import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

const mapStateToProps = state => ({
    ...state
   })

class AllPost extends Component {
  render() {
    return (
    <div>
      <h1>All Posts</h1>
      {this.props.postReducer.map((post) => <Post key={post.id} post={post}/>)}
    <pre>{JSON.stringify(this.props)}</pre>
    </div>    
    );
   }
}

export default  connect(mapStateToProps)(AllPost);