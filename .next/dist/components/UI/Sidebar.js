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

var _jsxFileName = 'C:\\xampp\\htdocs\\Bachelor2019\\node-boilerplates\\IdeaBank\\components\\UI\\Sidebar.js';


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

      return _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, { style: styles, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Sidebar, {
        as: _semanticUiReact.Menu,
        animation: 'overlay',
        icon: 'labeled',
        inverted: true,
        vertical: true,
        visible: true,
        width: 'thick',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), 'Idea\u0D26ank')), _react2.default.createElement(_routes.Link, { route: '/ideas/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), 'New Idea')), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_Wallet2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), _react2.default.createElement('div', { style: Metamask, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('img', { height: '50px', width: '50px', src: '../../static/metamask.png', alt: 'Metamask', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_Modal2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })))), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, { styles: none, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { style: none, basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { style: none, as: 'h3', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Application Content'))));
    }
  }]);

  return LeftSidebar;
}(_react.Component);

exports.default = LeftSidebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFVJXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUmVmIiwiSGVhZGVyIiwiSWNvbiIsIkltYWdlIiwiTWVudSIsIlNlZ21lbnQiLCJTaWRlYmFyIiwiQnV0dG9uIiwiTW9kYWwiLCJTdGlja3kiLCJMaW5rIiwiV2FsbGV0IiwiTWV0YW1hc2tNb2RhbCIsIkxlZnRTaWRlYmFyIiwiY29udGV4dFJlZiIsInN0eWxlcyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJsZWZ0IiwidG9wIiwibm9uZSIsIk1ldGFtYXNrIiwiYm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiYXZvaWRPdmVyTGF5ZnJvbUNhcmRzIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQVc7Ozs7QUFDM0IsQUFBUyxBQUFRLEFBQU0sQUFBTyxBQUFNLEFBQVMsQUFBUyxBQUFRLEFBQU87O0FBQ3JFLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBbUI7Ozs7Ozs7OztJQUVwQixBOzs7Ozs7Ozs7Ozs7OztzTkFDSixBLGFBQWEsQTs7Ozs7NkJBRUo7bUJBRVA7O1VBQU07a0JBQUEsQUFDTSxBQUNWO2lCQUZJLEFBRUssQUFDVDtvQkFISSxBQUdRLEFBQ1o7Y0FKSSxBQUlFLEFBQ047YUFMSSxBQUtDO0FBSkwsNERBREksQUFNTSxrRUFOTixBQU9RLFlBUGQsQUFVQTs7VUFBTTtvQkFBTixBQUFhLEFBQ0MsQUFJZDtBQUxhLEFBQ1g7O1VBSUk7a0JBQUEsQUFDTSxBQUNWO2lCQUZJLEFBRUssQUFDVDtvQkFISSxBQUdRLEFBQ1o7Y0FKSSxBQUlFLEFBQ047Z0JBTEksQUFLSSxBQUNSO3NCQU5JLEFBTVU7QUFMZCw4REFESSxBQU9NLGdFQVBOLEFBUUksNkRBUkosQUFTUSxZQVRkLEFBWUE7O1VBQU07b0JBQU4sQUFBOEIsQUFDaEIsQUFHZDtBQUo4QixBQUM1Qjs7NkJBSUcsY0FBRCx5QkFBQSxBQUFTLFlBQVMsT0FBbEIsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7QUFBRCxBQUNNLEFBQ0o7bUJBRkYsQUFFWSxBQUNWO2NBSEYsQUFHTyxBQUNMO2tCQUpGLEFBS0U7a0JBTEYsQUFNRTtpQkFORixBQU9FO2VBUEYsQUFPUTs7b0JBUFI7c0JBQUEsQUFTQTtBQVRBO0FBQ0UseUJBUUYsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTSxRQUFLLElBQVgsQUFBYztvQkFBZDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREYsQUFDRTtBQUFBO1VBWEosQUFTQSxBQUNFLEFBS0YsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTSxRQUFLLElBQVgsQUFBYztvQkFBZDtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREEsQUFDQTtBQUFBO1VBakJGLEFBZUEsQUFDRSxBQU1GLDhCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLElBQVgsQUFBYztvQkFBZDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBdkJGLEFBc0JBLEFBQ0UsQUFFRjtBQUZFO0FBQUEsMkJBRUYsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sUUFBTCxBQUFZLFFBQU8sT0FBbkIsQUFBeUIsUUFBTyxLQUFoQyxBQUFvQyw2QkFBNEIsS0FBaEUsQUFBb0U7b0JBQXBFO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQTdCTixBQUNFLEFBeUJBLEFBRUUsQUFDRSxBQUlKO0FBSkk7QUFBQSw2QkFJSCxjQUFELHlCQUFBLEFBQVMsVUFBTyxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQVEsT0FBVCxBQUFnQixNQUFPLE9BQXZCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLE9BQVIsQUFBZSxNQUFNLElBQXJCLEFBQXdCO29CQUF4QjtzQkFBQTtBQUFBO1NBcENWLEFBQ0ksQUFpQ0UsQUFDRSxBQUNFLEFBTVg7Ozs7O0FBOUV1QixBLEFBa0YxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJTaWRlYmFyLmpzIiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9CYWNoZWxvcjIwMTkvbm9kZS1ib2lsZXJwbGF0ZXMvSWRlYUJhbmsifQ==