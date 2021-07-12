import { PageModel } from "../models/PageModel";

export const enemiesMock: PageModel = {
    content: [
        {
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
        },
        {
            id: null,
            name: "Dark Sun Gwyndolin",
            weaknesses: [
                {
                    id: 6,
                    name: "Poison"
                }
            ],
            resistances: [
                {
                    id: 4,
                    name: "None"
                }
            ],
            immunities: [
                {
                    id: 4,
                    name: "None"
                }
            ],
            image: "http://vignette1.wikia.nocookie.net/darksouls/images/1/1f/Gwyndolin_Ingame.jpg/revision/latest?cb=20160630212846",
            description: "This is a marathon where you run, get in some hits, and then avoid getting shot after he teleports."
        },
        {
            id: null,
            name: "Gaping Dragon",
            weaknesses: [
                {
                    id: 4,
                    name: "None"
                }
            ],
            resistances: [
                {
                    id: 6,
                    name: "Poison"
                }
            ],
            immunities: [
                {
                    id: 4,
                    name: "None"
                }
            ],
            image: "http://darksouls.wikidot.com/local--files/bosses/gaping-dragon-large.jpg",
            description: "Sprinting and rolling is good here. Avoid the acid. Kill the Channeler before starting this fight. Cut the tail."
        },
        {
            id: null,
            name: "Great Grey Wolf Sif",
            weaknesses: [
                {
                    id: 6,
                    name: "Poison"
                }
            ],
            resistances: [
                {
                    id: 4,
                    name: "None"
                }
            ],
            immunities: [
                {
                    id: 4,
                    name: "None"
                }
            ],
            image: "http://darksouls.wikidot.com/local--files/npcs/sif-the-great-grey-wolf-large.jpg",
            description: "I won't ask why you're killing the dog. Melee builds get under him, Ranged builds kite and time your shots."
        }
    ],
    pageTotal: 2,
    pageSize: 4,
    pageNumber: 0,
    enemyTotal: 7,
    enemyOffset: 0,
    hasNext: true,
    hasPrevious: false
}