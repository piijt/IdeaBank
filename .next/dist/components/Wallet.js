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

var _jsxFileName = 'C:\\xampp\\htdocs\\Bachelor2019\\node-boilerplates\\IdeaBank\\components\\Wallet.js';


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
        trigger: _react2.default.createElement(_semanticUiReact.Button, { primary: true, onClick: this.handleOpen, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }), 'Wallet'),
        open: this.state.modalOpen,
        onClose: this.handleClose,
        basic: true,
        size: 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { icon: 'ethereum', content: 'Wallet', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'wifi', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), ' This site is operating using the ', this.state.network, ' Network'), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Metamask ID: ', this.state.account, ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'cut', onClick: function onClick() {
          navigator.clipboard.writeText(_this3.state.account);
        }, color: 'green', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'ETH: ', this.state.balance, ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.handleClose, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'checkmark', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), ' Got it')));
    }
  }]);

  return Network;
}(_react.Component);

exports.default = Network;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdhbGxldC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIkljb24iLCJNb2RhbCIsIndlYjMiLCJOZXR3b3JrIiwic3RhdGUiLCJuZXR3b3JrIiwiYWNjb3VudCIsIm1vZGFsT3BlbiIsImJhbGFuY2UiLCJoYW5kbGVPcGVuIiwic2V0U3RhdGUiLCJoYW5kbGVDbG9zZSIsImN1cnJlbnROZXR3b3JrIiwiZXRoIiwibmV0IiwiZ2V0TmV0d29ya1R5cGUiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZ2V0QmFsYW5jZSIsInV0aWxzIiwiZnJvbVdlaSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBUSxBQUFNOztBQUMvQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7Ozs4TSxBQUNKO2VBQVEsQUFDRyxBQUNUO2VBRk0sQUFFRyxBQUNUO2lCQUhNLEFBR0ssQUFDWDtlLEFBSk0sQUFJRztBQUpILEFBQ04sYSxBQU1GLGFBQWEsWUFBTSxBQUNqQjtZQUFBLEFBQUssU0FBUyxFQUFFLFdBQWhCLEFBQWMsQUFBYSxBQUM1QjtBLGEsQUFFRCxjQUFjLFlBQU0sQUFDbEI7WUFBQSxBQUFLLFNBQVUsRUFBRSxXQUFqQixBQUFlLEFBQWEsQUFDN0I7QSxhQU1ELEEsMEZBQWlCLG1CQUFBOzZCQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNLLGNBQUEsQUFBSyxJQUFMLEFBQVMsSUFEZCxBQUNLLEFBQWE7O2lCQUE3QjtBQURXLGlDQUFBOzhCQUFBO3FCQUVRLGNBQUEsQUFBSyxJQUZiLEFBRVEsQUFBUzs7aUJBQTFCO0FBRlMsa0NBQUE7OEJBQUE7cUJBR0ssY0FBQSxBQUFLLElBQUwsQUFBUyxXQUFXLFNBSHpCLEFBR0ssQUFBb0IsQUFBUzs7aUJBQTdDO0FBSFcsaUNBS2Y7O29CQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBQTVDLEFBQWMsQUFBVyxBQUE0QixBQUNyRDtvQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFTLFNBQXpCLEFBQWMsQUFBVyxBQUFTLEFBQ2xDO29CQUFBLEFBQUssU0FBUyxFQUFFLFNBUEQsQUFPZixBQUFjLEFBQVc7O2lCQVBWO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0E7Ozs7O3dDQUpHLEFBQ2xCO1dBQUEsQUFBSyxBQUNOOzs7OzZCQWNRO21CQUNQOzs2QkFDRSxBQUFDO2lDQUNVLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQXpCLEFBQThCO3NCQUE5Qjt3QkFBQTtBQUFBO1NBQUEsRUFBMkMscUJBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQTNDLEFBQTJDO0FBQUE7WUFEdEQsQUFDVyxBQUNUO2NBQU0sS0FBQSxBQUFLLE1BRmIsQUFFbUIsQUFDakI7aUJBQVMsS0FIWCxBQUdnQixBQUNkO2VBSkYsQUFLRTtjQUxGLEFBS087O29CQUxQO3NCQUFBLEFBT0U7QUFQRjtBQUNFLE9BREYsa0JBT0UsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsWUFBVyxTQUF4QixBQUFnQztvQkFBaEM7c0JBUEYsQUFPRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBSixBQUFJO0FBQUE7VUFBc0QsMkNBQUEsQUFBSyxNQUEvRCxBQUFxRSxTQUR2RSxBQUNFLEFBQ0EsNkJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWtCLHNCQUFBLEFBQUssTUFBdkIsQUFBNkIsU0FBUyxxQkFBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxPQUFNLFNBQVMsbUJBQU0sQUFBQztvQkFBQSxBQUFVLFVBQVYsQUFBb0IsVUFBVSxPQUFBLEFBQUssTUFBbkMsQUFBeUMsQUFBUztBQUFuRixXQUFxRixPQUFyRixBQUEyRjtvQkFBM0Y7c0JBRnhDLEFBRUUsQUFBc0MsQUFDdEM7QUFEc0M7MkJBQ3RDLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFVLGNBQUEsQUFBSyxNQUFmLEFBQXFCLFNBQVMscUJBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBWGxDLEFBUUUsQUFHRSxBQUE4QixBQUVoQztBQUZnQzs0QkFFL0IsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLFNBQVMsS0FBL0IsQUFBb0MsYUFBYSxVQUFqRDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREYsQUFDRTtBQUFBO1VBaEJSLEFBQ0UsQUFhRSxBQUNFLEFBTVA7Ozs7O0FBdERtQixBLEFBeUR0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJXYWxsZXQuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL0JhY2hlbG9yMjAxOS9ub2RlLWJvaWxlcnBsYXRlcy9JZGVhQmFuayJ9