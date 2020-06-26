import React, { useState, useEffect } from "react";
// import EmployeeContext from "../../utils/employeeContext";
import API from "../../utils/API";


export const Employee = () => {
  const [employees, setEmployees] = useState([]);
  // const [names, setNames] = useState([]);
  const [filter, setFilter] = useState("");
  const [userInput, setUserInput] = useState("")

  function getEmployees() {
    API.fetchEmployees()
      .then(res => {
        setEmployees(res)
        // setNames(res.name )
        // console.log(employees)
      })
      .catch(err => console.log(err));
  }

  function updateValue(event){  
  const { value } = event.target;
  setFilter(value);
  }


  let filteredUsers = []
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name.toLowerCase().includes(filter.toLowerCase())) {
      filteredUsers.push(employees[i])
    }
    // else if (employees[i].age.toString().includes(filter)) {
    //   filteredUsers.push(employees[i])
    // }
    else if (employees[i].location.toLowerCase().includes(filter.toLowerCase())) {
      filteredUsers.push(employees[i])
    }
    // else if (employees[i].number.includes(filter.toString())) {
    //   filteredUsers.push(employees[i])
    // }
  }
  
  // GOOGLE IT
  // .sort()

  console.log(userInput)
  console.log(filter)


  useEffect(getEmployees, [])

  // console.log("emp" + employees)
  // console.log("names" + names)

  // const { employee } = useContext(EmployeeContext)
  return (
    <div>
      <div className="jumbotron bg-dark text-center"><h1 className="text-light">Welcome to EMPLOYOTRON 9001!</h1></div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text bg-dark text-light" htmlFor="inputGroupSelect01">Sort Employees By:</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01">
          <option defaultValue>Choose...</option>
          <option value="age">Age</option>
          <option value="city">City</option>
          <option value="lastName">Last Name</option>
        </select>
        <div className="input-group-prepend">
          <label className="input-group-text bg-dark text-light" htmlFor="inputGroupSelect01">Search Name:</label>
        </div>
        <input type="text" onChange={updateValue} ></input>
        <div className="input-group-prepend">
          <label className="input-group-text bg-dark text-light" htmlFor="inputGroupSelect01">Search Location:</label>
        </div>
        <input type="text" onChange={updateValue} ></input>
      </div>
      
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col"><svg className="text-center bi bi-person-square" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg></th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Age</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(employee => (
            <tr key={employee.key.toString()}><
              td><img alt="Employee Portrait" src={employee.image}></img></td>
              <td className="lead h3" >{employee.name}</td>
              <td>{employee.number}</td>
              <td>{employee.age}</td>
              <td>{employee.location}</td>
            </tr>))}
          {/* {console.log(JSON.stringify(names))} */}
        </tbody>
      </table>


    </div>
  )
}

export default Employee
