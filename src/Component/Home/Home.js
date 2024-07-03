import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { bus_detailAction } from "../../redux/action/bus.js";
import { eventWrapper } from "@testing-library/user-event/dist/utils/index.js";
<<<<<<< HEAD
import bus from '../../assets/images/bus.jpg'
=======
import bus_img from '../../assets/home/Man buying bus ticket via terminal.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

>>>>>>> 225ae41fdb222a54a210e69b1d5a83993e6ab37c
const Home = () => {
  const dispatch = useDispatch();
  const { bus_details } = useSelector((state) => state.bus_details);
  const [fromDestination, setFromDes] = useState("");
  const [toDestination, setToDestiation] = useState("");
  const [date, setDate] = useState(null);
  const [filteredBus, setfilterBus] = useState([]);
  const [searchPerform,setSearchPerformed]=useState(false);

  useEffect(() => {
    dispatch(bus_detailAction());
  }, [dispatch]);

  const handlefromchange = (event) => {
    setFromDes(event.target.value);
  };

  const handleTochange = (event) => {
    setToDestiation(event.target.value);
  };

  const handleDatechange = (event) => {
    setDate(event.target.value);
  };
//filter for search button
  const handlSearchfilter = () => {
    const filtered_data = bus_details.filter((bus) => {
      // console.log(bus.departureTime);
      // console.log(bus.source);
      const busDate = Date.parse(bus.departureTime) ? new Date(bus.departureTime) : null;

      if (!busDate) {
        console.error(`Invalid date format for bus departure time: ${bus.departureTime}`);
        return false; // Skip this bus if the date format is invalid
      }

       // Log values for debugging
    console.log('Bus Source:', bus.source);
    console.log('Bus Destination:', bus.destination);
    console.log('From Destination:', fromDestination);
    console.log('To Destination:', toDestination);
    console.log('Selected Date:', date);
      
      // const busDate = new Date(bus.departureTime).toISOString().split('T')[0];
      // const busDate = new Date(bus.departureTime);

      
      // const selectedDateISOString = date ? new Date(date).toISOString().split('T')[0] : null;
      const formattedBusDate = busDate.toISOString().split('T')[0];

      const formattedSelectedDate = date ? new Date(date).toISOString().split('T')[0] : null;
      // const busDate = new Date(bus.departureTime); // Assuming bus.departureTime is in a compatible format
      // console.log('Bus Departure Time:', busDate);

      // Convert selected date (if available) to ISO string for comparison
      // const selectedDateISOString = date ? new Date(date).toISOString().split('T')[0] : null;
  
      // console.log(filtered_data);

    
      return (
        bus.source.toLowerCase().includes(fromDestination.toLowerCase()) &&
        bus.destination.toLowerCase().includes(toDestination.toLowerCase()) && 
        // (!date || busDate.toISOString().split('T')[0] === selectedDateISOString)
        (!date || formattedBusDate === formattedSelectedDate)
      );
      console.log("filtered data",filtered_data);
    });
  
    setfilterBus(filtered_data);
    console.log(filtered_data);
    setSearchPerformed(true);
  };

 

  return (
    <div>
      {/* <Navbar /> */}
<<<<<<< HEAD
      <div>
       
        
        <div className="bg-white">
         <div className="px-20 mx-20">
         <img  className="object-fit" src={bus}/> 
        
          <div className="flex space-x-4 mt-5 p-5 bg-gray-300">
            
=======
      
        <div className="relative bg-white">
        <img src={bus_img} alt="bus_image" className="absolute inset-0 w-full  h-full object-cover border-b"></img>
        <div className="relative z-10 p-5 "> 
          <div className="flex space-x-4 relative w-full bg-white bg-opacity-90  shadow-lg   mt-5 p-5">
>>>>>>> 225ae41fdb222a54a210e69b1d5a83993e6ab37c
            <div>
              
              From<input type="text"  value={fromDestination}
                onChange={handlefromchange}
                className=" ml-2 px-5 py-3"></input>
            </div>
            <div>
              To
              <input
                type="text"
                className=" ml-2 px-5 py-3"
                value={toDestination}
                onChange={handleTochange}
              ></input>
            </div>

            <div>
              Date
              {/* <input
                type="Date"
                className=" ml-2 px-5 py-3"
                value={date}
                onChange={handleDatechange}
              ></input> */}

              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="ml-2 px-5 py-3"
                placeholderText="Select a date"
                dateFormat="yyyy-MM-dd"
              />
            </div>
           
            <a className="bg-orange-400 rounded-lg inline-fflex items-center justify-center text-center uppercase text-white shadow-2xl px-5 h-15 w-40 py-3  no-underline" onClick={handlSearchfilter}><span>Search</span></a>
          </div>
          

          <div className="p-5">
          {filteredBus.length > 0 ? (
            filteredBus.map((bus, index) => (
              <div key={index} className="bg-gray-100 p-4 mb-2">
                <p>Source: {bus.source}</p>
                <p>Destination: {bus.destination}</p>
                <p>Bus Number: {bus.busNumber}</p>
                {/* Add other bus details as needed */}
              </div>
            ))
          ) : (
            
           searchPerform && <p>No buses found</p>
          )}
        </div>
        </div>
      </div>
<<<<<<< HEAD
      </div>
=======
     
>>>>>>> 225ae41fdb222a54a210e69b1d5a83993e6ab37c
      {/* <Footer/> */}
    </div>
  );
};

// const Home = () => {
//   const dispatch = useDispatch();
//   const [fromDestination, setFromDestination] = useState("");
//   const [toDestination, setTODestination] = useState("");
//   const [filteredbus,setfilteredBus]=useState([]);

//   const handleFromchange =(event)=>{
//     setFromDestination(event.target.value);
//   }

//   const handleTochange =(event)=>{
//     setTODestination(event.target.value);
//   }


//   const handlesearch =()=>{
//       const filtered_data=bus_details.filter((bus)=>{
//         return(
// bus.source.toLowerCase().includes(fromDestination.toLowerCase()) && bus.destination.toLowerCase().includes(toDestination.toLowerCase())
//         );
//       })
//       setfilteredBus(filtered_data);
//   }
//   const { bus_details } = useSelector((state) => state.bus_details);

//   useEffect (() => {
//       dispatch(bus_detailAction());
//     },
//     [dispatch]);

//   return (
    
// <div>
//       <div>
//         From
//         <input
//           type="text"
//           value={fromDestination}
//           onChange={handleFromchange}
//         />
//         To
//         <input
//           type="text"
//           value={toDestination}
//           onChange={handleTochange}
//         />
//         <button onClick={handlesearch}>Search</button>
//       </div>
//       <div>
//         <div className="flex">
//           {filteredbus.length > 0 ? (
//             filteredbus.map((bus_data, index) => (
//               <div key={index}>
//                 <p>{bus_data.busNumber}</p>
//                 <p>{bus_data.busName}</p>
//                 <p>{bus_data.source}</p>
//                 <p>{bus_data.destination}</p>
//               </div>
//             ))
//           ) : (
//             fromDestination !== "" && toDestination !== "" && "No bus found"
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
