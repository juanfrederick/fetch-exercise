const People = ({ name, gender, birth, mass, height, eye }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Gender:</h3>
      <p>{gender}</p>
      <h3>Birth year:</h3>
      <p>{birth}</p>
      <h3>Mass:</h3>
      <p>{mass}</p>
      <h3>Height:</h3>
      <p>{height}</p>
      <h3>Eye color:</h3>
      <p>{eye}</p>
    </div>
  );
};

export default People;
