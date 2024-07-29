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


// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { edit_bus_detail, fetch_bus_detail } from '../../../redux/action/bus';
// import { toast } from 'react-toastify';

// const EditBus = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
// const {busNumber}=useParams();

//   const bus_details = useSelector((state) => state.bus_details);
//   const bus_edit_details = useSelector((state) => state.bus_fetch_state);

//   const [busData, setBusData] = useState({
//     busName: '',
//     busNumber: '',
//     source: '',
//     destination: '',
//     departureTime: '',
//     arrivalTime: ''
//   });

//   console.log(bus_edit_details)

//   useEffect(() => {
//     if (busNumber) {
//       dispatch(fetch_bus_detail(busNumber)); // Fetch bus details based on busNumber
//     }
//   }, [busNumber, dispatch] );

//   useEffect(()=>{
//     setBusData({
//       ...busData,
//       busNumber:bus_edit_details.bus_fetch_details.busNumber,
//       busName:bus_edit_details.bus_fetch_details.busName,
//       source:bus_edit_details.bus_fetch_details.source,
//       destination:bus_edit_details.bus_fetch_details.destination,
//       departureTime:bus_edit_details.bus_fetch_details.departureTime,
//       arrivalTime:bus_edit_details.bus_fetch_details.arrivalTime

//    } )
//   },[bus_edit_details])
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBusData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     console.log("updatd busnumber"+busNumber);
//     console.log("updatebusdata"+busData);
//     dispatch(edit_bus_detail(busNumber, busData))

//       .then(() => {
//         toast.success('Bus updated successfully');
//         navigate('/');
//       })
//       .catch(() => {
//         toast.error('Failed to update the bus');
//       });
//   };

//   // const handleSave = () => {
//   //   // dispatch(edit_bus_detail(id, busData))
//   //     .then(() => {
//   //       toast.success('Bus updated successfully');
//   //       navigate('/');
//   //     })
//   //     .catch(() => {
//   //       toast.error('Failed to update the bus');
//   //     });
//   // };

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   // if (error) {
//   //   return <p>Error loading bus details</p>;
//   // }

//   return (
//     <div className="mx-auto container">
//       <h2>Edit Bus</h2>
//       <div className="bg-white shadow-md rounded-lg flex flex-col gap-3 justify-center p-4">
//         <input
//           type="text"
//           name="busName"
//           value={busData.busName || ''}
//           onChange={handleChange}
//           placeholder="Bus Name"
         
//         />
        
//         <input
//           type="text"
//           name="busNumber"
//           value={busData.busNumber || ''}
//           onChange={handleChange}
//           placeholder="Bus Number"
//         />
//         <input
//           type="text"
//           name="source"
//           value={busData.source || ''}
//           onChange={handleChange}
//           placeholder="Source"
//         />
//         <input
//           type="text"
//           name="destination"
//           value={busData.destination || ''}
//           onChange={handleChange}
//           placeholder="Destination"
//         />
//         <input
//           type="datetime-local"
//           name="departureTime"
//           value={busData.departureTime || ''}
//           onChange={handleChange}
//           placeholder="Departure Time"
//         />
//         <input
//           type="datetime-local"
//           name="arrivalTime"
//           value={busData.arrivalTime || ''}
//           onChange={handleChange}
//           placeholder="Arrival Time"
//         />
//         <button onClick={handleSave}>Save</button>
//       </div>
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
  const { busNumber } = useParams();

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
      dispatch(fetch_bus_detail(busNumber));
    }
  }, [busNumber, dispatch]);

  useEffect(() => {
    if (bus_edit_details && bus_edit_details.bus_fetch_details) {
      setBusData({
        busName: bus_edit_details.bus_fetch_details.busName || '',
        busNumber: bus_edit_details.bus_fetch_details.busNumber || '',
        source: bus_edit_details.bus_fetch_details.source || '',
        destination: bus_edit_details.bus_fetch_details.destination || '',
        departureTime: bus_edit_details.bus_fetch_details.departureTime || '',
        arrivalTime: bus_edit_details.bus_fetch_details.arrivalTime || ''
      });
    }
  }, [bus_edit_details]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated bus number:", busData.busNumber);
    console.log("Updated bus data:", busData);
    dispatch(edit_bus_detail(busData.busNumber, busData))
      .then(() => {
        toast.success('Bus updated successfully');
        navigate('/');
      })
      .catch(() => {
        toast.error('Failed to update the bus');
      });
  };

  return (
    <div className="mx-auto container">
      <h2>Edit Bus</h2>
      <div className="bg-white shadow-md rounded-lg flex flex-col gap-3 justify-center p-4">
        <input
          type="text"
          name="busName"
          value={busData.busName}
          onChange={handleChange}
          placeholder="Bus Name"
        />
        <input
          type="text"
          name="busNumber"
          value={busData.busNumber}
          onChange={handleChange}
          placeholder="Bus Number"
          disabled // Assuming busNumber shouldn't be editable
        />
        <input
          type="text"
          name="source"
          value={busData.source}
          onChange={handleChange}
          placeholder="Source"
        />
        <input
          type="text"
          name="destination"
          value={busData.destination}
          onChange={handleChange}
          placeholder="Destination"
        />
        <input
          type="datetime-local"
          name="departureTime"
          value={busData.departureTime}
          onChange={handleChange}
          placeholder="Departure Time"
        />
        <input
          type="datetime-local"
          name="arrivalTime"
          value={busData.arrivalTime}
          onChange={handleChange}
          placeholder="Arrival Time"
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditBus;

