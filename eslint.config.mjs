/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [github-action-current-date-time] /eslint.config.mjs
 * @create:      2021-11-19 15:10:10.506
 * @modify:      2026-03-12 10:26:16.974
 * @version:     1.4.1
 * @times:       15
 * @lines:       28
 * @copyright:   Copyright © 2021-2026 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/

import config, { globals } from "@wenkai.wu/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: [
            "*.js",
            "*.mjs",
        ],
        extends: [config],
        languageOptions: { globals: { ...globals.node } },
    },
]);