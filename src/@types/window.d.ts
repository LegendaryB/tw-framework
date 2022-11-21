import { UIObjectDefinition } from "../types/UIObjectDefinition";

declare global {
    interface Window {
        UI: UIObjectDefinition;
    }
}