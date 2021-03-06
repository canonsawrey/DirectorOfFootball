import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LeagueRow = (props) => {
    const league  = props.league;

    return(
        <div className="row-container">
          <Link to={`/show-league/${league._id}`}>
              <div>
                  <h2>
                    { league.name }
                  </h2>
                  <h4>
                    { league.description ? league.description : '-'}
                  </h4>
                </div>
            </Link>
        </div>
    )
};

export default LeagueRow;
