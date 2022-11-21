import { PlayerWindowObject } from "./PlayerWindowObject";
import { VillageWindowObject } from "./VillageWindowObject";

export interface GameDataObjectDefinition {
    Player: PlayerWindowObject;
    Village: VillageWindowObject;
}

// player,quest,features,village,nav,link_base,link_base_pure,csrf,world,market,RTL,version,majorVersion,screen,mode,device,pregame,units,locale,group_id,time_generated