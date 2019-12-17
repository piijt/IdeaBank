'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetamaskModal = function MetamaskModal() {
  return _react2.default.createElement(_semanticUiReact.Modal, { trigger: _react2.default.createElement('a', null, _react2.default.createElement(_semanticUiReact.Icon, { name: 'question circle' }), 'Metamask') }, _react2.default.createElement(_semanticUiReact.Modal.Header, null, 'You need to install Metamask'), _react2.default.createElement(_semanticUiReact.Modal.Content, { image: true }, _react2.default.createElement(_semanticUiReact.Image, { wrapped: true, size: 'small', src: '../../static/metamask.png', alt: 'Metamask' }), _react2.default.createElement(_semanticUiReact.Modal.Description, null, _react2.default.createElement(_semanticUiReact.Header, null), _react2.default.createElement('p', null, _react2.default.createElement('a', { target: '_blank', href: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn' }, 'Metamask'), ' is an Ethereum Wallet and chrome extension that allows you to make transaction to the Ethereum network.'), _react2.default.createElement('p', null, 'In order to make transaction with this page, you need to have Metamask installed'), _react2.default.createElement('a', { target: '_blank', href: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn' }, _react2.default.createElement(_semanticUiReact.Button, { primary: true }, 'Install Metamask')))));
};

exports.default = MetamaskModal;