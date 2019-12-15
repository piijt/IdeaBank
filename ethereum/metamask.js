import React, { Component } from 'react';
import Modal from '../components/UI/Modal';


class Metamask extends Component {

  componentDidMount() {
    isMetamaskInstalled();
  }

  isMetamaskInstalled = async () => {
      if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      // Web3 browser user detected. You can now use the provider.
      const provider = window['ethereum'] || window.web3.currentProvider
      console.log('Metamask is installed!');
    } else {
      console.log('Metamask is not installed')
    }
  }

  render() {
    return(
      <div>
        <Modal />
        metamask is installed
      </div>
    );
  }
}
