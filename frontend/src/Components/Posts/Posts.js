import React from 'react'
import PropTypes from 'prop-types'

import PostListItem from '../PostListItem'

import './posts.css'

const Posts = ({
  posts,
  onDelete,
  onVote,
}) => (
  <div className="post-list">
    {posts.length > 0 && posts.map(post => (
      <PostListItem
        key={post.id}
        {...post}
        score={post.voteScore}
        voteCallback={() => {}}
        editURL={`/edit/${post.id}`}
        onDelete={onDelete(post.id)}
        onVote={onVote}
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
  onDelete: PropTypes.func,
  onVote: PropTypes.func.isRequired,
}

Posts.defaultProps = {
  posts: [],
  onDelete: () => {},
}

export default Posts
