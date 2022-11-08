/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [github-action-current-date-time] /index.js
 * @create:      2021-11-19 15:01:56.235
 * @modify:      2021-11-21 11:07:59.330
 * @version:     1.0.1
 * @times:       6
 * @lines:       66
 * @copyright:   Copyright © 2021 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/


const core = require("@actions/core");
const github = require("@actions/github");

const { DateTime, TimeUnit } = require("kaven-basic");

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

    const now = Date.now();
    const date = new DateTime(now);

    if (timezoneOffset !== 0) {
        date.Subtract(timezoneOffset, TimeUnit.minutes);
    }

    const time = date.ToString(format);
    core.setOutput("time", time);

    core.setOutput("year", date.Year);
    core.setOutput("month", date.Month);
    core.setOutput("day", date.Day);
    core.setOutput("hours", date.Hours);
    core.setOutput("minutes", date.Minutes);
    core.setOutput("seconds", date.Seconds);
    core.setOutput("milliseconds", date.Milliseconds);
    core.setOutput("day_of_week", date.DayOfWeek);
    core.setOutput("week_of_year", date.WeekOfYear);

    core.setOutput("milliseconds_since_epoch", now);

    // Get the JSON webhook payload for the event that triggered the workflow
    if (debug) {
        const payload = JSON.stringify(github.context.payload, undefined, 2);
        console.log(`The event payload: ${payload}`);
    }
} catch (error) {
    core.setFailed(error.message);
}