export const scrape = () => {
};
export const getVillageTable = () => {
    let table = document.getElementById('villages_list');
    return table;
};
export const getVillages = () => {
    let table = getVillageTable();
    let villages = [];
    for (const row of table.tBodies[0].rows) {
        let village = {
            Name: row.cells[0].innerText,
            Coordinates: row.cells[1].innerText,
            Points: Number(row.cells[2].innerText.replaceAll('.', ''))
        };
        villages.push(village);
    }
    return villages;
};
