export interface DefenceTableRow {
    element: HTMLTableRowElement;
    data: DefenceTableRowData;
}
export interface DefenceTableRowData {
    source: string;
    playerName: string;
    distance: number;
    units: Map<string, number>;
}
export declare class UnitScreen {
    static getDefenceTable(): HTMLTableElement;
    static getDefenceTableRows(): DefenceTableRow[];
    private static getDefenceTableRowData;
    private static getDefenceTableRowElements;
    private static getUnitName;
    private static getPlayerName;
    private static toUpperCaseAt;
}
