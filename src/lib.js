import { World } from "./modules/world/world";
import { ScreensController } from "./modules/screens/screens";
import { ModelFactory } from "./models/factory";

window.TWFramework = {};
window.TWFramework.World = World;
window.TWFramework.ScreenControllers = new ScreensController();
window.TWFramework.ModelFactory = ModelFactory;