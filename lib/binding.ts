import { NodeLibcurlNativeBinding } from './types/NodeLibcurlNativeBinding';


interface BrowserBindings {
  ff: NodeLibcurlNativeBinding;
  chrome: NodeLibcurlNativeBinding;
}

let currentBrowser: 'ff' | 'chrome' = 'ff';
const bindings: BrowserBindings = {
  ff: require('../lib/binding/ff/node_libcurl.node'),
  chrome: require('../lib/binding/chrome/node_libcurl.node'),
};

function setBrowser(browser: 'ff' | 'chrome') {
  currentBrowser = browser;
}

function getBindings() {
  return bindings[currentBrowser];
}

export { setBrowser, getBindings };
