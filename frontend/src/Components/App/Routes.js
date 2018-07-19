import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, AddPost } from '../../Pages'

const Routes = () => (
  <div>
    {/* <Link to="/" className="btn btn-warning" role="button">Home</Link> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add-post" component={AddPost} />
      <Route path="/category/:category" component={Home} />
    </Switch>
  </div>
)

export default Routes
