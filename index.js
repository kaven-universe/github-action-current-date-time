/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [github-action-current-date-time] /index.js
 * @create:      2021-11-19 15:01:56.235
 * @modify:      2021-11-19 15:06:12.688
 * @version:     1.0.1
 * @times:       2
 * @lines:       45
 * @copyright:   Copyright © 2021 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/


const core = require("@actions/core");
const github = require("@actions/github");

const { FormatDate } = require("kaven-basic");

function logJson(data) {
    console.log(JSON.stringify(data, undefined, 2));
}

try {

    // inputs defined in action metadata file
    const debug = core.getBooleanInput("debug");
    const format = core.getInput("format");
    const timezoneOffset = parseInt(core.getInput("timezone-offset"));

    if (debug) {
        console.log(`format: ${format}, timezone-offset: ${timezoneOffset}`);
    }

    const time = FormatDate(undefined, format, timezoneOffset);
    core.setOutput("time", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}