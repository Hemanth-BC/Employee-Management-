import axiosInstance from "./axiosInstance";

export const GetAllEmployees = async (search = "", page = 1, limit = 5) => {
  try {
    const response = await axiosInstance.get(`/employees`, {
      params: { search, page, limit },
    });
    return response.data.data;
  } catch (err) {
    return (
      err.response?.data || { success: false, message: "Something went wrong" }
    );
  }
};

export const GetEmployeeDetailsById = async (id) => {
  try {
    const response = await axiosInstance.get(`/employees/${id}`);
    return response.data.data;
  } catch (err) {
    return (
      err.response?.data || { success: false, message: "Something went wrong" }
    );
  }
};

export const DeleteEmployeeById = async (id) => {
  try {
    const response = await axiosInstance.delete(`/employees/${id}`);
    return response.data;
  } catch (err) {
    return (
      err.response?.data || { success: false, message: "Something went wrong" }
    );
  }
};

export const CreateEmployee = async (empObj) => {
  const formData = new FormData();
  for (const key in empObj) {
    formData.append(key, empObj[key]);
  }

  try {
    const response = await axiosInstance.post(`/employees`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (err) {
    return (
      err.response?.data || { success: false, message: "Something went wrong" }
    );
  }
};

export const UpdateEmployeeById = async (empObj, id) => {
  const formData = new FormData();
  for (const key in empObj) {
    formData.append(key, empObj[key]);
  }

  try {
    const response = await axiosInstance.put(`/employees/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (err) {
    return (
      err.response?.data || { success: false, message: "Something went wrong" }
    );
  }
};
