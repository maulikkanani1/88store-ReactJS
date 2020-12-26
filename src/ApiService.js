import axios from "axios";

const MAIN_API = "http://139.59.46.91:3001/api/v1";

export const GetdashboardData = () => axios.get(`${MAIN_API}/getAllCount`);

export const postCustomer = (data) => axios.post(`${MAIN_API}/client`, data);

export const updateCustomer = (id, data) =>
  axios.put(`${MAIN_API}/client/${id}`, data);

export const deleteCustomer = (id) => axios.delete(`${MAIN_API}/client/${id}`);
export const getAllCustomer = () => axios.get(`${MAIN_API}/getAllClients`);

export const postInventory = (data) =>
  axios.post(`${MAIN_API}/inventory`, data);

export const updateInventory = (id, data) =>
  axios.put(`${MAIN_API}/inventory/${id}`, data);

export const getAllInventory = () => axios.get(`${MAIN_API}/allInventory`);
