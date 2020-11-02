import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PlayerCard = (props) => {
    const  player  = props.player;

    return(
        <div className="card-container">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhRobJwm_transparent-football-players-png-cartoon-soccer-game-png%2F&psig=AOvVaw0sDpv4qL50p9kpBOfz6Gy7&ust=1604420019910000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID34b2g5OwCFQAAAAAdAAAAABAI" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-player/${player._id}`}>
                        { player.firstName }
                    </Link>
                </h2>
                <h3>{player.lastName}</h3>
                <p>{player.pace}</p>
            </div>
        </div>
    )
};

export default PlayerCard;
