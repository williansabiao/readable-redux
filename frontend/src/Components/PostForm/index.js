import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  GridCell,
  TextField,
  Select,
  Button,
  Typography,
} from 'rmwc';

class PostForm extends Component {
  state = {
    title: null,
    category: null,
    body: null,
    author: null,
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name || target.getAttribute('name')

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.submit(this.state)
    return false
  }

  render() {
    return (
      <form name="newPost" onSubmit={this.handleSubmit}>
        <Grid>
          <GridCell span={12} align="left">
            <Typography use="title">Add new Post</Typography>
          </GridCell>
          <GridCell span={9}>
            <TextField
              onChange={this.handleChange}
              name="title"
              id="title"
              label="Title"
              required
              fullwidth
            />
          </GridCell>
          <GridCell span={3}>
            <Select
              onChange={this.handleChange}
              name="category"
              id="category"
              label="Category"
              options={{'react': 'React', '2': 'Pizza', '3': 'Icecream Icecream'}}
              style={{width: "100%"}}
            />
          </GridCell>
          <GridCell span={12}>
            <TextField
              onChange={this.handleChange}
              name="body"
              textarea
              rows="8"
              id="body"
              label="Text"
              required
              fullwidth
            />
          </GridCell>
          <GridCell span={12} align="right">
            <TextField
              onChange={this.handleChange}
              name="author"
              id="author"
              label="Author"
              required
            />
          </GridCell>
          <GridCell span={12} align="right">
            <Button type="submit" align="right" raised>Save</Button>
          </GridCell>
        </Grid>
      </form>
    )
  }
}

PostForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default PostForm
