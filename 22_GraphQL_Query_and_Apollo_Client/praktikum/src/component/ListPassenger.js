import ListItem from "./ListItem";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GetAllPassengers, GetPassengerById } from "../Config/GetAllPassangers";
import { useState } from "react";

function ListPassenger() {
  const { data, loading } = useQuery(GetAllPassengers);
  const [passenger, { data: dataPassID, loading: loadPass, error }] =
    useLazyQuery(GetPassengerById);
  const [passengerID, setPassengerID] = useState(null);

  const onGetPassengerDataById = () => {
    passenger({
      variables: {
        id: passengerID,
      },
    });
  };

  if (loadPass) {
    return <span>Loading...</span>;
  }
  if (error) {
    console.log(error);
    return null;
  }

  return (
    <div>
      <input
        className="inputan"
        value={passengerID}
        onChange={(e) => setPassengerID(e.target.value)}
      ></input>
      <button onClick={onGetPassengerDataById}>Get Data</button>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {dataPassID
          ? dataPassID?.passengers_Data_Passengers.map((item) => (
              <ListItem key={item.id} data={item} />
            ))
          : data?.passengers_Data_Passengers.map((item) => (
              <ListItem key={item.id} data={item} />
            ))}
      </table>
    </div>
  );
}

export default ListPassenger;
