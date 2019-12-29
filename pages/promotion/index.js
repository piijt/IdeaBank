import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import routes from '../../routes.js';
import Layout from '../../components/HOC/Layout';

class Promotion extends Component {
  render () {
    return(
      <Layout>
        <div>
          <h1>Feed <Icon name="feed"/></h1>
          <p>This page is used to promote your ideas</p>
        </div>
      </Layout>
    )
  }
}

export default Promotion;
