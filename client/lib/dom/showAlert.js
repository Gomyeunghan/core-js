import { isString } from '../utils/type.js';
import { addClass, removeClass } from './css.js';
import { getNodes } from './getNode.js';

/**
 *
 * @param {HTMLElement|String} node
 * @param {String} messages
 * @param {Number} timeout
 * @param {void}
 */

export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) node = getNodes(node);

  node.textContent = message;

  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
