import { GameData } from './types/game_data';

export * from './UIMessageService';
export * from './DOMHelpers';
export * from './i18n/Translator';
export * from './world';

export const getGameData = (): GameData => {
    return window.game_data;
}