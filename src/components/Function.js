import { useState, useEffect } from "react"
import gif from '../assets/img/giphy.gif'
export const Fuction = () => {
    const [player1Option, setplayer1Option] = useState()
    const [player2Option, setPlayer2Option] = useState()

    const [imgPlayer1, setImgPlayer1] = useState(gif);
    const [imgPlayer2, setImgPlayer2] = useState(gif);

    const [ganador, setGanador] = useState("?");

    const [victoryPlayer1, setvictoryPlayer1] = useState(0);
    const [victoryPlayer2, setvictoryPlayer2] = useState(0);

    return (
        <></>
    )
};