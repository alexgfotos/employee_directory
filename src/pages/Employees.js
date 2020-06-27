import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/employeeContext";

function Gallery() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
  const [employeeIndex, setEmployeeIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadEmployeess();
  }, []);

  function Employees() {
    API.fetchEmployees()
      .then(employees => {
        this.setEmployees(employees)
        console.log(employees)
      })
      .catch(err => console.log(err));
  }


  return (
    <EmployeeContext.Provider value={{ employee, employees }}>
      <div>
        <h1 className="text-center">Welcome to Employotran 9001</h1>
        <Employee>  </Employee>
      </div>
    </EmployeeContext.Provider>
  );
}

export default Gallery;
