import { GameData } from './types/game_data';

export * from './services';
export * from './utils';
export * from './i18n';

export * from './world';
export * from './scrapers'
export * from './common'
export * from './math'

export const getGameData = (): GameData => {
    return window.game_data;
}