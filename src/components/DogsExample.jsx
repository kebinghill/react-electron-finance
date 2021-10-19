import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchBreedsQuery } from '../features/dogs/dogsApiSlice';
import { /*incremented*/ amountAdded } from '../features/example.js';

const DogsExample = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleClick = () => {
    //increment by 1
    // dispatch(incremented());

    //increment by fixed amount
    dispatch(amountAdded(7));
  };

  return (
    <div>
      <button onClick={handleClick}>count is: {count}</button>

      <div>
        <p>Dogs to fetch:</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        Number of dogs fetched: {data.length}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => {
              return (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DogsExample;
