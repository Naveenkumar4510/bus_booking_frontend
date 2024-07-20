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
import { edit_bus_detail,fetch_bus_detail,delete_bus_by_number } from '../../../redux/action/bus';

import { toast } from 'react-toastify';

const EditBus = () => {
  const dispatch = useDispatch();

  // Select the bus details from the Redux store
  const bus_details = useSelector((state) => state.bus_details);
  const fetch_bus=useSelector((state)=>state.bus_fetch_state);
  const delete_bus=useSelector((state)=>state.bus_delete_state);


  // const { bus_details, loading, error } = useSelector((state) => state.bus_fetch_state);
  const [busData, setBusData] = useState({
    busName: '',
    busNumber: '',
    source: '',
    destination: '',
    departureTime: '',
    arrivalTime: ''
  });

  useEffect(() => {
    dispatch(fetch_bus_detail(id)).then((data) => setBusData(data));
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(edit_bus_detail(id, busData))
      .then(() => {
        toast.success('Bus updated successfully');
        history.push('/');
      })
      .catch(() => {
        toast.error('Failed to update the bus');
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading bus details</p>;
  }

  return (
    <div className="mx-auto container">

<h2>Edit Bus</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <input
          type="text"
          name="busName"
          value={busData.busName || ''}
          onChange={handleChange}
          placeholder="Bus Name"
        />
        <input
          type="text"
          name="busNumber"
          value={busData.busNumber || ''}
          onChange={handleChange}
          placeholder="Bus Number"
        />
        <input
          type="text"
          name="source"
          value={busData.source || ''}
          onChange={handleChange}
          placeholder="Source"
        />
        <input
          type="text"
          name="destination"
          value={busData.destination || ''}
          onChange={handleChange}
          placeholder="Destination"
        />
        <input
          type="datetime-local"
          name="departureTime"
          value={busData.departureTime || ''}
          onChange={handleChange}
          placeholder="Departure Time"
        />
        <input
          type="datetime-local"
          name="arrivalTime"
          value={busData.arrivalTime || ''}
          onChange={handleChange}
          placeholder="Arrival Time"
        />
        <button onClick={handleSave}>Save</button>
      </div>
     
     
    </div>
  );
};

export default EditBus;
