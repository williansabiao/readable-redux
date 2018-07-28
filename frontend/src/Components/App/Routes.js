import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  AddPost,
  PostDetails,
  NotFound,
} from '../../Pages'

const Routes = () => (
  <div>
    {/* <Link to="/" className="btn btn-warning" role="button">Home</Link> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add-post" component={AddPost} />
      <Route exact path="/edit/:id" component={AddPost} />
      <Route exact path="/:category/:id" component={PostDetails} />
      <Route path="/404" component={NotFound} />
      <Route path="/:category" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default Routes
