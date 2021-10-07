import axios from "axios";

const URL = "http://localhost:3001/streams";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const list = (callBack) => {
  axios
    .get(URL, { HEADERS })
    .then((response) => callBack(response.data))
    .catch((err) => {
      console.log(err);
      callBack(false);
    });
};

const read = (id, callBack) => {
  axios
    .get(`${URL}/${id}`, { HEADERS })
    .then((response) => callBack(response.data))
    .catch((err) => {
      console.log(err);
      callBack(false);
    });
};

const insert = (data) => {
  axios.post(URL, data);
};

const update = (id, data) => {
  axios.put(`${URL}/${id}`, data);
};

const remove = (id) => {
  axios.delete(`${URL}/${id}`);
};

export { list, read, insert, update, remove };
