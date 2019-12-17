'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Network = function (_Component) {
  (0, _inherits3.default)(Network, _Component);

  function Network() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Network);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Network.__proto__ || (0, _getPrototypeOf2.default)(Network)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      network: "",
      account: "",
      modalOpen: false,
      balance: ""
    }, _this.handleOpen = function () {
      _this.setState({ modalOpen: true });
    }, _this.handleClose = function () {
      _this.setState({ modalOpen: false });
    }, _this.currentNetwork = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var network, accounts, balance;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.net.getNetworkType();

            case 2:
              network = _context.sent;
              _context.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return _web2.default.eth.getBalance(accounts[0]);

            case 8:
              balance = _context.sent;

              _this.setState({ balance: _web2.default.utils.fromWei(balance, 'ether') });
              _this.setState({ account: accounts[0] });
              _this.setState({ network: network });

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Network, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.currentNetwork();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Modal, {
        trigger: _react2.default.createElement(_semanticUiReact.Button, { primary: true, onClick: this.handleOpen }, ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum' }), 'Wallet'),
        open: this.state.modalOpen,
        onClose: this.handleClose,
        basic: true,
        size: 'small'
      }, _react2.default.createElement(_semanticUiReact.Header, { icon: 'ethereum', content: 'Wallet' }), _react2.default.createElement(_semanticUiReact.Modal.Content, null, _react2.default.createElement('h3', null, _react2.default.createElement(_semanticUiReact.Icon, { name: 'wifi' }), ' This site is operating using the ', this.state.network, ' Network'), _react2.default.createElement('h3', null, 'Metamask ID: ', this.state.account, ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'cut', onClick: function onClick() {
          navigator.clipboard.writeText(_this3.state.account);
        }, color: 'green' })), _react2.default.createElement('h3', null, 'ETH: ', this.state.balance, ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum' }))), _react2.default.createElement(_semanticUiReact.Modal.Actions, null, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.handleClose, inverted: true }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'checkmark' }), ' Got it')));
    }
  }]);

  return Network;
}(_react.Component);

exports.default = Network;