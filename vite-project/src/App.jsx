import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeCard from "./components/EmployeeCard";


const App=()=>{
  const employees=[
    {
      photo: "https://th.bing.com/th/id/OIP.8hvRlwDsWXU65DezzDLnsAHaE8?rs=1&pid=ImgDetMain",
      fullName: "Jane Doe",
      position: "HR Manager",
      department: "Human Resources",
      email: "janedoe@example.com",
    },
    {
      photo: "https://img.freepik.com/premium-photo/young-boy-portrait-advertisement_976599-5569.jpg",
      fullName: "John Smith",
      position: "Software Developer",
      department: "Technology",
      email: "johnsmith@example.com",
    },
    {
      photo: "https://freerangestock.com/sample/147512/portrait-of-female-employee-smiling-at-the-camera.jpg",
      fullName: "Emily Johnson",
      position: "Marketing Specialist",
      department: "Marketing",
      email: "emilyj@example.com",
    },
  ];
  return(
    <div className='employee-list'>
      {employees.map((employee,index)=>(
        <EmployeeCard key={index}{...employee} />
      ))}
    </div>
  );
};

export default App;
