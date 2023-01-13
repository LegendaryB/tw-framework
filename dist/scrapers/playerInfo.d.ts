export declare const scrape: () => void;
export declare const getVillageTable: () => HTMLTableElement;
export declare const getVillages: () => PlayerInfoVillage[];
interface PlayerInfoVillage {
    Name: string;
    Coordinates: string;
    Points: Number;
}
export {};
