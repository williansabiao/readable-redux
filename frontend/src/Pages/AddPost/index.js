import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Grid, Cell, Textfield} from 'react-mdc-web/lib';

class AddPostPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <Textfield
              col={12}
              floatingLabel="Title"
              required
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default AddPostPage
