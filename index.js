'use strict';

const BroccoliDebug = require('broccoli-debug');
const debugTree = BroccoliDebug.buildDebugCallback('ember-test-helpers');

module.exports = {
  name: require('./package').name,

  treeForAddonTestSupport(tree) {
    let input = debugTree(tree, 'addon-test-support:input');
    
    let output = this.preprocessJs(input, '/', this.name, {
      registry: this.registry,
    });

    return debugTree(output, 'addon-test-support:output');
  }
};
