export class UnitScreen {
    static getDefenceTable() {
        return document.getElementById('units_home');
    }
    static getDefenceTableRows() {
        const tableRowElements = this.getDefenceTableRowElements();
        let tableRows = [];
        for (const tableRowElement of tableRowElements) {
            const tableRowElementData = this.getDefenceTableRowData(tableRowElement);
            tableRows.push({
                element: tableRowElement,
                data: tableRowElementData
            });
        }
        return tableRows;
    }
    static getDefenceTableRowData(row) {
        let units = new Map();
        let unitItems = Array.from(row.querySelectorAll('.unit-item'));
        for (const item of unitItems) {
            let unit = this.getUnitName(item);
            let amount = Number(item.innerText);
            units.set(unit, amount);
        }
        return {
            source: row.cells[1].innerText,
            playerName: this.getPlayerName(row),
            distance: Number(row.cells[2].innerText),
            units: units
        };
    }
    static getDefenceTableRowElements() {
        let table = this.getDefenceTable();
        let elements = Array.from(table.querySelectorAll('input[type=checkbox]:not(.selectAll)'));
        let tableRows = [];
        for (const element of elements) {
            let tableRowElement = element.closest('tr');
            if (tableRowElement !== null) {
                tableRows.push(tableRowElement);
            }
        }
        return tableRows;
    }
    static getUnitName(cell) {
        const unitTypeClassNamePrefix = 'unit-item-';
        let classListArray = Array.from(cell.classList);
        for (const item of classListArray) {
            if (item.indexOf(unitTypeClassNamePrefix) != -1) {
                let unitName = item;
                unitName = unitName.replace(unitTypeClassNamePrefix, '');
                unitName = this.toUpperCaseAt(unitName, 0);
                return unitName;
            }
        }
        return null;
    }
    static getPlayerName(row) {
        let cell = row.cells[1];
        let matches = cell.innerText.match(/\(([^()]*)\)/g);
        return matches[0].replace("(", "").replace(")", "");
    }
    static toUpperCaseAt(str, index) {
        return str.substring(0, index) + str.charAt(index).toUpperCase() + str.substring(index + 1);
    }
}
