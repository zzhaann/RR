import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ title, imageUrl, link }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-img" />
            <h3>{title}</h3>
            <Link to={link} className="btn btn-primary">Играть</Link>
        </div>
    );
};

export default GameCard;
