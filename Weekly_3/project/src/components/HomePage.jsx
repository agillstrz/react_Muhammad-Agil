import axios from "axios";
import React, { useEffect, useState } from "react";
import CONST from "../utils/Constant";

const HomePage = () => {
  const [data, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(`${CONST.baseUrl}/users?page=2`)
      .then((res) => setDatas(res.data.data));
  });
  return (
    <div className="h-screen mx-10 flex justify-center">
      <div className="w-1/2 py-5 block">
        <h1 className="text-center font-bold text-4xl">Profile</h1>
        {data &&
          data.map((m) => (
            <div key={m.id} className="flex py-5 ">
              <div className="w-1/2 flex justify-center items-center">
                <div className="avatar">
                  <div className="w-32 rounded-full">
                    <img src={m.avatar} />
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center ">
                <div>
                  <p>Email : {m.email} </p>
                  <p>Nama Depan : {m.first_name}</p>
                  <p>Nama Belakang : {m.last_name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
