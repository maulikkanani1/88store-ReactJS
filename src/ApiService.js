import axios from "axios";

const MAIN_API =
  process.env.NODE_ENV === "development" ? "http://localhost:3001/api/v1" : "http://139.59.46.91:3001/api/v1";

export const GetdashboardData = () => axios.get(`${MAIN_API}/getAllCount`);

export const postCustomer = (data) => axios.post(`${MAIN_API}/client`, data);
export const updateCustomer = (id, data) => axios.put(`${MAIN_API}/client/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${MAIN_API}/client/${id}`);
export const getAllCustomer = () => axios.get(`${MAIN_API}/getAllClients`);

export const postInventory = (data) => axios.post(`${MAIN_API}/inventory`, data);
export const updateInventory = (id, data) => axios.put(`${MAIN_API}/inventory/${id}`, data);
export const deleteInventory = (id) => axios.delete(`${MAIN_API}/inventory/${id}`);
export const getAllInventory = () => axios.get(`${MAIN_API}/allInventory`);
export const bulkUpload_Inventory = (data) => axios.post(`${MAIN_API}/bulkInventory`, data);

export const getAllOrders = (orderStatus) =>
  axios
    .get(`${MAIN_API}/getAllOrder`)
    .then(({ data }) => data.success.data.filter((item) => item.orderStatus === orderStatus));
export const update_Order = (data, id) => axios.put(`${MAIN_API}/order/${id}`, { ...data });

export const generateInvoice = (data) => axios.post(`${MAIN_API}/orderInvoice`, data);

export const postStaff = (data) => axios.post(`${MAIN_API}/staff`, data);
export const updateStaff = (id, data) => axios.put(`${MAIN_API}/staff/${id}`, data);
export const deleteStaff = (id) => axios.delete(`${MAIN_API}/staff/${id}`);
export const getAllStaff = () => axios.get(`${MAIN_API}/getAllStaff`);

export const postSupplier = (data) => axios.post(`${MAIN_API}/Supplier`, data);
export const updateSupplier = (id, data) => axios.put(`${MAIN_API}/Supplier/${id}`, data);
export const deleteSupplier = (id) => axios.delete(`${MAIN_API}/Supplier/${id}`);
export const getAllSupplier = () => axios.get(`${MAIN_API}/getAllSupplier`);
