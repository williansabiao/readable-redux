import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  Menu,
  MenuAnchor,
  MenuItem,
  Typography,
} from 'rmwc'

import './post-list-item.css'

const classRoot = 'post-list-item'

const PostListItem = ({
  title,
  author,
  comments,
  score,
  voteCallback,
  editURL,
  onDelete,
  id,
  menuIsOpen,
  goToURL,
  setMenuOpen,
}) => (
  <Grid>
    <GridCell span={8} align="left">
      <p>
        <Link to={`/post/${id}`} className={`${classRoot}__title`}>
          <Typography use="headline6">
            {title}
          </Typography>
          <br />
          <Typography use="subtitle1">
            {author}
          </Typography>
        </Link>
      </p>
    </GridCell>
    <GridCell span={1} align="center">
      <p>
        <Typography use="body1">
          <i className="material-icons">
            comment
          </i>
          <br />
          <span>
            {comments}
          </span>
        </Typography>
      </p>
    </GridCell>
    <GridCell span={1} align="center">
      <p>
        <Typography use="body1">
          <i className="material-icons">
            star
          </i>
          <br />
          <span>
            {score}
          </span>
        </Typography>
      </p>
    </GridCell>
    <GridCell span={1} align="center">
      <Typography use="body1">
        <div onClick={voteCallback(-1)} role="presentation">
          <i className="material-icons">
            keyboard_arrow_up
          </i>
        </div>
        <div onClick={voteCallback(1)} role="presentation">
          <i className="material-icons">
            keyboard_arrow_down
          </i>
        </div>
        <br />
        <span>
          Vote
        </span>
      </Typography>
    </GridCell>
    <GridCell span={1} align="center">
      <br />
      <MenuAnchor className={`${classRoot}__menu-anchor`}>
        <Typography use="ico" onClick={() => setMenuOpen(!menuIsOpen)}>
          <i className="material-icons">
            more_vert
          </i>
        </Typography>
        <Menu
          open={menuIsOpen}
          onClose={() => setMenuOpen(false)}
        >
          <MenuItem onClick={goToURL(editURL)}>
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              onDelete()
              setMenuOpen(false)
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </MenuAnchor>
    </GridCell>
  </Grid>
)

PostListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  voteCallback: PropTypes.func.isRequired,
  editURL: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool,
  goToURL: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

PostListItem.defaultProps = {
  menuIsOpen: false,
}

export default PostListItem
