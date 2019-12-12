'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _ideas = require('../../../ethereum/ideas');

var _ideas2 = _interopRequireDefault(_ideas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\Bachelor2019\\node-boilerplates\\IdeaBank\\pages\\ideas\\requests\\index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          request: request,
          key: index,
          id: index,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'List of Requests'), _react2.default.createElement(_routes.Link, { route: '/ideas/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', style: { marginBottom: 10 }, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, '#'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Total Requests for this idea: ', this.props.requestCount));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, idea, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                idea = (0, _ideas2.default)(address);
                _context.next = 4;
                return idea.methods.getRequestCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return idea.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return idea.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpZGVhc1xccmVxdWVzdHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiVGFibGUiLCJMaW5rIiwiTGF5b3V0IiwiUmVxdWVzdFJvdyIsIklkZWEiLCJJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImlkZWEiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7aUNBbUJTO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUFPLEFBQUM7bUJBQUQsQUFDSSxBQUNUO2VBRkssQUFFQSxBQUNMO2NBSEssQUFHRCxBQUNKO21CQUFTLE9BQUEsQUFBSyxNQUpULEFBSWUsQUFDcEI7MEJBQWdCLE9BQUEsQUFBSyxNQUxoQixBQUtzQjs7c0JBTHRCO3dCQUFQLEFBQU8sQUFPUjtBQVBRO0FBQ0wsU0FESztBQURULEFBQU8sQUFTUixPQVRROzs7OzZCQVdBO1VBQUEsQUFDQyxTQURELEFBQ21DLHVCQURuQyxBQUNDO1VBREQsQUFDUyxNQURULEFBQ21DLHVCQURuQyxBQUNTO1VBRFQsQUFDYyxhQURkLEFBQ21DLHVCQURuQyxBQUNjO1VBRGQsQUFDMEIsT0FEMUIsQUFDbUMsdUJBRG5DLEFBQzBCLEFBQ2pDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQ0FBQSxBQUFDLDhCQUFLLG1CQUFpQixLQUFBLEFBQUssTUFBdEIsQUFBNEIsVUFBbEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixBQUFnQixTQUFRLE9BQU8sRUFBQyxjQUFoQyxBQUErQixBQUFlLE1BQUssU0FBbkQ7b0JBQUE7c0JBQUE7QUFBQTtTQUpOLEFBRUUsQUFDRSxBQUNFLEFBR0osa0NBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHNCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSxpREFBQSxBQUFDOztvQkFBRDtzQkFORixBQU1FLEFBQ0E7QUFEQTtBQUFBLHdDQUNBLEFBQUM7O29CQUFEO3NCQVROLEFBQ0UsQUFDRSxBQU9FLEFBR0o7QUFISTtBQUFBLDRCQUdILGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBbkJKLEFBT0UsQUFZRSxBQUFPLEFBQUssQUFFZCxnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBb0MsdUNBQUEsQUFBSyxNQXRCN0MsQUFDRSxBQXFCRSxBQUErQyxBQUdwRDs7Ozs7MkdBekQ0QixBOzs7OzttQkFDbkI7QSwwQkFBWSxNQUFNLEEsTUFDcEIsQSxBQURFO0EsdUJBQ0sscUIsQUFBQSxBQUFLOzt1QkFDUyxLQUFBLEFBQUssUUFBTCxBQUFhLGtCQUFiLEFBQStCLEE7O21CQUFwRDtBOzt1QkFDdUIsS0FBQSxBQUFLLFFBQUwsQUFBYSxpQkFBYixBLEFBQThCOzttQkFBckQ7QTs7eUNBSWlCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxLQUFBLEFBQUssUUFBTCxBQUFhLFNBQWIsQUFBc0IsT0FBN0IsQUFBTyxBQUE2QixBQUNyQztBQUpILEEsQUFEcUIsaUJBQ3JCLENBRHFCOzttQkFBakI7QTtpREFPQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQXFCLGNBQXJCLGNBQW1DLGdCQUFuQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaEJTLEEsQUE2RHBCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9CYWNoZWxvcjIwMTkvbm9kZS1ib2lsZXJwbGF0ZXMvSWRlYUJhbmsifQ==