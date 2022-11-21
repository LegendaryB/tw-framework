export interface DefenceTableRow {
    element: HTMLTableRowElement,
    data: DefenceTableRowData
}

export interface DefenceTableRowData {
    source: string;
    playerName: string;
    distance: number;
    units: Map<string, number>;
}

export class UnitScreen {
    public static getDefenceTable(): HTMLTableElement {
        return document.getElementById('units_home') as HTMLTableElement;
    }

    public static getDefenceTableRows(): DefenceTableRow[] {
        const tableRowElements = this.getDefenceTableRowElements();

        let tableRows: DefenceTableRow[] = [];
        
        for (const tableRowElement of tableRowElements) {
            const tableRowElementData = this.getDefenceTableRowData(tableRowElement);
        
            tableRows.push({
                element: tableRowElement,
                data: tableRowElementData
            });
        }

        return tableRows;
    }

    private static getDefenceTableRowData(row: HTMLTableRowElement): DefenceTableRowData {
        let units = new Map<string, number>();
        let unitItems = Array.from(row.querySelectorAll<HTMLTableCellElement>('.unit-item'));

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
        }
    }

    private static getDefenceTableRowElements(): HTMLTableRowElement[] {
        let table = this.getDefenceTable();
        let elements = Array.from(table.querySelectorAll<
            HTMLInputElement>('input[type=checkbox]:not(.selectAll)'));

        let tableRows: HTMLTableRowElement[] = [];

        for (const element of elements) {
            let tableRowElement = element.closest('tr');

            if (tableRowElement !== null) {
                tableRows.push(tableRowElement);
            }
        }

        return tableRows;
    }

    private static getUnitName(cell: HTMLTableCellElement): string | null {
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

    private static getPlayerName(row: HTMLTableRowElement): string {
        let cell = row.cells[1];
        let matches = cell.innerText.match(/\(([^()]*)\)/g);
    
        return matches[0].replace("(", "").replace(")", "");
    }

    private static toUpperCaseAt (str: string, index: number){
        return str.substring(0, index) + str.charAt(index).toUpperCase() + str.substring(index + 1);
    }
}