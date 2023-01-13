import { Features } from './Features';
import { Nav } from './Nav';
import { Player } from './Player'
import { Quest } from './Quest'
import { Village } from './Village';

export interface GameData {
    rtl: boolean;
    csrf: string;
    device: string;
    features: Features;
    group_id: number;
    link_base: string;
    link_base_pure: string;
    locale: string;
    majorVersion: string;
    market: string;
    // mode
    nav: Nav;
    player: Player
    pregame: boolean;
    quest: Quest;
    screen: string;
    time_generated: number;
    units: string[];
    version: string;
    village: Village;
    world: string;
}
