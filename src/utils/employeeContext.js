import React from "react";

const EmployeeContext = React.createContext({
  name: "",
  age: "",
  number: "",
  location: "",
  image: "",
});

export default EmployeeContext;
