import React, { useEffect } from "react";
import { bus_detailAction } from "../../../redux/action/bus";
import { useDispatch, useSelector } from "react-redux";
const ViewBus = () => {
  const dispatch = useDispatch();

  const { bus_details } = useSelector((state) => state.bus_details);

  useEffect(() => {
    dispatch(bus_detailAction());
  }, []);

//   return (
//     <div>

//       {View_bus.map((bus) => (
//         <div key={bus.id}>
//           <ul>
//             <li>{bus.busName}</li>
//             <li>{bus.busNumber}</li>
//             <li>{bus.source}</li>
//             <li>{bus.destination}</li>
//             <li>{bus.arrivalTime}</li>
//             <li>{bus.departureTime}</li>
//           </ul>
//         </div>
//       ))}

      
//     </div>
//   );

return (
    <div className="flex flex-wrap gap-4">
      {Array.isArray(bus_details) && bus_details.length > 0 ? (
        bus_details.map((bus) => (
          <div key={bus.id} className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-4">
            <ul>
              <li>{bus.busName}</li>
              <li>{bus.busNumber}</li>
              <li>{bus.source}</li>
              <li>{bus.destination}</li>
              <li>{bus.arrivalTime}</li>
              <li>{bus.departureTime}</li>
            </ul>
          </div>
        ))
      ) : (
        <p>No buses available</p>
      )}
    </div>
  );
};

export default ViewBus;
