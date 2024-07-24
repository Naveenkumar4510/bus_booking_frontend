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
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { edit_bus_detail, fetch_bus_detail } from '../../../redux/action/bus';
import { toast } from 'react-toastify';

const EditBus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const {busNumber}=useParams();

  const bus_details = useSelector((state) => state.bus_details);
  const bus_edit_details = useSelector((state) => state.bus_fetch_state);

  const [busData, setBusData] = useState({
    busName: '',
    busNumber: '',
    source: '',
    destination: '',
    departureTime: '',
    arrivalTime: ''
  });

  useEffect(() => {
    if (busNumber) {
      dispatch(fetch_bus_detail(busNumber)); // Fetch bus details based on busNumber
    }
  }, [busNumber, dispatch] );

  useEffect(()=>{
    setBusData(
      {
        busName:bus_edit_details.busName,
        busNumber:bus_edit_details.busNumber
      }
    )
  })
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSave = () => {
  //   // dispatch(edit_bus_detail(id, busData))
  //     .then(() => {
  //       toast.success('Bus updated successfully');
  //       navigate('/');
  //     })
  //     .catch(() => {
  //       toast.error('Failed to update the bus');
  //     });
  // };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error loading bus details</p>;
  // }

  return (
    <div className="mx-auto container">
      <h2>Edit Bus</h2>
      <div className="bg-white shadow-md rounded-lg flex flex-col gap-3 justify-center p-4">
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
        <button >Save</button>
      </div>
    </div>
  );
};

export default EditBus;
