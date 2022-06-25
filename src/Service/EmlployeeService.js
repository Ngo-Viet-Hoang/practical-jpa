import axios from "axios";
const BASE_URL_SERVER = 'https://practical-jpa.herokuapp.com';

const API_ENDPOINT = {
    GET_EMPLOYEE_LIST: "/api/v1/employees",
    GET_DETAILS: "/api/v1/employees/",
    UPDATE_DETAILS: "/api/v1/employees/",
    CREATE_NEW: "/api/v1/employees",
    DELETE_EMPLOYEE: "/api/v1/employees/",
  }

  class EmployeeSevice {
    getEmployeeList = async() => {
      return await axios.get(+ API_ENDPOINT.GET_EMPLOYEE_LIST);
    };
    createNew = async (data) => {
      return await axios.post(BASE_URL_SERVER + API_ENDPOINT.CREATE_NEW);
    };
  }
  const employeeSevice = new EmployeeSevice();
  export default employeeSevice;