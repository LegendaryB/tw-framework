import { InfoAllyController } from "./infoAllyController";
import { InfoPlayerController } from "./infoPlayerController";

export class ScreenControllerFactory {
    static #controllers = {
        'info_ally': new InfoAllyController(),
        'info_player': new InfoPlayerController()
    }

    static getCurrentScreenController() {
        return this.getControllerForScreen(game_data.screen);
    }

    static getControllerForScreen(screen) {
        return this.#controllers[screen];
    }
}