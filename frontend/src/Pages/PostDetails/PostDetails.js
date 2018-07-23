import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  Typography,
  GridInner,
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
          <GridCell span={5} align="center">
            <Typography use="subtitle1">
              {`By: ${author}`}
            </Typography>
          </GridCell>
          <GridCell span={5} align="center">
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
    {id.length > 0 && (
      <Grid>
        <GridCell span={12}>
          <CommentList id={id} />
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
}

export default PostDetails
