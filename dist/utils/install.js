'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //ora 一个命令行loading效果
//命令行交互


//github api用来下载github的模板

var init = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var loading, answer, project;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 下载模板 
            loading = (0, _ora2.default)('fetching template......');
            _context.next = 3;
            return _inquirer2.default.prompt([{
              type: 'input',
              name: 'ProjectName',
              message: '项目名称：',
              default: 'vue-management-template-cli'
            }]);

          case 3:
            answer = _context.sent;

            // 项目名字
            project = answer.ProjectName;

            loading.start();
            (0, _downloadGitRepo2.default)('jazzyXie/integrated_pro', process.cwd() + '/' + project, function (err) {
              if (err) {
                // console.log(err)
                return;
              }
              // console.log(process.cwd() + '/' + project)
              loading.succeed();
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();
exports.default = init;