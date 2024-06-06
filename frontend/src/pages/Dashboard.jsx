import React from 'react';
import { useSelector } from 'react-redux';
import GameCard from '../components/GameCard';

const Dashboard = () => {

    return (
        <div>
            <p className="Dashboard__text">Here you can play some mini games with Capybara, I hope you enjoy!</p>
            <div className="card-grid">
                <GameCard
                    title="Memory Game"
                    imageUrl="/images/cover.jpg"
                    link="/memory-game"
                    className="first-card"
                />
                <GameCard
                    title="Tic Tac Toe"
                    imageUrl="/images/cover.jpg"
                    link="/tic-tac-toe"
                />
                <GameCard
                    title="example"
                    imageUrl="/images/cover.jpg"
                    link="/example"
                />
                <GameCard
                    title="Puzzle"
                    imageUrl="/images/cover.jpg"
                    link="/puzzle"
                />
            </div>
        </div>
    );
};

export default Dashboard;
