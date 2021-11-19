/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [github-action-current-date-time] /.eslintrc.js
 * @create:      2021-11-19 15:10:10.506
 * @modify:      2021-11-19 15:10:12.873
 * @version:     1.0.1
 * @times:       2
 * @lines:       32
 * @copyright:   Copyright © 2021 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/

module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "@wenkai.wu/eslint-config",
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
    },
};
