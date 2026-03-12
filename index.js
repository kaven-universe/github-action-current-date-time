/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [github-action-current-date-time] /index.js
 * @create:      2021-11-19 15:01:56.235
 * @modify:      2026-03-12 10:41:26.141
 * @version:     1.4.1
 * @times:       12
 * @lines:       67
 * @copyright:   Copyright © 2021-2026 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/

/* eslint-disable no-console */

import { getBooleanInput, getInput, setOutput, setFailed } from "@actions/core";
import { context } from "@actions/github";
import { DateTime, TimeUnit } from "kaven-basic";

try {
    // inputs defined in action metadata file
    const debug = getBooleanInput("debug");
    const format = getInput("format");
    const timezoneOffsetInput = getInput("timezone-offset");
    const timezoneOffset = parseInt(timezoneOffsetInput, 10);

    if (isNaN(timezoneOffset)) {
        throw new Error("Invalid timezone-offset value");
    }

    if (debug) {
        console.log(`format: ${format}, timezone-offset: ${timezoneOffset}`);
    }

    const now = Date.now();
    const date = new DateTime(now);

    if (timezoneOffset !== 0) {
        date.Subtract(timezoneOffset, TimeUnit.minutes);
    }

    const time = date.ToString(format);
    setOutput("time", time);

    setOutput("year", date.Year);
    setOutput("month", date.Month);
    setOutput("day", date.Day);
    setOutput("hours", date.Hours);
    setOutput("minutes", date.Minutes);
    setOutput("seconds", date.Seconds);
    setOutput("milliseconds", date.Milliseconds);
    setOutput("day_of_week", date.DayOfWeek);
    setOutput("week_of_year", date.WeekOfYear);

    setOutput("milliseconds_since_epoch", now);

    // Get the JSON webhook payload for the event that triggered the workflow
    if (debug) {
        const payload = JSON.stringify(context.payload, undefined, 2);
        console.log(`The event payload: ${payload}`);
    }
} catch (error) {
    setFailed(error.message);
}
