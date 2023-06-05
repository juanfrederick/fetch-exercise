import { useEffect, useState } from "react";
import People from "./components/People";
import Planet from "./components/Planet";
import Starship from "./components/Starship";

const App = () => {
  const [option, setOption] = useState("people");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.py4e.com/api/${option}`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .finally(() => setLoading(false));
  }, [option]);

  return (
    <div>
      <select
        name="option"
        id=""
        onChange={(e) => {
          setOption(e.target.value);
        }}
      >
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.map((val, index) => {
          if (option === "people") {
            return (
              <People
                key={index}
                name={val.name}
                gender={val.gender}
                birth={val.birth_year}
                mass={val.mass}
                height={val.height}
                eye={val.eye_color}
              />
            );
          } else if (option === "planets") {
            return (
              <Planet
                key={index}
                name={val.name}
                rotation={val.rotation_period}
                orbital={val.orbital_period}
                terrain={val.terrain}
                population={val.population}
                climate={val.climate}
              />
            );
          } else {
            return (
              <Starship
                key={index}
                name={val.name}
                model={val.model}
                manufacturer={val.manufacturer}
                crew={val.crew}
                passengers={val.passengers}
                cargo={val.cargo_capacity}
                starship={val.starship_class}
              />
            );
          }
        })
      )}
    </div>
  );
};

export default App;
