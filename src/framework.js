import { World } from "./modules/world/world";
import { ScreenControllerFactory } from "./modules/screens/factory";
import { ModelFactory } from "./models/factory";

(async () => {
    window.TWFramework = {};
    window.TWFramework.ModelFactory = ModelFactory;
    window.TWFramework.ScreenControllerFactory = ScreenControllerFactory;

    window.TWFramework.World = await World.load();
})();