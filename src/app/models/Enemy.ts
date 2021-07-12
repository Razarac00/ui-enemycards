import { EnemyElement } from "./EnemyElement";

export interface Enemy {
    id: any;
    name: string;
    weaknesses: EnemyElement[];
    resistances: EnemyElement[];
    immunities: EnemyElement[];
    image: string;
    description: string;
}