import { GameDataObjectDefinition } from './types/GameDataWindowObject';

export * from './tw/models';
export * from './tw/assets';
export * from './tw/screens';
export * from './tw/UIMessageService';

export * from './DOMHelpers';
export * from './i18n/Translator';

export const getGameData = (): GameDataObjectDefinition => {
    return window.game_data;
}