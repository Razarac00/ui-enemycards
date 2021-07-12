import { Enemy } from "../models/Enemy";

export const enemyMock: Enemy = {
    id: null,
    name: "Bell Gargoyle",
    weaknesses: [
        {
            id: 2,
            name: "Fire"
        },
        {
            id: 3,
            name: "Lightning"
        },
        {
            id: 6,
            name: "Poison"
        },
        {
            id: 7,
            name: "Toxic"
        }
    ],
    resistances: [
        {
            id: 8,
            name: "Bleed"
        }
    ],
    immunities: [
        {
            id: 4,
            name: "None"
        }
    ],
    image: "https://i.pinimg.com/originals/7e/f5/04/7ef5043586728dc2bdf39d957bf84760.jpg",
    description: "There are two. Cut off the tail of one of them."
} 