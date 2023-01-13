export type BuildingInfoKeys = 'Main' | 'Barracks' | 'Stable' | 'Garage' | 'Snob' | 'Smith' | 'Place' | 'Statue' | 'Market' | 'Wood' | 'Stone' | 'Iron' | 'Farm' | 'Storage' | 'Hide' | 'Wall'

export interface BuildingInfo {
    MaxLevel: number
    MinLevel: number
    Wood: number
    Stone: number
    Iron: number
    Pop: number
    WoodFactor: number
    StoneFactor: number
    IronFactor: number
    PopFactor: number
    BuildTime: number
    BuildTimeFactor: number
}