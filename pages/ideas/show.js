import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Divider } from 'semantic-ui-react';
import Layout from '../../components/HOC/Layout';
import Idea from '../../ethereum/ideas';
import web3 from '../../ethereum/web3';
import Contribute from '../../components/ContributeForm';
import { Link } from '../../routes';


class IdeaShow extends Component {
  static async getInitialProps(props) {
    const idea = Idea(props.query.address);
    const summary = await idea.methods.getSummary().call(); // result{0: minimumContribution 1: balance 2: requests 3: approversCount 4: managerAddress}
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  componentWillMount() {
    this.getTimestamp();
  }


  getTimestamp = async () => {
    const tx = await web3.eth.getCoinbase(); // tx hash
    const blockNumberFromChain = await web3.eth.getBlockNumber() // get blockNUmber
    console.log(blockNumberFromChain);
    const BlockObject = await web3.eth.getBlock(blockNumberFromChain).then(
      console.log

    );

    // *TODO* GET PROPERTIES FROM BLOCKOBJECT DOES NOT SEEM TO WORK
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager who created this idea can create requests to withdraw ether from this idea',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute atleast this much wei to become an approver of this idea',
      },
      {
        header: requestsCount,
        meta: 'Number of requests to this idea',
        description: 'A request withdraws money from the manager of the idea. And must in terms be validated by approvers',
      },
      {
        header: approversCount,
        meta: 'Approvers Count: ',
        description: 'Number of people who already donated to this idea',
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance in Ether',
        description: `The amount of ether this idea has left`,
      },
    ];
    return <Card.Group items={items} />;
  }

  render() {

    const style = {
      marginTop: "10px"
    }

    return (
      <Layout>
        <Link route={'/'}>
          <Button style={style} content='Back to Ideas' icon='left arrow' labelPosition='left' />
        </Link>
        <Divider />
        <h3><Icon name="server" />Idea Details</h3>
        <p>Everything you need to know about this idea</p>
        <Divider />
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <Contribute address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/ideas/${this.props.address}/requests`}>
                <a>
                  <Button primary>Withdrawal Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Layout>
    );
  }
}

export default IdeaShow;
