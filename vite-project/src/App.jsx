import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeCard from "./components/EmployeeCard";


const App=()=>{
  const employees=[
    {
      photo: "https://via.placeholder.com/150",
      fullName: "Jane Doe",
      position: "HR Manager",
      department: "Human Resources",
      email: "janedoe@example.com",
    },
    {
      photo: "https://via.placeholder.com/150",
      fullName: "John Smith",
      position: "Software Developer",
      department: "Technology",
      email: "johnsmith@example.com",
    },
    {
      photo: "https://via.placeholder.com/150",
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
