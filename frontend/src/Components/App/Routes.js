import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, AddPost, PostDetails } from '../../Pages'

const Routes = () => (
  <div>
    {/* <Link to="/" className="btn btn-warning" role="button">Home</Link> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add-post" component={AddPost} />
      <Route exact path="/edit/:id" component={AddPost} />
      <Route exact path="/post/:id" component={PostDetails} />
      <Route path="/category/:category" component={Home} />
    </Switch>
  </div>
)

export default Routes
