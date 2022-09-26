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

    const handleClick = () => {
        setplayer1Option(Math.floor(Math.random() * 3));
        setPlayer2Option(Math.floor(Math.random() * 3));
    }

    //0=tijera 1=papel 2=piedra
    useEffect(() => {
        if (player1Option == 2 && player2Option == 0 || player1Option == 0 && player2Option == 1 || player1Option == 1 && player2Option == 2) {
            setGanador("Gana Jugador 1");
            setvictoryPlayer1(victoryPlayer1 + 1);

        } else if (player2Option == 2 && player1Option == 0 || player2Option == 0 && player1Option == 1 || player2Option == 1 && player1Option == 2) {
            setGanador("Gana Jugador 2");
            setvictoryPlayer2(victoryPlayer2 + 1);

        } else if (player1Option == 0 && player2Option == 0 || player1Option == 1 && player2Option == 1 || player1Option == 2 && player2Option == 2) {
            setGanador("Empate");
        }
    }, [player1Option, player2Option])

    return (
        < main className="container-game" >
            <section className='player1'>
                <img src={imgPlayer1} width='330' height='300'></img>
                <p className='name'>Jugador1</p>
                <p className='victorys'>Victorias:{victoryPlayer1}</p>
            </section>
            <section className="game-data">
                <Button onClick={handleClick} className="btn-secondary" >Play</Button>
                <p>Resultado: {ganador} </p>
            </section>
            <section className='player2'>
                <img src={imgPlayer2} width='330' height='300'></img>
                <p className='name'>Jugador2</p>
                <p className='victorys'>Victorias:{victoryPlayer2}</p>
            </section>
        </main >
    )
};