import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, AddPost } from './../../Pages'

const Routes = () => {
  return (
    <div>
      {/* <Link to="/" className="btn btn-warning" role="button">Home</Link> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/add-post' component={AddPost} />
      </Switch>
    </div>
  )
}

export default Routes;
