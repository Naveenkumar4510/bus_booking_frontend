// import React, { useState,useEffect } from 'react';

// const Admincomponent = () => {

// // const dummy=[ { 
// //   "id":1,
// //   "name":"naveen"
// // ,
// // "email":"naveen@gmail.com",
// // "password":"123",
// // "role":"admin"},
// //   {
    
// //     "id":2,
// //     "name":"navi","email":"naveen@gmail.com",
// //     "password":"123",
// //     "role":"admin"
// //   }
// // ]

// const [admin,setAdmins]=useState([])


// useEffect(()=>{
//   listAdmin().then((result) => {
//     setAdmins(result.data)
//   }).catch((err) => {
//     console.error("Error ")
//   });

// },[])

//   return (
//     <div className='container'>
//       <h2 className='text-center'>List of admin</h2>
//       <table className='table table-bordered table-striped'>
//         <thead>
//         <tr>
//           <th>id</th>
//           <th>name</th>
//           <th>email</th>
//           <th>password</th>
//           <th>role</th>
//           </tr>
//         </thead>
//         <tbody>
//         {
//          admin.map(admin=>
//             <tr key={admin.id}>
//             <td>{admin.id}</td>
//             <td>{admin.name}</td>
//             <td>{admin.email}</td>
//             <td>{admin.password}</td>
//             <td>{admin.role}</td>
//   </tr>
//           )
//         }

//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Admincomponent;