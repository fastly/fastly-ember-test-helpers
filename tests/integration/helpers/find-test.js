import { module, test } from 'qunit';
import { findMessageByText } from '@fastly/ember-test-helpers/find'
import { setupContext, teardownContext } from '@ember/test-helpers';

module('Integration | Helper | find', function(hooks) {
  
  let context, element;

  hooks.beforeEach(function() {
    context = {};
    element = document.createElement('div');
    element.setAttribute('id', 'test-obj');
    element.setAttribute('class', 'fui-message');
  });

  hooks.afterEach(async function() {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
    if (context.owner) {
      await teardownContext(context);
    }

    document.getElementById('ember-testing').innerHTML = '';
  });

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    await setupContext(context);
    const fixture = document.getElementById('ember-testing')
    fixture.append(element)
    element.outerText = 'This is the test text';
    assert.equal(findMessageByText('test text'), document.getElementById('test-obj'))
  });
});
