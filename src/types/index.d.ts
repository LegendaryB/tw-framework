import { GameDataObjectDefinition } from "./GameDataWindowObject";
import { UIObjectDefinition } from "./UIObjectDefinition";

declare global {
    interface Window {
        game_data: GameDataObjectDefinition;
        UI: UIObjectDefinition;
    }
}