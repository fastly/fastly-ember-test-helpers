import { findAll } from '@ember/test-helpers'

export function findMessageByText(text) {
  return findAll('.fui-message').find(item => item.outerText.includes(text))
}
