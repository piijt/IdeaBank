'use strict';

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

var _Modal = require('../components/UI/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\Bachelor2019\\node-boilerplates\\IdeaBank\\ethereum\\metamask.js';


var Metamask = function (_Component) {
  (0, _inherits3.default)(Metamask, _Component);

  function Metamask() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Metamask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Metamask.__proto__ || (0, _getPrototypeOf2.default)(Metamask)).call.apply(_ref, [this].concat(args))), _this), _this.isMetamaskInstalled = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var provider;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
                // Web3 browser user detected. You can now use the provider.
                provider = window['ethereum'] || window.web3.currentProvider;

                console.log('Metamask is installed!');
              } else {
                console.log('Metamask is not installed');
              }

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Metamask, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      isMetamaskInstalled();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_Modal2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), 'metamask is installed');
    }
  }]);

  return Metamask;
}(_react.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxtZXRhbWFzay5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1vZGFsIiwiTWV0YW1hc2siLCJpc01ldGFtYXNrSW5zdGFsbGVkIiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzIiwicHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFXOzs7Ozs7Ozs7SUFHWixBOzs7Ozs7Ozs7Ozs7Ozs7Z05BTUosQSwrRkFBc0IsbUJBQUE7VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDbEI7a0JBQUksT0FBTyxPQUFQLEFBQWMsYUFBZCxBQUEyQixlQUFnQixPQUFPLE9BQVAsQUFBYyxTQUE3RCxBQUFzRSxhQUFjLEFBQ3BGO0FBQ007QUFGOEUsMkJBRW5FLE9BQUEsQUFBTyxlQUFlLE9BQUEsQUFBTyxLQUZzQyxBQUVqQyxBQUNuRDs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQUpDLHFCQUlLLEFBQ0w7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQVBtQjs7aUJBQUE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QTs7Ozs7d0NBSkYsQUFDbEI7QUFDRDs7Ozs2QkFZUSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRTtBQUFBO0FBQUEsVUFGSixBQUNFLEFBS0g7Ozs7O0FBdkJvQixBIiwiZmlsZSI6Im1ldGFtYXNrLmpzIiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9CYWNoZWxvcjIwMTkvbm9kZS1ib2lsZXJwbGF0ZXMvSWRlYUJhbmsifQ==