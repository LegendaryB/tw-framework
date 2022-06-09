// ==UserScript==
// @name         Rohstoffe beim Abbrechen eines Gebäudes anzeigen
// @namespace    https://github.com/LegendaryB/tw-framework
// @version      0.1
// @author       LegendaryB
// @match        https://*.die-staemme.de/game.php?*&screen=main*
// @require      https://raw.githubusercontent.com/LegendaryB/tw-framework/main/dist/framework.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;

    const BUILD_ORDER_ELEMENTS = document.querySelectorAll('[class*="buildorder_"]');

    const getBuildingName = (element) => {
        let foundClassName = '';

        for (const className of element.classList) {
            if (className.includes('buildorder_')) {
                foundClassName = className;
                break;
            }
        }

        let name = foundClassName.split('_')[1];
        name = name.charAt(0).toUpperCase() + name.slice(1);

        return name;
    };

    const getBuildingLevel = (element) => {
        let level = element.cells[0].lastChild.data.trim();
        level = level.substring(level.length - 2, level.length);

        return Number(level) - 1;
    }

    const calculate = (building, level) => {
        const buildingInfo = win.TWFramework.World.BuildingInfo[building];

        return {
            Wood: Math.round(buildingInfo.Wood * Math.pow(buildingInfo.WoodFactor, level)),
            Stone: Math.round(buildingInfo.Stone * Math.pow(buildingInfo.StoneFactor, level)),
            Iron: Math.round(buildingInfo.Iron * Math.pow(buildingInfo.IronFactor, level))
        };
    };

    const createToolTip = (element, values) => {
        element.setAttribute('title', `Wood: ${values.Wood}, Stone: ${values.Stone}, Iron: ${values.Iron}`);
    };

    const handleMouseOver = (event) => {
        let parentTableRowElement = event.target.closest('tr');
        let building = getBuildingName(parentTableRowElement);
        let level = getBuildingLevel(parentTableRowElement);

        let values = calculate(building, level);

        createToolTip(event.target, values);
    };

    for (const element of BUILD_ORDER_ELEMENTS) {
        element.querySelector('.btn-cancel').addEventListener('mouseover', handleMouseOver);
    };
})();