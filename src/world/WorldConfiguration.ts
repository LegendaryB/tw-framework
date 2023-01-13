export interface WorldConfiguration {
    Speed: number
    UnitSpeed: number
    Moral: number
    Build: Build
    Misc: Misc
    Commands: Commands
    Newbie: Newbie
    Game: Game
    Buildings: Buildings
    Snob: Snob
    Ally: Ally
    Coord: Coord
    Sitter: Sitter
    Sleep: Sleep
    Night: Night
    Win: Win
}

interface Build {
    Destroy: number
}

interface Misc {
    KillRanking: number
    Tutorial: number
    TradeCancelTime: number
}

interface Commands {
    MillisArrival: number
    CommandCancelTime: number
}

interface Newbie {
    Days: number
    RatioDays: number
    Ratio: number
    RemoveNewbieVillages: number
}

interface Game {
    BuildtimeFormula: number
    Knight: number
    KnightNewItems: number
    Archer: number
    Tech: number
    FarmLimit: number
    Church: number
    Watchtower: number
    Stronghold: number
    FakeLimit: number
    BarbarianRise: number
    BarbarianShrink: number
    BarbarianMaxPoints: number
    Scavenging: number
    Hauls: number
    HaulsBase: number
    HaulsMax: number
    BaseProduction: number
    Event: number
    SuppressEvents: number
}

interface Buildings {
    CustomMain: number
    CustomFarm: number
    CustomStorage: number
    CustomPlace: number
    CustomBarracks: number
    CustomChurch: number
    CustomSmith: number
    CustomWood: number
    CustomStone: number
    CustomIron: number
    CustomMarket: number
    CustomStable: number
    CustomWall: number
    CustomGarage: number
    CustomHide: number
    CustomSnob: number
    CustomStatue: number
    CustomWatchtower: number
}

interface Snob {
    Gold: number
    CheapRebuild: number
    Rise: number
    MaxDist: number
    Factor: number
    CoinWood: number
    CoinStone: number
    CoinIron: number
    NoBarbConquer: number
}

interface Ally {
    NoHarm: number
    NoOtherSupport: number
    NoOtherSupportType: number
    AllytimeSupport: number
    NoLeave: number
    NoJoin: number
    Limit: number
    FixedAllies: number
    WarsMemberRequirement: number
    WarsPointsRequirement: number
    WarsAutoacceptDays: number
    Levels: number
    XpRequirements: any
}

interface Coord {
    MapSize: number
    Func: number
    EmptyVillages: number
    BonusVillages: number
    Inner: number
    SelectStart: number
    VillageMoveWait: number
    NobleRestart: number
    StartVillages: number
}

interface Sitter {
    Allow: number
}

interface Sleep {
    Active: number
    Delay: number
    Min: number
    Max: number
    MinAwake: number
    MaxAwake: number
    WarnTime: number
}

interface Night {
    Active: number
    StartHour: number
    EndHour: number
    DefFactor: number
    Duration: number
}

interface Win {
    Check: number
}