import React from 'react'
import PropTypes from 'prop-types'

import PostListItem from '../PostListItem'

const Posts = ({
  posts,
}) => (
  <div>
    {posts.length > 0 && posts.map(post => (
      <PostListItem
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author}
        comments={post.commentCount}
        score={post.voteScore}
        voteCallback={() => {}}
        editURL={`/edit/${post.id}`}
        deleteURL={`/delete/${post.id}`}
      />
    ))}
    {posts.length < 1 && (
      <p>
        No posts to show.
      </p>
    )}
  </div>
)

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

Posts.defaultProps = {
  posts: [],
}

export default Posts
