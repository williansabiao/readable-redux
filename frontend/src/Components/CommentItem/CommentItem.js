import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  SimpleDialog,
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

import { formatToComments } from '../../utils/date'
import CommentForm from '../CommentForm'
import './comment-item.css'

const classRoot = 'comment-item'

const CommentItem = ({
  editComment,
  setShowForm,
  id,
  author,
  voteScore,
  timestamp,
  body,
  parentId,
  onDelete,
  deleteDialogOpen,
  setDeleteDialog,
  onVote,
  setMenuOpen,
  menuIsOpen,
}) => (
  <React.Fragment>
    {!editComment && (
      <Card className={`${classRoot}__card`}>
        <CardPrimaryAction>
          <div style={{ padding: '0 1rem 1rem 1rem' }}>
            <Typography
              use="subtitle2"
              tag="h3"
              theme="text-secondary-on-background"
            >
              {`${formatToComments(timestamp)} - by ${author}`}
            </Typography>
            <Typography use="body1" tag="div" theme="text-secondary-on-background">
              {body}
            </Typography>
          </div>
        </CardPrimaryAction>
        <CardActions>
          <CardActionButtons>
            <CardAction fullBleed>
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
              <MenuItem onClick={() => setShowForm(!editComment)}>
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setDeleteDialog(true)
                  setMenuOpen(false)
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </MenuAnchor>
        </CardActions>
      </Card>
    )}
    {editComment && (
      <CommentForm
        id={id}
        parentId={parentId}
        author={author}
        voteScore={voteScore}
        timestamp={timestamp}
        body={body}
        onCancel={() => setShowForm(false)}
        onSuccess={() => setShowForm(false)}
      />
    )}
    <SimpleDialog
      title="Delete comment"
      body="Are you sure do you want delete this comment?"
      open={deleteDialogOpen}
      onClose={() => setDeleteDialog(false)}
      onAccept={() => onDelete(id)}
      onCancel={() => setDeleteDialog(false)}
    />
  </React.Fragment>
)

CommentItem.propTypes = {
  editComment: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
  id: PropTypes.string,
  parentId: PropTypes.string,
  author: PropTypes.string,
  voteScore: PropTypes.number,
  timestamp: PropTypes.number,
  body: PropTypes.string,
  onDelete: PropTypes.func,
  deleteDialogOpen: PropTypes.bool,
  setDeleteDialog: PropTypes.func,
  onVote: PropTypes.func,
  setMenuOpen: PropTypes.func,
  menuIsOpen: PropTypes.bool,
}

CommentItem.defaultProps = {
  id: '',
  parentId: '',
  author: '',
  voteScore: null,
  timestamp: null,
  body: '',
  onDelete: () => false,
  deleteDialogOpen: false,
  setDeleteDialog: () => false,
  onVote: () => false,
  setMenuOpen: () => false,
  menuIsOpen: false,
}

export default CommentItem
