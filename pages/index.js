import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Divider } from 'semantic-ui-react';
import Layout from '../components/HOC/Layout';
import Network from '../components/Wallet';
import Modal from '../components/UI/Modal';
import { Link } from '../routes';
import NewIdea from './ideas/new';


class Index extends Component {
    static async getInitialProps() { // skips initial rendering next attribute
      const ideas = await factory.methods.getDeployedCampaigns().call();
      return {ideas};
    }

    renderIdeas() {
      const items = this.props.ideas.map(address => {
        return {
          header: address,
          description: (
            <Link route={`/ideas/${address}`}>
              <a>View Idea</a>
            </Link>
          ),
          fluid: true
        };
      });
      return <Card.Group items={items}/>;
    }

    render() {
      const style = {
        marginTop: "10px"
      }
      return (
        <Layout>
          <div>
            <Divider />
            <NewIdea />
            <p style={style}>Active ideas that has been deployed to the Idea ദank</p>
            {this.renderIdeas()}
          </div>
        </Layout>
      );
    };
}

export default Index;
