import React from 'react'
// import PropTypes from 'prop-types'

import PostListItem from '../PostListItem'

const Posts = () => (
  <div>
    <PostListItem
      title="Test"
      author="Will"
      comments={0}
      score={5.6}
      voteCallback={() => {}}
      editURL="lala"
      deleteURL="lala"
    />
  </div>
)

export default Posts
