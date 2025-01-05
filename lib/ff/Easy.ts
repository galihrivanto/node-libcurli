/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { NodeLibcurlNativeBinding } from '../types/NodeLibcurlNativeBinding'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bindings: NodeLibcurlNativeBinding = require('../binding/ff/node_libcurl.node')

/**
 * This is a Node.js wrapper around the binding {@link EasyNativeBinding | native Easy class}
 *
 * @public
 */
class Easy extends bindings.Easy {}

export { Easy }
