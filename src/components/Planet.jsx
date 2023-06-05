const Planet = ({ name, rotation, orbital, terrain, population, climate }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Rotation Period:</h3>
      <p>{rotation}</p>
      <h3>Orbital Period:</h3>
      <p>{orbital}</p>
      <h3>Terrain:</h3>
      <p>{terrain}</p>
      <h3>Population:</h3>
      <p>{population}</p>
      <h3>Climate:</h3>
      <p>{climate}</p>
    </div>
  );
};

export default Planet;
