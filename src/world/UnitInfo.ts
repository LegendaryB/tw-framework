export type UnitInfoKeys = 'Spear' | 'Sword' | 'Axe' | 'Archer' | 'Spy' | 'Light' | 'Marcher' | 'Heavy' | 'Ram' | 'Catapult' | 'Knight' | 'Snob'

export interface UnitInfo {
    BuildTime: number
    Pop: number
    Speed: number
    Attack: number
    Defense: number
    DefenseCavalry: number
    DefenseArcher: number
    Carry: number
  }