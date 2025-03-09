import React from "react";
import "./EmploeeCard.css";

const EmployeeCard = ({ photo, fullName, position, department, email }) => {
  return (
    <div className="employee-card">
      <img className="emp-photo" src={photo} alt={fullName} />
      <div className="emp-info">
        <h2 className="emp-name">{fullName}</h2> {/* ✅ Name is properly inside the card */}
        <p className="emp-position">{position}</p>
        <p className="emp-department">{department}</p>
        <a href={`mailto:${email}`} className="emp-email">{email}</a>
      </div>
    </div>
  );
};

export default EmployeeCard;
