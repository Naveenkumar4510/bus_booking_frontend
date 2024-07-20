import React, { useEffect } from "react";
import { bus_detailAction ,fetch_bus_detail,delete_bus_by_number,edit_bus_detail} from "../../../redux/action/bus";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const ViewBus = () => {
  const dispatch = useDispatch();

  const { bus_details } = useSelector((state) => state.bus_details);
  const {fetch_bus}=useSelector((state)=>state.bus_fetch_state);
  const {delete_bus}=useSelector((state)=>state.bus_delete_state);

  useEffect(() => {
    dispatch(bus_detailAction());
  }, []);
  const handleEdit = (bus) => {
    // Dispatch the edit action here
    dispatch(edit_bus_detail(bus));
  };

  const handleDelete = (busNumber) => {
    // Dispatch the delete action here
    console.log("busNumber"+busNumber)
    
    dispatch(delete_bus_by_number(busNumber))
    .then(()=>{
toast.success("Bus deleted successfully");
dispatch(bus_detailAction());
    }).catch((error)=>{
      toast.error("Unable to delete bus");
      
    })
  };
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
               <li>{bus.id}</li> 
              <li>{bus.busNumber}</li>
              <li>{bus.source}</li>
              <li>{bus.destination}</li>
              <li>{bus.arrivalTime}</li>
              <li>{bus.departureTime}</li>
              <div className="flex justify-end mt-4">
              <button
                onClick={() => handleEdit(bus.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(bus.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
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
