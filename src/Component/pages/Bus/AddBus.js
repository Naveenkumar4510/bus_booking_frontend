import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add_bus_details } from '../../../redux/action/bus';


const AddBus = () => {

  const dispatch=useDispatch();

const bus_add_details=useSelector(state=>state.bus_add_state);

const [busName,setBusName]=useState('');

const [busNumber,setBusNumber]=useState('');

const [source,setSource]=useState('');

const [destination,setDestination]=useState('');

const [departureTime, setDepartureTime] = useState('');


const [arrivalTime, setArrivalTime] = useState('');



const handleSubmit=((e)=>{

e.preventDefault();
const newBus = {
  busName,
  busNumber,
  source,
  destination,
  departureTime,
  arrivalTime,
  seats: [],
};
dispatch(add_bus_details(newBus));
// Clear the form
setBusName('');
setBusNumber('');
setSource('');
setDestination('');
setDepartureTime('');
setArrivalTime('');

})



  return (
    <div>

<form onSubmit={handleSubmit}>
                <div>
                    <label>Bus Name:</label>
                    <input type="text" value={busName} onChange={(e) => setBusName(e.target.value)} required />
                </div>
                <div>
                    <label>Bus Number:</label>
                    <input type="text" value={busNumber} onChange={(e) => setBusNumber(e.target.value)} required />
                </div>
                <div>
                    <label>Source:</label>
                    <input type="text" value={source} onChange={(e) => setSource(e.target.value)} required />
                </div>
                <div>
                    <label>Destination:</label>
                    <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
                </div>
                <div>
                    <label>Departure Time:</label>
                    <input type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} required />
                </div>
                <div>
                    <label>Arrival Time:</label>
                    <input type="datetime-local" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} required />
                </div>
                <button type="submit">Add Bus</button>
            </form>
            {bus_add_details.loading && <p>Loading...</p>}
            {bus_add_details.error && <p>Error: {bus_add_details.error}</p>}
            {bus_add_details.data && <p>Bus added successfully!</p>}
    </div>
  )
}

export default AddBus;