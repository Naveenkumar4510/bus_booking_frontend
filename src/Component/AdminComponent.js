import React ,{useState,useEffect}from 'react'
import { listBuses } from '../Services/AdminService.js'
const Admincomponent = () => {

  // const dummy=[ { 
//   "id":1,
//   "name":"naveen"
// ,
// "email":"naveen@gmail.com",
// "password":"123",
// "role":"admin"},
//   {
    
//     "id":2,
//     "name":"navi","email":"naveen@gmail.com",
//     "password":"123",
//     "role":"admin"
//   }
// ]
  const [buses,setBus]=useState([]);


  // useEffect(()=>{
  //   listBuses()
  //   .then((result) => {
  //     setBus(result.data)
  //   }).catch((err) => {
  //     console.error("Error ")
  //   });
  
  // },[])


  
    return (
      <div className='container'>
        <h2 className='text-center'>List of bus</h2>
        <table className='table table-bordered table-striped'>
          <thead>
          <tr>
           <th>Bus Number</th>
            <th>BusName</ th>
            <th>Source</th>
            <th>Destination</th>
           {/* // <th>role</th> */}
            </tr>
          </thead>
          <tbody>
          {
           buses.map(bus=>
              <tr key={bus?.id?.timestamp}>
              <td>{bus.busNumber}</td>
              <td>{bus?.busName}</td>
              <td>{bus?.destination}</td>
              <td>{bus?.source}</td>
              {/* <td>{admin.role}</td> */}
    </tr>
            )
          }
  
          </tbody>
        </table>
      </div>
    )
  }


export default Admincomponent


