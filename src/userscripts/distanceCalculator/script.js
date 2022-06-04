// ==UserScript==
// @name         Distance calculator2
// @namespace    https://github.com/LegendaryB/tw-framework
// @version      0.2
// @description  try to take over the world!
// @author       LegendaryB
// @include		 https://de*.die-staemme.de/game.php*screen=map*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;

    let enabled = false;
    let oldClickFunction;
    let villages = [];
    let villagesId = [];

    const AXE_TRAVEL_TIME = 18;
    const SPEAR_TRAVEL_TIME = 18;
    const SWORD_TRAVEL_TIME = 22;
    const SPY_TRAVEL_TIME = 9;
    const LIGHT_TRAVEL_TIME = 10;
    const HEAVY_TRAVEL_TIME = 11;
    const RAM_TRAVEL_TIME = 30;
    const CATAPULT_TRAVEL_TIME = 30;
    const SNOB_TRAVEL_TIME = 35;


    const run = () => {
        enabled = true;
        win.TWMap.mapHandler.integratedSpawnSector = win.TWMap.mapHandler.spawnSector;
        win.TWMap.mapHandler.spawnSector = spawnSector;

        oldClickFunction = win.TWMap.mapHandler.onClick;
        win.TWMap.mapHandler.onClick = clickFunction;
        win.TWMap.reload();
    };

    const disable = () => {
        enabled = false;
        villages = [];
        villagesId = [];
        win.TWMap.mapHandler.onClick = oldClickFunction;
        win.TWMap.mapHandler.spawnSector = win.TWMap.mapHandler.integratedSpawnSector;
        win.TWMap.reload();

        $('#distance-calc-table').remove();
    };

    const spawnSector = (data, sector) => {
        win.TWMap.mapHandler.integratedSpawnSector(data, sector);
        for (var i = 0; i < villagesId.length; i++) {
            let villageId = villagesId[i];
            if(villageId === null){
                continue;
            }
            let v = $('#map_village_' + villageId);
            $('<div class="DistanceCalculatorOverlay" id="DistanceCalculator_overlay_' + villageId + '" style="width:52px; height:37px; position: absolute; z-index: 50; left:' + $(v).css('left') + '; top: ' + $(v).css('top') + ';"></div>').appendTo(v.parent());
            $('#DistanceCalculator_overlay_' + villageId).css('outline', '2px solid red');
        }
    }

    const convertTime = (input) => {
        let input1 = Math.round( input * 60);
        let seconds = (input1 % 60);
        let input2 = Math.floor(input1 / 60);
        let minutes = input2 % 60;
        let input3 = Math.floor(input2 / 60);
        let hours = input3 % 24;

        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;

        return `${hours}:${minutes}:${seconds}`;
    }

    const calculateDistance = () => {
        let start = villages[0].split('|');
        let startX = start[0];
        let startY = start[1];

        let target = villages[1].split('|');
        let targetX = target[0];
        let targetY = target[1];

        let xDis = startX - targetX;
        let yDis = startY - targetY;

        return Math.sqrt(xDis * xDis + yDis * yDis);
    }

    const calculateRuntimes = () => {
        let distance = calculateDistance();

        return {
            Axe: convertTime(AXE_TRAVEL_TIME * distance),
            Sword: convertTime(SWORD_TRAVEL_TIME * distance),
            Spear: convertTime(SPEAR_TRAVEL_TIME * distance),
            Spy: convertTime(SPY_TRAVEL_TIME * distance),
            Light: convertTime(LIGHT_TRAVEL_TIME * distance),
            Heavy: convertTime(HEAVY_TRAVEL_TIME * distance),
            Ram: convertTime(RAM_TRAVEL_TIME * distance),
            Catapult: convertTime(CATAPULT_TRAVEL_TIME * distance),
            Snob: convertTime(SNOB_TRAVEL_TIME * distance)
        };
    }

    const markVillageAsSelected = (id) => {
        $('#DistanceCalculator_overlay_' + id).css('outline', '2px solid red');
    }
    const demarkVillageAsSelected = (id) => {
        $('#DistanceCalculator_overlay_' + id).css('outline', '');
    }

    const renderUI = () => {
        let runtimes = calculateRuntimes();

        let html = `<table id="distance-calc-table" class="vis" style="border-spacing:0px;border-collapse:collapse;table-layout: fixed;" width="100%">
		        <thead>
                    <tr>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="spear">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_spear.png" title="Speerträger" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="sword">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_sword.png" title="Schwertkämpfer" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="axe">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_axe.png" title="Axtkämpfer" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="spy">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_spy.png" title="Späher" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="light">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_light.png" title="Leichte Kavallerie" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="heavy">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_heavy.png" title="Schwere Kavallerie" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="ram">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_ram.png" title="Rammbock" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="catapult">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_catapult.png" title="Katapult" alt="" class=""></a>
                        </th>
                        <th style="text-align:center"><a href="#" class="unit_link" data-unit="snob">
                            <img src="https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_snob.png" title="Katapult" alt="" class=""></a>
                        </th>
                    </tr>
		        </thead>
                <tbody>
                    <tr>
                        <td style="text-align:center" data-unit="spear">${runtimes.Spear}</td>
						<td style="text-align:center" data-unit="sword">${runtimes.Sword}</td>
						<td style="text-align:center" data-unit="axe">${runtimes.Axe}</td>
                        <td style="text-align:center" data-unit="spy">${runtimes.Spy}</td>
                        <td style="text-align:center" data-unit="light">${runtimes.Light}</td>
                        <td style="text-align:center" data-unit="heavy">${runtimes.Heavy}</td>
                        <td style="text-align:center" data-unit="ram">${runtimes.Ram}</td>
                        <td style="text-align:center" data-unit="catapult">${runtimes.Catapult}</td>
                        <td style="text-align:center" data-unit="snob">${runtimes.Snob}</td>
			        </tr>
		        </tbody>
            </table>`;

        let template = document.createElement('template');
        template.innerHTML = html;

        $('#map_whole').after(template.content);
    }

    const handleVillage = (x, y) => {
        var coord = x + "|" + y;
        var index = villages.indexOf(coord);
        var village = win.TWMap.villages[(x) * 1000 + y];
        if (!village) {
            return;
        }

        if (villages.length == 2) {
            villages = [];
            villagesId = [];

            $('#distance-calc-table').remove();
        }

        if (index === -1) {
            villages.push(coord);
            villagesId.push(village.id);
            markVillageAsSelected(village.id);
            win.TWMap.reload();
        } else {
            villages[index] = null;
            var indexId = villagesId.indexOf(village.id);
            villagesId[indexId] = null;
            demarkVillageAsSelected(village.id);
        }

        if (villages.length == 2) {
            renderUI();
        }
    }

    const clickFunction = (x, y, event) => {
        handleVillage(x, y);
        return false; //Signal that the TWMap should not follow the URL associated to this click event
    }

    $(document).ready(() => {
        $(document).on("keypress", (e) => {
            if (String.fromCharCode(e.which) == 'd') {
                if (enabled == false) {
                    run();
                } else {
                    disable();
                }
            }
        })
    });
})();