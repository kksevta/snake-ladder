import redIcon from 'app/assets/custom/img/circle_red.png'
import greenIcon from 'app/assets/custom/img/circle_green.png'
const Ladders = [
    {
        from: 10,
        to: 20
    },
    {
        from: 10,
        to: 20
    },
]
const Snakes = [
    {
        from: 30,
        to: 10
    },
    {
        from: 40,
        to: 20
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