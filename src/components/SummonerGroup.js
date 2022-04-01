import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { shallowEqual, useSelector} from 'react-redux'

const SummonerGroup = () => {

  const summonersFull = useSelector (state => state.summoners.data  )
  console.log(summonersFull)

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>ID</th>
            <th>Class</th>
            <th>Level</th>
            <th>XP</th>
            <th>Daycare</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" id="cbox1" value="first_checkbox"/></td>
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td><input type="checkbox" id="cbox1" value="first_checkbox"/></td>
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td><input type="checkbox" id="cbox1" value="first_checkbox"/></td>
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummonerGroup;

 