import { useState } from 'react';
import './Card.css';

function Card({ id, name, info, image, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  // Dynamic description
  const isLongText = info.length > 200;
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="image"
      />
      <div className="tour-info">
        <div className="tourDetails">
          <h2 className="tour-name">{name}</h2>
          <h4 className="tour-price">{price}</h4>
        </div>

        <div className="description">
          {description}
          <span
            className="read-more"
            onClick={readmoreHandler}
            style={{ cursor: 'pointer', color: '#ff5a5f' }}
          >
            {readmore ? ' Show Less' : ' Read More'}
          </span>
        </div>

        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default Card;
