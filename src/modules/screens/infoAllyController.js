export class InfoAllyController {
    #TABLE_CLASSNAME = 'vis';

    #ATTRIBUTE_TABLE_INDEX = 0;
    #PLAYER_TABLE_INDEX = 1;

    getAlly() {
        let table = this.getAttributesTable();
        let rows = Array.from(table.querySelectorAll('td:nth-child(2)'));

        return {
            id: InfoAlly.ally_id,
            name: rows[0].innerText,
            tag: rows[1].innerText,
            playerCount: Number(rows[2].innerText),
            points: Number(rows[4].innerText.replace('.', '')),
            rank: Number(rows[5].innerText),
            bashpoints: this.#getBashpoints(rows[7]),
            bashpointsRank: this.#getBashpointsRank(rows[7])
        };
    }

    getPlayers() {
        let table = this.getPlayerTable();
        let rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)'));

        let players = [];

        for (let row of rows) {
            let player = {
                id: this.#getPlayerId(row.cells[0]),
                name: this.#getPlayerName(row.cells[0]),
                points: Number(row.cells[2].innerText.replace(',', '')),
                rank: Number(row.cells[3].innerText),
                ally: this.getAlly(),
                villageCount: Number(row.cells[4].innerText)
            };

            players.push(player);
        }

        return players;
    }

    getAttributesTable() {
        return this.#getTableByIndex(this.#ATTRIBUTE_TABLE_INDEX);
    }

    getPlayerTable() {
        return this.#getTableByIndex(this.#PLAYER_TABLE_INDEX);
    }

    #getPlayerName(cell) {
        let playerAnchor = cell.querySelector('a');

        return playerAnchor.innerText;
    }

    #getBashpoints(cell) {
        let bashpoints = cell.innerText;
        bashpoints = bashpoints.substring(0, bashpoints.indexOf(' ') -1);

        return Number(bashpoints.replace('.', ''));
    }

    #getBashpointsRank(cell) {
        let bashpointsRank = cell.innerText;
        bashpointsRank = bashpointsRank.substring(bashpointsRank.indexOf('(') + 1, bashpointsRank.indexOf(')'));

        return Number(bashpointsRank.replace('.', ''));
    }

    #getPlayerId(cell) {
        let playerAnchor = cell.querySelector('a');
        let searchParams = new URLSearchParams(playerAnchor.href);

        return Number(searchParams.get('id'));
    }

    #getTableByIndex(index) {
        return document.getElementsByClassName(this.#TABLE_CLASSNAME)[index];
    }
}