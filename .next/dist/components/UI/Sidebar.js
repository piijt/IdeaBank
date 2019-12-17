'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _routes = require('../../routes');

var _Wallet = require('../Wallet');

var _Wallet2 = _interopRequireDefault(_Wallet);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftSidebar = function (_Component) {
  (0, _inherits3.default)(LeftSidebar, _Component);

  function LeftSidebar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LeftSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LeftSidebar.__proto__ || (0, _getPrototypeOf2.default)(LeftSidebar)).call.apply(_ref, [this].concat(args))), _this), _this.contextRef = (0, _react.createRef)(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LeftSidebar, [{
    key: 'render',
    value: function render() {
      var _styles, _Metamask;

      var styles = (_styles = {
        position: "relative",
        display: "inline-block",
        visibility: "hidden",
        left: "0",
        top: "0"
      }, (0, _defineProperty3.default)(_styles, 'position', "absolute"), (0, _defineProperty3.default)(_styles, 'visibility', "visible"), _styles);

      var none = {
        visibility: "hidden"
      };

      var Metamask = (_Metamask = {
        position: "relative",
        display: "inline-block",
        visibility: "hidden",
        left: "25px",
        bottom: "25px",
        borderRadius: "6px"
      }, (0, _defineProperty3.default)(_Metamask, 'position', "absolute"), (0, _defineProperty3.default)(_Metamask, 'zIndex', "5"), (0, _defineProperty3.default)(_Metamask, 'visibility', "visible"), _Metamask);

      var avoidOverLayfromCards = {
        marginLeft: "100px"
      };

      return _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, { style: styles }, _react2.default.createElement(_semanticUiReact.Sidebar, {
        as: _semanticUiReact.Menu,
        animation: 'overlay',
        icon: 'labeled',
        inverted: true,
        vertical: true,
        visible: true,
        width: 'thick'
      }, _react2.default.createElement(_routes.Link, { route: '/' }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a' }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'home' }), 'Idea\u0D26ank')), _react2.default.createElement(_routes.Link, { route: '/ideas/new' }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a' }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' }), 'New Idea')), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a' }, _react2.default.createElement(_Wallet2.default, null)), _react2.default.createElement('div', { style: Metamask }, _react2.default.createElement('img', { height: '50px', width: '50px', src: '../../static/metamask.png', alt: 'Metamask' }), _react2.default.createElement('div', null, _react2.default.createElement(_Modal2.default, null)))), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, { styles: none }, _react2.default.createElement(_semanticUiReact.Segment, { style: none, basic: true }, _react2.default.createElement(_semanticUiReact.Header, { style: none, as: 'h3' }, 'Application Content'))));
    }
  }]);

  return LeftSidebar;
}(_react.Component);

exports.default = LeftSidebar;