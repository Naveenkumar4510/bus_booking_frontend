import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { bus_detailAction } from "../../redux/action/bus.js";
import { eventWrapper } from "@testing-library/user-event/dist/utils/index.js";
import bus from '../../assets/images/bus.jpg'
const Home = () => {
  const dispatch = useDispatch();
  const { bus_details } = useSelector((state) => state.bus_details);
  const [fromDestination, setFromDes] = useState("");
  const [toDestination, setToDestiation] = useState("");
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
//filter for search button
  const handlSearchfilter = () => {
    const filtered_data = bus_details.filter((bus) => {
      return (
        bus.source.toLowerCase().includes(fromDestination.toLowerCase()) &&
        bus.destination.toLowerCase().includes(toDestination.toLowerCase())
      );
    });
  
    setfilterBus(filtered_data);
    console.log(filtered_data);
    setSearchPerformed(true);
  };

  // console.log(filtered_data);

  return (
    <div>
      {/* <Navbar /> */}
      <div>
       
        
        <div className="bg-white">
         <div className="px-20 mx-20">
         <img  className="object-fit" src={bus}/> 
        
          <div className="flex space-x-4 mt-5 p-5 bg-gray-300">
            
            <div>
              
              From<input type="text"  value={fromDestination}
                onChange={handlefromchange}
                className="p-2 ml-2"></input>
            </div>
            <div>
              To
              <input
                type="text"
                className="p-2 ml-2"
                value={toDestination}
                onChange={handleTochange}
              ></input>
            </div>
            <div>
              {/* Date<input type="date" className="p-2 ml-2"></input> */}
            </div>
            <button className="bg-orange-400 rounded-lg text-white p-2" onClick={handlSearchfilter}>Search</button>
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
      </div>
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
