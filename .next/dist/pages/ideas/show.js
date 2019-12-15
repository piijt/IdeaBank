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

var _Layout = require('../../components/HOC/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ideas = require('../../ethereum/ideas');

var _ideas2 = _interopRequireDefault(_ideas);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\Bachelor2019\\node-boilerplates\\IdeaBank\\pages\\ideas\\show.js?entry';


var IdeaShow = function (_Component) {
  (0, _inherits3.default)(IdeaShow, _Component);

  function IdeaShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IdeaShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IdeaShow.__proto__ || (0, _getPrototypeOf2.default)(IdeaShow)).call.apply(_ref, [this].concat(args))), _this), _this.getTimestamp = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var tx, blockNumberFromChain, BlockObject;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.getCoinbase();

            case 2:
              tx = _context.sent;
              _context.next = 5;
              return _web2.default.eth.getBlockNumber();

            case 5:
              blockNumberFromChain = _context.sent;
              // get blockNUmber
              console.log(blockNumberFromChain);
              _context.next = 9;
              return _web2.default.eth.getBlock(blockNumberFromChain).then(console.log);

            case 9:
              BlockObject = _context.sent;

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IdeaShow, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getTimestamp();
    }
  }, {
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager who created this idea can create requests to withdraw ether from this idea',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute atleast this much wei to become an approver of this idea'
      }, {
        header: requestsCount,
        meta: 'Number of requests to this idea',
        description: 'A request withdraws money from the manager of the idea. And must in terms be validated by approvers'
      }, {
        header: approversCount,
        meta: 'Approvers Count: ',
        description: 'Number of people who already donated to this idea'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance in Ether',
        description: 'The amount of ether this idea has left'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var style = {
        marginTop: "10px"
      };

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { style: style, content: 'Back to Ideas', icon: 'left arrow', labelPosition: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'server', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), 'Idea Details'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Everything you need to know about this idea'), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_routes.Link, { route: '/ideas/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Withdrawal Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var idea, summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                idea = (0, _ideas2.default)(props.query.address);
                _context2.next = 3;
                return idea.methods.getSummary().call();

              case 3:
                summary = _context2.sent;
                return _context2.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IdeaShow;
}(_react.Component);

exports.default = IdeaShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpZGVhc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiSWNvbiIsIkRpdmlkZXIiLCJMYXlvdXQiLCJJZGVhIiwid2ViMyIsIkNvbnRyaWJ1dGUiLCJMaW5rIiwiSWRlYVNob3ciLCJnZXRUaW1lc3RhbXAiLCJldGgiLCJnZXRDb2luYmFzZSIsInR4IiwiZ2V0QmxvY2tOdW1iZXIiLCJibG9ja051bWJlckZyb21DaGFpbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRCbG9jayIsInRoZW4iLCJCbG9ja09iamVjdCIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsIm1hcmdpblRvcCIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImlkZWEiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFNOztBQUNuQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFBWTs7Ozs7OztJQUdmLEE7Ozs7Ozs7Ozs7Ozs7OztnTixBQW1CSix3RkFBZSxtQkFBQTtvQ0FBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDSSxjQUFBLEFBQUssSUFEVCxBQUNJLEFBQVM7O2lCQUFwQjtBQURPLDRCQUFBOzhCQUFBO3FCQUVzQixjQUFBLEFBQUss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O0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0F2QmQsQUFDRSxBQVFFLEFBVUUsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVNmOzs7Ozs2R0E1RzRCLEE7Ozs7O21CQUNyQjtBLHVCQUFPLHFCQUFLLE1BQUEsQUFBTSxNQUFYLEFBQWlCLEE7O3VCQUNSLEtBQUEsQUFBSyxRQUFMLEFBQWEsYUFBYixBQUEwQixBOzttQkFBMUM7QTs7MkJBRUssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7dUNBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7aUNBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7a0NBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCOzJCQUFTLFFBTkosQUFNSSxBQUFRLEE7QUFOWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTGlCLEEsQUFnSHZCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL0JhY2hlbG9yMjAxOS9ub2RlLWJvaWxlcnBsYXRlcy9JZGVhQmFuayJ9