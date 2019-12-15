import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import web3 from '../ethereum/web3';

class Network extends Component {
  state = {
    network: "",
    account: "",
    modalOpen: false,
    balance: ""
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleClose = () => {
    this.setState ({ modalOpen: false });
  }

  componentDidMount() {
    this.currentNetwork();
  }

  currentNetwork = async () => {
    let network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    let balance = await web3.eth.getBalance(accounts[0]);

    this.setState({ balance: web3.utils.fromWei(balance, 'ether') });
    this.setState({ account: accounts[0] });
    this.setState({ network: network });
  }



  render() {
    return(
      <Modal
        trigger={<Button primary onClick={this.handleOpen}> <Icon name="ethereum" />Wallet</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='ethereum' content='Wallet' />
        <Modal.Content>
          <h3><Icon name="wifi"/> This site is operating using the {this.state.network} Network</h3>
          <h3>Metamask ID: {this.state.account} <Icon name="cut" onClick={() => {navigator.clipboard.writeText(this.state.account)}} color="green"/></h3>
          <h3>ETH: {this.state.balance} <Icon name="ethereum" /></h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
    </Modal>
    );
  }
}

export default Network;
