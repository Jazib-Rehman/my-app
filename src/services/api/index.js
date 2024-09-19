import axios from "axios";

const API_PREFIX = "http://localhost:5000/";
const LOGIN = "login";
const SIGNUP = "register";
const BLOG = "blog";
const CURRENCIES = "currencies";

export const signup = (data) => {
  return axios.post(
    `${API_PREFIX}${SIGNUP}`,
    data,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const login = (data) => {
  return axios.post(
    `${API_PREFIX}${LOGIN}`,
    data,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const getAllBlogs = () => {
  return axios.get(
    `${API_PREFIX}${BLOG}`,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const addBlog = (data) => {
  return axios.post(
    `${API_PREFIX}${BLOG}`,
    data,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const updateBlog = (data, _id) => {
  return axios.put(
    `${API_PREFIX}${BLOG}/${_id}`,
    data,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const deleteBlog = (_id) => {
  return axios.delete(
    `${API_PREFIX}${BLOG}/${_id}`,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const readOneBlog = (id) => {
  return axios.get(
    `${API_PREFIX}${BLOG}/${id}`,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const readAllBlog = (data) => {
  return axios.get(
    `${API_PREFIX}${BLOG}`,
    data,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const getCurrencies = () => {
  return axios.get(
    `${API_PREFIX}${CURRENCIES}`,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};

export const test = (data) => {
  return axios.get(
    `${API_PREFIX}`,
    data,
    {
      "axios-retry": {
        retries: 0,
      },
    },
    { mode: "cors" }
  );
};
