import Card from '../components/Card';
function Tours({ tours }) {
  return (
    <div>
      <h1>Plan with LOVE</h1>
      <div>
        {tours.map((t) => {
          return <Card {...t}></Card>; //object is copy passed  //clooning the object
        })}
      </div>
    </div>
  );
}

export default Tours;
