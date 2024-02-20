// exporting this file using CommonJs method which is default method for NodeJS
// 'addNum' - exporting name that should be matching not the function name 'add'

module.exports.addNum = function add(a, b) {
    return a + b;
};
// for common JS we use 'module' keyword with eexport 
// for ES6 JS we don't use 'module' keyword with eexport 