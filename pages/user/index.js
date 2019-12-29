import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import routes from '../../routes.js';
import Layout from '../../components/HOC/Layout';

class User extends Component {
  render () {
    return(
      <Layout>
        <div>
          <h1>User <Icon name="user"/></h1>
          <p>This site is used for specific details about this user such as all enlisted ideas - wallet details - etc </p>
        </div>
      </Layout>
    )
  }
}

export default User;
