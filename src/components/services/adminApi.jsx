import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

const login = async (name, password) => {
  try {
    const res = await api.post("/admin/login", {
      name,
      password,
    });

    return { result: "success", data: res.data };
  } catch (error) {
    if (error.response.data.message) {
      return { result: "failure", msg: error.response.data.message };
    } else {
      return { result: "failure", msg: "somthing went wrong" };
    }
  }
};

const sendCourseName = async (courseName) => {
  try {
    const res = await api.post("/admin/add-course", {
      courseName,
    });

    
    return {
      result: "success",
      data: res.data.message,
    };
  } catch (error) {
    if (error.response.data.message) {
      return {
        result: "failure",
        msg: error.response.data.message,
      };
    } else {
      return {
        result: "failure",
        msg: "something went wrong",
      };
    }
  }
};

export { sendCourseName, login };
