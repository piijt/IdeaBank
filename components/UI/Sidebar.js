import React, { Component, createRef } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Button, Modal, Sticky } from 'semantic-ui-react'
import { Link } from '../../routes';
import Wallet from '../Wallet';
import MetamaskModal from './Modal'

class LeftSidebar extends Component {
  contextRef = createRef()

  render() {

    const styles = {
      position: "relative",
      display: "inline-block",
      visibility: "hidden",
      left: "0",
      top: "0",
      position: "absolute",
      visibility: "visible",
    }

    const Metamask = {
      position: "relative",
      display: "inline-block",
      visibility: "hidden",
      left: "25px",
      bottom: "25px",
      borderRadius: "6px",
      position: "absolute",
      zIndex: "5",
      visibility: "visible"
    }

    const divider = {
      marginLeft: "100px"
    }

    return (
        <div style={divider}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thick'
          >

          <Link route="/">
            <Menu.Item as='a'>
              <Icon name='home' />
            </Menu.Item>
          </Link>

          <Link route="/ideas/new">
            <Menu.Item as='a'>
            <Icon name='plus' />
            </Menu.Item>
          </Link>

          <Link route="/promotion/index">
            <Menu.Item as='a'>
            <Icon name='feed' />
            </Menu.Item>
          </Link>

          <Link route="/user/index">
            <Menu.Item as='a'>
            <Icon name='user' />
            </Menu.Item>
          </Link>

          <Menu.Item as='a'>
            <Wallet />
          </Menu.Item>

            <div style={Metamask}>
              <img height="50px" width="50px" src="../../static/metamask.png" alt="Metamask" />
              <div>
                <MetamaskModal />
              </div>
            </div>

          </Sidebar>
        </div>
    );
  }
}


export default LeftSidebar;
