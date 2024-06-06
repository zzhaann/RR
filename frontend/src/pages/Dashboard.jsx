import React from 'react';
import { useSelector } from 'react-redux';
import GameCard from '../components/GameCard';
import Board from "../components/puzzle/board/Board.jsx";

const Dashboard = () => {

    return (
        <div>
            <p className="Dashboard__text">Here you can play some mini games with Capybara, I hope you enjoy!</p>
            <div className="ccard-grid">
                <GameCard
                    title="Memory Game"
                    imageUrl="/images/memoryGame.jpg"
                    link="/memory-game"
                    className="first-card"
                />
                <GameCard
                    title="Tic Tac Toe"
                    imageUrl="/images/tictac.jpg"
                    link="/tic-tac-toe"
                />
                <GameCard
                    title="Puzzle"
                    imageUrl="/images/puzzle.jpg"
                    link="/puzzle-game"
                />
            </div>
        </div>
    );
};

export default Dashboard;
