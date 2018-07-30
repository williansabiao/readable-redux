import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  Typography,
  GridInner,
  Button,
  ButtonIcon,
} from 'rmwc'

import CommentList from '../../Components/CommentList'
import './post-details.css'

const classRoot = 'post-details'
const setClass = element => `${classRoot}__${element}`

const PostDetails = ({
  id,
  title,
  author,
  body,
  commentCount,
  voteScore,
  onVote,
  onDelete,
}) => (
  <React.Fragment>
    <Grid className={setClass('center')}>
      <GridCell span={1} />
      <GridCell span={10}>
        <Typography use="headline3">
          {title}
        </Typography>
      </GridCell>
      <GridCell span={1} />
    </Grid>
    <Grid>
      <GridCell span={3} />
      <GridCell span={6} align="center">
        <GridInner>
          <GridCell span={4} align="center">
            <Typography use="subtitle1">
              {`By: ${author}`}
            </Typography>
          </GridCell>
          <GridCell span={4} align="center">
            <Typography use="body1">
              {`${commentCount} comments`}
            </Typography>
          </GridCell>
          <GridCell span={1} align="center">
            <i className="material-icons">
              star
            </i>
          </GridCell>
          <GridCell span={1} align="center">
            <Typography use="body1">
              {voteScore}
            </Typography>
          </GridCell>
          <GridCell span={2} align="top" className={setClass('btn-wrapper')}>
            <Button
              onClick={() => onVote(1, id)}
              className={setClass('btn')}
            >
              <ButtonIcon use="keyboard_arrow_up" />
            </Button>
            <Button
              onClick={() => onVote(-1, id)}
              className={setClass('btn')}
            >
              <ButtonIcon use="keyboard_arrow_down" />
            </Button>
          </GridCell>
        </GridInner>
      </GridCell>
      <GridCell span={3} />
    </Grid>
    <Grid>
      <GridCell span={2} />
      <GridCell span={8}>
        {body}
      </GridCell>
      <GridCell span={2} />
    </Grid>
    <Grid className={setClass('center')}>
      <GridCell span={2}>
        <Link to={`/edit/${id}`} className={setClass('btn-edit')}>
          <Typography use="button">
            Edit
          </Typography>
        </Link>
      </GridCell>
      <GridCell span={2}>
        <Button theme="secondary" accent onClick={() => onDelete(id)}>
          Delete
        </Button>
      </GridCell>
    </Grid>
    {id.length > 0 && (
      <Grid>
        <GridCell span={12}>
          <CommentList parentId={id} />
        </GridCell>
      </Grid>
    )}
  </React.Fragment>
)

PostDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  onVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default PostDetails
