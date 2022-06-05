import { World } from "./modules/world/world";
import { ScreenControllerFactory } from "./modules/screens/factory";
import { ModelFactory } from "./models/factory";

const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;

(async () => {
    win.TWFramework = {};
    win.TWFramework.ModelFactory = ModelFactory;
    win.TWFramework.ScreenControllerFactory = ScreenControllerFactory;

    win.TWFramework.World = await World.load();
})();
