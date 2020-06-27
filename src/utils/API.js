import axios from "axios";


// const employees = [];

export default {

  fetchEmployees: function () {
    return axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then(res => {
        const employees = res.data.results;
        return employees.map(employee => {
          return {
            key: employee.id.value,
            name: employee.name.last + ", " + employee.name.first,
            age: employee.dob.age,
            number: employee.phone,
            location: employee.location.city + ", " + employee.location.state,
            image: employee.picture.medium,
          };
        });
      });
  },

};