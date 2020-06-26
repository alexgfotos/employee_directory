import axios from "axios";


// const employees = [];

export default {

  fetchEmployees: function () {
    return axios
      .get("https://randomuser.me/api/?results=20&nat=us")
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

  // getUsersByAge: function (language) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get("https://randomuser.me/api/?results=200&nat=us")
  //       .then(res => {
  //         const employees = res.data;
  //         const results = employees.map(employee => {
  //           return {
  //             key: employee.id.value,
  //             name: employee.name.last + ", " + employee.name.first,
  //             age: employee.dob.age,
  //             number: employee.phone,
  //             location: employee.location.city + ", " + employee.location.state,
  //             image: employee.picture.medium,
  //           };
  //         });
  //         resolve(results);
  //       })
  //       .catch(err => reject(err));
  //   });
  // },
  // // Return a Promise to simulate an async call
  // getLanguagesList: function () {
  //   return new Promise(resolve => {
  //     resolve(languages);
  //   });
  // }
};
