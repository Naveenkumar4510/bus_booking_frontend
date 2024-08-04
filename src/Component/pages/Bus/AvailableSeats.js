// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams, useSearchParams } from 'react-router-dom'
// import { get_available_seats,bus_detailAction } from '../../../redux/action/bus';


// const AvailableSeats = () => {

//   const dispatch=useDispatch();
//   const available_seats=useSelector(state=>state.available_seats);
//   const  bus_details  = useSelector((state) => state.bus_details);
//   const {busNumber}=useParams();

//   useEffect(()=>{
//     console.log("bus number in available seats",busNumber)
//     if(busNumber){
//       dispatch(get_available_seats(busNumber));
//     }
   
//   },[busNumber, dispatch])

//   useEffect(() => {
//     console.log("hio")
//     // bus_details.array.forEach(bus => {
//     //   console.log(`{bus.busNumber}`)
      
//     //  });
//     if (bus_details && bus_details.seats) {
//       console.log("Number of seats:", bus_details.seats.length);
//     }
//   }, [bus_details]);

//   console.log(typeof(bus_details));


//   useEffect(() => {
//     console.log("Available seats in bus data:", bus_details);

//     if (bus_details && Array.isArray(bus_details.bus_details)) {
//       bus_details.bus_details.forEach(bus => {
//         if (Array.isArray(bus.seats)) {
//           console.log(`Bus Name: ${bus.busName}, Bus Number: ${bus.busNumber}, Total Seats: ${bus.seats.length}`);
//         } else {
//           console.log(`Bus Name: ${bus.busName}, Bus Number: ${bus.busNumber}, No seat data available`);
//         }
//       });
//     } else {
//       console.log('No bus details or data is not in expected format');
//     }
//   }, [bus_details]);

//   const totalSeatsLength = bus_details && Array.isArray(bus_details.bus_details)
//     ? bus_details.bus_details.reduce((acc, bus) => acc + (Array.isArray(bus.seats) ? bus.seats.length : 0), 0)
//     : 0;


//     console.log(totalSeatsLength);

//   useEffect(() => {
//     console.log("Available seats data:", available_seats);
//     if (available_seats && typeof available_seats === 'object') {
//       // Assuming available_seats might be an object with keys that contain arrays of seats
//       Object.keys(available_seats).forEach(key => {
//         console.log(`Key: ${key}, Seats: ${available_seats[key]}`);
//         console.log(` available Seats length: ${available_seats[key].length}`);

//       });
//     } else {
//       console.log('No available seats or data is not in expected format');
//     }
//   }, [available_seats]);


//   useEffect(() => {
//     if (bus_details && Array.isArray(bus_details)) {
//       bus_details.forEach(seat => {
//         console.log(`Seat ID: ${seat}`);
//         console.log(`Seat length: ${seat.length}`);

//       });
//     } else {
//       console.log('No available seats or data is not in expected format');
//     }
//   }, [bus_details]);

//   return (
//     <div>AvailableSeats
    
//     </div>
//   )
// }

// export default AvailableSeats


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { get_available_seats, bus_detailAction } from '../../../redux/action/bus';

// const AvailableSeats = () => {
//   const dispatch = useDispatch();
//   const { busNumber } = useParams();
  
//   // Get data from Redux store
//   const available_seats = useSelector(state => state.available_seats);
//   const bus_details = useSelector(state => state.bus_details);
  
//   // Local state to hold bus data
//   const [busData, setBusData] = useState(null);
// console.log(busNumber);
//   useEffect(() => {
//     if (busNumber) {
//       console.log("bus number in available seats",busNumber)
//       dispatch(get_available_seats(busNumber));
//       dispatch(bus_detailAction());
//     }
//   }, [busNumber, dispatch]);

//   useEffect(() => {
//     console.log("Bus details from store:", bus_details);
    
//     if (bus_details && bus_details.bus_details) {
//       const bus = bus_details.bus_details.find(bus => bus.id === busNumber);
//       if (bus) {
//         setBusData(bus);
//       } else {
//         console.log("Bus not found with the given busNumber:", busNumber);
//         setBusData(null);
//       }
//     } else {
//       console.log("No bus_details array found in bus_details");
//       setBusData(null);
//     }
//   }, [bus_details, busNumber]);

