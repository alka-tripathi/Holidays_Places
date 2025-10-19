import { useState } from 'react';

function Card({ t }) {
  const [readmore, setreadmore] = useState(false);

  const description = `${t.info.substring(0, 200)}....`;

  return (
    <div className="card">
      <img
        src={t.image}
        className="image"
      ></img>
      <div className="tourDetails">
        <h2 className="tour-name">{t.name}</h2>
        <h4 className="tour-price">{t.price}</h4>
      </div>

      <div className="description">
        {description}
        <span
          className="read-more"
          onClick={readmoreHandler}
        >
          {readmore ? 'showless' : 'read More'}
        </span>
      </div>
    </div>
  );
}
export default Card;
