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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/HOC/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Wallet = require('../components/Wallet');

var _Wallet2 = _interopRequireDefault(_Wallet);

var _Modal = require('../components/UI/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _routes = require('../routes');

var _new = require('./ideas/new');

var _new2 = _interopRequireDefault(_new);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'renderIdeas',
    value: function renderIdeas() {
      var items = this.props.ideas.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/ideas/' + address }, _react2.default.createElement('a', null, 'View Idea')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items });
    }
  }, {
    key: 'render',
    value: function render() {

      var style = {
        marginTop: "10px"
      };

      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', null, _react2.default.createElement(_semanticUiReact.Divider, null), _react2.default.createElement(_new2.default, null), _react2.default.createElement('p', { style: style }, 'Active ideas that has been deployed to the Idea \u0D26ank'), this.renderIdeas()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var ideas;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                ideas = _context.sent;
                return _context.abrupt('return', { ideas: ideas });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;