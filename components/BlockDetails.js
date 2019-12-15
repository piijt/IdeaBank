import React, { Component } from 'react';
import web3 from '../ethereum/web3';

class BlockDetails extends Component {


  getTimestamp = () => {
    let tx = web3.eth.getCoinbase(); // tx hash
    // web3.eth.getTransaction({tx}).then(console.log)
    const block = web3.eth.getBlockNumber(); // get blockNUmber
    console.log(block);
  }

  render() {
    return(
      <div>{this.getTimestamp()}</div>
    );
  }
}

export default BlockDetails;
