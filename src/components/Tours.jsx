import Card from '../components/Card';
// import './Tours.css';

function Tours({ tours, removeTour }) {
  return (
    <div>
      <h1 className="plan">Plan with LOVE 💌</h1>
      <div className="tours-container">
        {tours.map((t) => {
          return (
            <Card
              key={t.id}
              {...t}
              removeTour={removeTour}
            ></Card>
          ); //object is copy passed  //clooning the object
        })}
      </div>
    </div>
  );
}

export default Tours;
