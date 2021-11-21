/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [github-action-current-date-time] /index.js
 * @create:      2021-11-19 15:01:56.235
 * @modify:      2021-11-21 10:43:38.119
 * @version:     1.0.1
 * @times:       4
 * @lines:       62
 * @copyright:   Copyright © 2021 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/


const core = require("@actions/core");
const github = require("@actions/github");

const { FormatDate, DateTime } = require("kaven-basic");

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

    const date = Date.Create();

    const time = FormatDate(date, format, timezoneOffset);
    core.setOutput("time", time);

    const dt = DateTime.From(date, timezoneOffset);
    core.setOutput("year", dt.Year);
    core.setOutput("month", dt.Month);
    core.setOutput("day", dt.Day);
    core.setOutput("hours", dt.Hours);
    core.setOutput("minutes", dt.Minutes);
    core.setOutput("seconds", dt.Seconds);
    core.setOutput("milliseconds", dt.Milliseconds);
    core.setOutput("day_of_week", dt.DayOfWeek);
    core.setOutput("week_of_year", dt.WeekOfYear);

    core.setOutput("milliseconds_since_epoch", date.getTime());

    // Get the JSON webhook payload for the event that triggered the workflow
    if (debug) {
        const payload = JSON.stringify(github.context.payload, undefined, 2);
        console.log(`The event payload: ${payload}`);
    }
} catch (error) {
    core.setFailed(error.message);
}