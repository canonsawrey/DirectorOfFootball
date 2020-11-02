import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LeagueRow = (props) => {
    const  league  = props.league;

    return(
        <div className="row-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-league/${league._id}`}>
                        { league.name }
                    </Link>
                </h2>
            </div>
        </div>
    )
};

export default LeagueRow;
