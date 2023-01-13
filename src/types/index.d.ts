import { GameData } from './game_data';
import { UI } from './UI';

declare global {
    interface Window {
        game_data: GameData;
        UI: UI;
    }
}