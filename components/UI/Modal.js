import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { Link } from '../../routes';

const MetamaskModal = () => (
  <Modal trigger={<a><Icon name="question circle"/>Metamask</a>}>
    <Modal.Header>You need to install Metamask</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='small' src='../../static/metamask.png' alt="Metamask" />
      <Modal.Description>
      <Header></Header>
        <p>
          <a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Metamask</a> is an Ethereum Wallet and chrome extension that allows you to make transaction to the Ethereum network.
        </p>
        <p>In order to make transaction with this page, you need to have Metamask installed</p>
          <a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
            <Button primary>
              Install Metamask
            </Button>
          </a>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default MetamaskModal;
