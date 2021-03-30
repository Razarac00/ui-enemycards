import { EnemyElement } from "./EnemyElement";

export interface Enemy {
    id: number;
    name: string;
    weaknesses: EnemyElement[];
    resistances: EnemyElement[];
    immunities: EnemyElement[];
    image: string;
    description: string;
}