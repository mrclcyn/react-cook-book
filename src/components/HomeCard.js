import './homeCard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeCard = ({country, fields}) => {

    return(
        <div className="homeItem">
          <Link to="/dishes" state={country}>
            <div className="countryName">
              {country}
            </div>
            <div>
              <img className="countryPic" src={fields.imageSrc} alt={country} />
            </div>
            </Link>
          </div>
    )
}

export default HomeCard;