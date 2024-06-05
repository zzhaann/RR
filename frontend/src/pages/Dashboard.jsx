/* eslint-disable no-unused-vars */ import React from 'react' /* eslint-enable no-unused-vars */
import { useSelector } from 'react-redux'
import TicTacToe from "../components/TicTacToe/TicTacToe.jsx";
//import MemoryGame from "../components/MemoryGame/MemoryGame.jsx";

/*game*/
const Dashboard = () => {

    const { userInfo } = useSelector((state) => state.auth)


    return (
        <div>
            <h1>Hello, {userInfo.first_name } </h1>
            <TicTacToe />
        </div>

    )
}

export default Dashboard