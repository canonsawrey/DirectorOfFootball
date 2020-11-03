import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ClubRow = (props) => {
    const club  = props.club;

    return(
        <div className="row-container">
          <Link to={`/show-club/${club._id}`}>
              <div>
                  <h2>
                    { club.name }
                  </h2>
                  <h4>
                    { club.city + ', ' + club.country }
                  </h4>
                </div>
            </Link>
        </div>
    )
};

export default ClubRow;
