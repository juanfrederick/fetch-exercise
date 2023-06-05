const Starship = ({
  name,
  model,
  manufacturer,
  crew,
  passengers,
  cargo,
  starship,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Model:</h3>
      <p>{model}</p>
      <h3>manufacturer:</h3>
      <p>{manufacturer}</p>
      <h3>crew:</h3>
      <p>{crew}</p>
      <h3>Passangers:</h3>
      <p>{passengers}</p>
      <h3>Cargo Capacity:</h3>
      <p>{cargo}</p>
      <h3>Starship Class:</h3>
      <p>{starship}</p>
    </div>
  );
};

export default Starship;
