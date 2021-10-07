import React, { useState, useEffect } from "react";
import { list } from "../services/apiService";
import { useHistory } from "react-router-dom";

const StreamList = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    list((obj) => setData(obj));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data.map((value, index) => {
        return (
          <div key={index + 1} style={{display: "flex", justifyContent: "space-around"}}>
            <p>Slika</p>
            <p>{value.title}</p>
            <p>{value.description}</p>
            <p onClick={() => history.push(`/stream/edit/${value.id}`)}>Edit</p>
            <p onClick={() => history.push(`/stream/delete/${value.id}`)}>Delete</p>
          </div>
        );
      })}
      <p onClick={() => history.push("/stream/new")}>dugme za create</p>
    </div>
  );
};

export default StreamList;
