import redIcon from 'app/assets/custom/img/circle_red.png'
import greenIcon from 'app/assets/custom/img/circle_green.png'
const Ladders = [
    {
        from: 9,
        to: 20
    },
    {
        from: 45,
        to: 70
    },
    {
        from: 55,
        to: 78
    },
]
const Snakes = [
    {
        from: 30,
        to: 12
    },
    {
        from: 40,
        to: 20
    },
    {
        from: 99,
        to: 10
    },
]
const Players = [
    {
        turn: true,
        position: 0,
        won: false,
        icon: redIcon,
        name: "Player1",
        id: 1
    },
    {
        turn: false,
        position: 0,
        won: false,
        icon: greenIcon,
        name: "Player2",
        id: 2
    }
]
export { Ladders, Snakes, Players }