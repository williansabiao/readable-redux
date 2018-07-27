import React from 'react'
import PropTypes from 'prop-types'
import {
  Menu,
  MenuAnchor,
  MenuItem,
  Typography,
  Card,
  CardPrimaryAction,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons,
  Icon,
} from 'rmwc'

import './post-list-item.css'

const classRoot = 'post-list-item'

const PostListItem = ({
  title,
  author,
  commentCount,
  voteScore,
  onVote,
  editURL,
  onDelete,
  id,
  menuIsOpen,
  goToURL,
  setMenuOpen,
  category,
}) => (
  <Card className={`${classRoot}__card`}>
    <CardPrimaryAction onClick={goToURL(`/${category}/${id}`)}>
      <div style={{ padding: '0 1rem 1rem 1rem' }}>
        <Typography use="headline6" tag="h2">
          {title}
        </Typography>
        <Typography
          use="subtitle2"
          tag="h3"
          theme="text-secondary-on-background"
          style={{ marginTop: '-1rem' }}
        >
          {`by ${author}`}
        </Typography>
      </div>
    </CardPrimaryAction>
    <CardActions>
      <CardActionButtons>
        <CardAction onClick={goToURL(`/${category}/${id}#comments`)}>
          <Icon use="mode_comment" />&nbsp;&nbsp;
          {commentCount}
        </CardAction>
        <CardAction>
          <Icon use="star" />&nbsp;&nbsp;
          {voteScore}
        </CardAction>
      </CardActionButtons>
      <CardActionIcons>
        <CardAction
          onLabel="Up vote"
          onContent="keyboard_arrow_up"
          offLabel="Up vote"
          offContent="keyboard_arrow_up"
          onClick={() => onVote(1, id)}
        />
        <CardAction
          onLabel="Down vote"
          onContent="keyboard_arrow_down"
          offLabel="Down vote"
          offContent="keyboard_arrow_down"
          onClick={() => onVote(-1, id)}
        />
        <CardAction use="more_vert" onClick={() => setMenuOpen(!menuIsOpen)} />
      </CardActionIcons>
      <MenuAnchor className={`${classRoot}__menu-anchor`}>
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
    </CardActions>
  </Card>
)

PostListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  onVote: PropTypes.func.isRequired,
  editURL: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool,
  goToURL: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
}

PostListItem.defaultProps = {
  menuIsOpen: false,
}

export default PostListItem
