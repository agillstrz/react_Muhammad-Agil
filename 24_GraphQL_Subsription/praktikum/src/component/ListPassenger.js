import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GetPassengerById } from "../graphql/Query";
import ListItem from "./ListItem";

function ListPassenger({ data, loading, error, deletePassangers }) {
  const [passenger, { data: dataPassID, loading: loadPass, error: errorPass }] =
    useLazyQuery(GetPassengerById);
  const [passengerID, setPassengerID] = useState(null);

  const onGetPassengerDataById = () => {
    passenger({
      variables: {
        id: passengerID,
      },
    });
  };

  if (loading || loadPass) {
    return <span>Loading...</span>;
  }
  if (error || errorPass) {
    console.log(error);
    return null;
  }

  return (
    <div>
      <input
        className="inputan"
        value={passengerID}
        type="text"
        onChange={(e) => setPassengerID(e.target.value)}
      ></input>
      <button onClick={onGetPassengerDataById}>Get Data</button>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td>Hapus</td>
        </thead>
        {dataPassID
          ? dataPassID?.passengers_Data_Passengers.map((item) => (
              <ListItem
                deletePassanger={deletePassangers}
                key={item.id}
                data={item}
              />
            ))
          : data?.passengers_Data_Passengers.map((item) => (
              <ListItem
                deletePassanger={deletePassangers}
                key={item.id}
                data={item}
              />
            ))}
      </table>
    </div>
  );
}

export default ListPassenger;