//   console.log(busData);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Available Seats Information</h1>
//       {busData ? (
//         <div>
//           <h2 className="text-lg font-semibold">Bus Name: {busData.busName}</h2>
//           <h3 className="text-md font-medium">Bus Number: {busData.busNumber}</h3>
//           <div className="flex flex-wrap gap-2 mt-4">
//             {busData.seats && Array.isArray(busData.seats) ? (
//               busData.seats.map(seat => (
//                 <div
//                   key={seat.id}
//                   className={`w-8 h-8 flex items-center justify-center text-white font-semibold rounded ${
//                     busData.bookings.includes(seat.id) ? 'bg-red-600' : 'bg-green-600'
//                   }`}
//                 >
//                   {seat.id}
//                 </div>
//               ))
//             ) : (
//               <p>No seats data available</p>
//             )}
//           </div>
//           <p className="mt-2">Total Seats: {busData.seats ? busData.seats.length : 0}</p>
//           <p>Booked Seats: {busData.bookings ? busData.bookings.length : 0}</p>
//           <p>Available Seats: {busData.seats ? busData.seats.length - busData.bookings.length : 0}</p>
//         </div>
//       ) : (
//         <p>No bus details or data is not in expected format</p>
//       )}
//     </div>
//   );
// }

// export default AvailableSeats;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_available_seats, fetch_bus_detail,fetch_bus_detail_byid } from '../../../redux/action/bus';

const AvailableSeats = () => {
  const dispatch = useDispatch();
  const { busNumber } = useParams();
  
  // Get data from Redux store
  const availableSeatsData = useSelector(state => state.available_seats);
  const bus_details = useSelector(state => state.bus_fetch_byid_state);
  
  // Local state to hold bus data
  const [busData, setBusData] = useState(null);

  // Log busNumber to ensure it's being received
  console.log('Bus Number from URL:', busNumber);

  useEffect(() => {
    if (busNumber) {
      console.log("Dispatching actions with busNumber:", busNumber);
      dispatch(get_available_seats(busNumber));
      dispatch(fetch_bus_detail_byid(busNumber)); // Fetch bus details for the given busNumber
    }
  }, [busNumber, dispatch]);

  useEffect(() => {
    console.log("Available seats data:", (availableSeatsData));
    console.log("Available seats kjm data:", (availableSeatsData.available_seats));
  }, [availableSeatsData]);
  
  const availableSeats = Array.isArray(availableSeatsData.available_seats) 
  ? availableSeatsData.available_seats 
  : [];

console.log("Available Seats Datadf:", availableSeats);

  
  useEffect(() => {
    console.log("Bus details from store:", bus_details.bus_fetch_details);
    //  console.log("Bus details from id store:", bus_details.bus_fetch_details.busName);


    if (bus_details.bus_fetch_details && bus_details.bus_fetch_details.id === busNumber) {
      setBusData(bus_details.bus_fetch_details);
    } else {
      console.log("No bus details found or busNumber mismatch");
      setBusData(null);
    }
  }, [bus_details, busNumber]);

  console.log("Bus Data State:", busData);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Available Seats Information</h1>
      {busData ? (
        <div>
          <h2 className="text-lg font-semibold">Bus Name: {busData.busName}</h2>
          <h3 className="text-md font-medium">Bus Number: {busData.busNumber}</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {busData.seats && Array.isArray(busData.seats) ? (
              busData.seats.map(seat => (
                <div
                  key={seat.seatNumber}
                  className={`w-8 h-8 flex items-center justify-center text-white font-semibold rounded ${
                    (availableSeats.includes(seat.seatNumber)) ? 'bg-green-600' : 'bg-red-600'
                  }`}
                >
                  {seat.seatNumber}
                </div>
              ))
            ) : (
              <p>No seats data available</p>
            )}
          </div>
          <p className="mt-2">Total Seats: {busData.seats ? busData.seats.length : 0}</p>
          <p>Booked Seats: {busData.bookings ? busData.bookings.length : 0}</p>
          <p>Available Seats: {availableSeats ? busData.seats.length - availableSeats.length : 0}</p>
        </div>
      ) : (
        <p>No bus details or data is not in expected format</p>
      )}
    </div>
  );
}

export default AvailableSeats;
