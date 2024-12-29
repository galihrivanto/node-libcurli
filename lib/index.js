"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.curly = exports.Share = exports.Multi = exports.Easy = exports.Curl = void 0;
/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * node-libcurl
 * @packageDocumentation
 */
var Curl_1 = require("./Curl");
Object.defineProperty(exports, "Curl", { enumerable: true, get: function () { return Curl_1.Curl; } });
var Easy_1 = require("./Easy");
Object.defineProperty(exports, "Easy", { enumerable: true, get: function () { return Easy_1.Easy; } });
var Multi_1 = require("./Multi");
Object.defineProperty(exports, "Multi", { enumerable: true, get: function () { return Multi_1.Multi; } });
var Share_1 = require("./Share");
Object.defineProperty(exports, "Share", { enumerable: true, get: function () { return Share_1.Share; } });
var curly_1 = require("./curly");
Object.defineProperty(exports, "curly", { enumerable: true, get: function () { return curly_1.curly; } });
// enums
__exportStar(require("./enum/CurlAuth"), exports);
__exportStar(require("./enum/CurlChunk"), exports);
__exportStar(require("./enum/CurlCode"), exports);
__exportStar(require("./enum/CurlFeature"), exports);
__exportStar(require("./enum/CurlFileType"), exports);
__exportStar(require("./enum/CurlFnMatchFunc"), exports);
__exportStar(require("./enum/CurlFtpMethod"), exports);
__exportStar(require("./enum/CurlFtpSsl"), exports);
__exportStar(require("./enum/CurlGlobalInit"), exports);
__exportStar(require("./enum/CurlGssApi"), exports);
__exportStar(require("./enum/CurlHeader"), exports);
__exportStar(require("./enum/CurlHsts"), exports);
__exportStar(require("./enum/CurlHttpVersion"), exports);
__exportStar(require("./enum/CurlInfoDebug"), exports);
__exportStar(require("./enum/CurlIpResolve"), exports);
__exportStar(require("./enum/CurlNetrc"), exports);
__exportStar(require("./enum/CurlPause"), exports);
__exportStar(require("./enum/CurlPipe"), exports);
__exportStar(require("./enum/CurlProgressFunc"), exports);
__exportStar(require("./enum/CurlProtocol"), exports);
__exportStar(require("./enum/CurlProxy"), exports);
__exportStar(require("./enum/CurlPush"), exports);
__exportStar(require("./enum/CurlPx"), exports);
__exportStar(require("./enum/CurlReadFunc"), exports);
__exportStar(require("./enum/CurlRtspRequest"), exports);
__exportStar(require("./enum/CurlShareLock"), exports);
__exportStar(require("./enum/CurlShareOption"), exports);
__exportStar(require("./enum/CurlSshAuth"), exports);
__exportStar(require("./enum/CurlSslOpt"), exports);
__exportStar(require("./enum/CurlSslVersion"), exports);
__exportStar(require("./enum/CurlTimeCond"), exports);
__exportStar(require("./enum/CurlUseSsl"), exports);
__exportStar(require("./enum/CurlVersion"), exports);
__exportStar(require("./enum/CurlWriteFunc"), exports);
__exportStar(require("./enum/SocketState"), exports);
