import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  Menu,
  MenuAnchor,
  MenuItem,
  Typography,
} from 'rmwc';

class PostsListItem extends Component {
  state = {
    menuIsOpen: false,
  }

  onSelected = (e) => {
    console.log(e)
  }

  goToURL = (value) => () => this.props.navigateTo(value)

  render() {
    const { title, author, comments, score, voteCallback, editURL, deleteURL } = this.props

    return (
      <Grid>
        <GridCell span={8} align="left">
          <p><Typography use="title">{title}</Typography><br/>
            <Typography use="caption">{author}</Typography></p>
        </GridCell>
        <GridCell span={1} align="center">
          <p>
            <Typography use="body1">
              <i className="material-icons">comment</i>
              <br/>
              <span>{comments}</span>
            </Typography>
          </p>
        </GridCell>
        <GridCell span={1} align="center">
          <p>
            <Typography use="body1">
              <i className="material-icons">star</i>
              <br/>
              <span>{score}</span>
            </Typography>
          </p>
        </GridCell>
        <GridCell span={1} align="center">
          <p>
            <Typography use="body1">
              <a onClick={voteCallback(-1)}><i className="material-icons">keyboard_arrow_up</i></a>
              <a onClick={voteCallback(1)}><i className="material-icons">keyboard_arrow_down</i></a>
              <br/>
              <span>Vote</span>
            </Typography>
          </p>
        </GridCell>
        <GridCell span={1} align="center">
          <br/>
          <MenuAnchor>
            <Typography use="ico" onClick={evt => this.setState({'menuIsOpen': !this.state.menuIsOpen})}><i className="material-icons">more_vert</i></Typography>
            <Menu
              open={this.state.menuIsOpen}
              onClose={evt => this.setState({menuIsOpen: false})}
            >
              <MenuItem onClick={this.goToURL(editURL)}>Edit</MenuItem>
              <MenuItem onClick={this.goToURL(deleteURL)}>Delete</MenuItem>
            </Menu>
          </MenuAnchor>
          </GridCell>
      </Grid>
    )
  }
}

PostsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  voteCallback: PropTypes.func.isRequired,
  editURL: PropTypes.string.isRequired,
  deleteURL: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

function mapDispatchToProps (dispatch) {
  return {
    navigateTo: (location) => dispatch(push(location)),
  }
}

export default connect(null, mapDispatchToProps)(PostsListItem)
