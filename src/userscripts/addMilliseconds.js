// ==UserScript==
// @name         Add milliseconds
// @namespace    http://github.com/LegendaryB/tw-framework
// @version      0.1
// @description  try to take over the world!
// @author       LegendaryB
// @include      https://de*.die-staemme.de/game.php?**&screen=place&try=confirm
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const TABLE_ROW_HTML = `
      <tr>
         <td>Milliseconds:</td>
         <td><input type="number" id="targetMs"></td>
      </tr>
      <tr>
         <td>Use ENTER Hotkey:</td>
         <td><input type="checkbox" id="useENTERHotkey"></td>
      </tr>
      <tr>
         <td>Offset:</td>
         <td><input type="number" id="greenBeforeSend" value="80"><button type="button" id="saveTargetMs" class="btn" style="float: right;">Save</button></td>
      </tr>`

    const SERVER_MILLISECONDS_HTML = `<span id="serverMs" style="font-size: 11px; color: DimGray;"></span>`;

    $('.relative_time').after(SERVER_MILLISECONDS_HTML);
    $($('#command-data-form').find('tbody')[0]).append(TABLE_ROW_HTML);

    const SAVE_TARGET_MS_ELEMENT = $('#saveTargetMs');
    const TARGET_MS_ELEMENT = $('#targetMs');
    const SERVER_MS_ELEMENT = $('#serverMs');
    const USE_ENTER_HOTKEY_ELEMENT = $('#useENTERHotkey');
    const GREEN_BEFORE_SEND_ELEMENT = $('#greenBeforeSend');

    const ARRIVAL_ELEMENT = $('#date_arrival');

    let targetMs = 0;
    let greenBeforeSend = 0;

    const setArrivalElementStyle = (color) => {
        ARRIVAL_ELEMENT.css({ 'background-color': color });
    };

    const inRange = (value, min, max) => {
        return value >= min && value <= max;
    };

    const highlightServerMsElement = (currentMs) => {
        if (targetMs == 0) {
            return;
        }

        if (currentMs == targetMs || inRange(currentMs, targetMs - greenBeforeSend, targetMs)) {
            setArrivalElementStyle('Lime');
        }
        else {
            setArrivalElementStyle('Red');
        }
    };

    const run = () => {
        let date = new Date(Timing.getCurrentServerTime());
        let currentMs = date.getMilliseconds();

        highlightServerMsElement(currentMs);

        SERVER_MS_ELEMENT.text(`:${currentMs}`);

        requestAnimationFrame(run);
    };

    SAVE_TARGET_MS_ELEMENT.click(() => {
        targetMs = Number(TARGET_MS_ELEMENT.val());
        greenBeforeSend = Number(GREEN_BEFORE_SEND_ELEMENT.val());

        UI.SuccessMessage('Target millisecond saved!');

        if (USE_ENTER_HOTKEY_ELEMENT.is(':checked')) {
            $('#troop_confirm_submit').focus();
        }
    });

    run();
})();