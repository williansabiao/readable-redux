import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import PostListItem from './../PostListItem'

class Posts extends Component {
  render() {
    return (
      <div>
        <PostListItem
          title="Test"
          author="Will"
          comments={0}
          score={5.6}
          voteCallback={function(){}}
          editURL="lala"
          deleteURL="lala"
        />
      </div>
    )
  }
}

export default Posts
