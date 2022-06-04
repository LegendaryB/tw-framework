import { World } from "./modules/world/world";
import { ScreensController } from "./modules/screens/screens";
import { ModelFactory } from "./models/factory";

(async () => {
    window.TWFramework = {};
    window.TWFramework.ModelFactory = ModelFactory;

    window.TWFramework.World = await World.load();
    window.TWFramework.ScreenControllers = new ScreensController();
    
})();