import React from 'react';

const EmployeeItem = ({ employee }) => {
  return (
    <li key={employee._id}>
      <img src={employee.f_Image} alt={employee.f_Name} width="50" height="50" />
      <p>Name: {employee.f_Name}</p>
      <p>Email: {employee.f_Email}</p>
      <p>Mobile: {employee.f_Mobile}</p>
      <p>Designation: {employee.f_Designation}</p>
    </li>
  );
};

export default EmployeeItem;
