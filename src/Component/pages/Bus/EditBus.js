// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { edit_bus_detail } from '../../../redux/actions/busActions';

// const EditBus = ({ bus }) => {
//   const dispatch = useDispatch();
//   const [busData, setBusData] = useState({
//     busName: bus.busName,
//     busNumber: bus.busNumber,
//     source: bus.source,
//     destination: bus.destination,
//     arrivalTime: bus.arrivalTime,
//     departureTime: bus.departureTime,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBusData({ ...busData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(edit_bus_detail(bus.id, busData));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input name="busName" value={busData.busName} onChange={handleChange} />
//         <input name="busNumber" value={busData.busNumber} onChange={handleChange} />
//         <input name="source" value={busData.source} onChange={handleChange} />
//         <input name="destination" value={busData.destination} onChange={handleChange} />
//         <input name="arrivalTime" value={busData.arrivalTime} onChange={handleChange} />
//         <input name="departureTime" value={busData.departureTime} onChange={handleChange} />
//         <button type="submit">Edit Bus</button>
//       </form>
//     </div>
//   );
// };

// export default EditBus;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { edit_bus_detail } from '../../../redux/action/bus';

const EditBus = () => {
  const dispatch = useDispatch();

  // Select the bus details from the Redux store
  const bus_details = useSelector((state) => state.bus_details);
  const { loading, error, bus_edit_details } = useSelector((state) => state.bus_edit_state);

  const handleEdit = (busId, newDetails) => {
    dispatch(edit_bus_detail(busId, newDetails));
  };

//   const handleDelete = (busId) => {
//     dispatch(delete_bus_detail(busId));
//   };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading bus details</p>;
  }

  return (
    <div className="flex flex-col">
      {bus_details && bus_details.length > 0 ? (
        bus_details.map((bus) => (
          <div key={bus.id} className="p-4 border rounded shadow-md mb-4">
            <ul>
              <li>{bus.busName}</li>
              <li>{bus.busNumber}</li>
              <li>{bus.source}</li>
              <li>{bus.destination}</li>
              <li>{bus.arrivalTime}</li>
              <li>{bus.departureTime}</li>
            </ul>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => handleEdit(bus.id, { /* new details here */ })}
            >
              Edit
            </button>
            {/* <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(bus.id)}
            >
              Delete
            </button> */}
          </div>
        ))
      ) : (
        <p>No buses available</p>
      )}
    </div>
  );
};

export default EditBus;
