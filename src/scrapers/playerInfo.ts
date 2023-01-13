export const scrape = () => {

}

export const getVillageTable = (): HTMLTableElement => {
    let table = document.getElementById('villages_list') as HTMLTableElement;
    return table;
}

export const getVillages = (): PlayerInfoVillage[] => {
    let table = getVillageTable();
    let villages: PlayerInfoVillage[] = [];

    for (const row of table.tBodies[0].rows) {
        let village: PlayerInfoVillage = {
            Name: row.cells[0].innerText,
            Coordinates: row.cells[1].innerText,
            Points: Number(row.cells[2].innerText.replaceAll('.', ''))
        }

        villages.push(village);
    }

    return villages;
}

interface PlayerInfo {

    Villages: PlayerInfoVillage[];
}

interface PlayerInfoVillage {
    Name: string;
    Coordinates: string;
    Points: Number;
}