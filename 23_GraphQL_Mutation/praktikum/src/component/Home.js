import Header from "./Header";
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";
import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  DeletePassangers,
  GetAllPassengers,
  InsertPassangers,
} from "../Config/Queries";

function Home() {
  const { data, loading, error } = useQuery(GetAllPassengers);
  const [insertPassanger, { loading: insertLoading }] = useMutation(
    InsertPassangers,
    {
      refetchQueries: [GetAllPassengers],
    }
  );

  const [deletePassanger, { loading: loadingDelete }] = useMutation(
    DeletePassangers,
    {
      refetchQueries: [GetAllPassengers],
    }
  );

  const tambahPenumpang = (newUser) => {
    insertPassanger({
      variables: newUser,
    });
  };

  const hapusPenumpang = (idx) => {
    deletePassanger({
      variables: { id: idx },
    });
  };
  return (
    <div>
      <Header />
      <ListPassenger
        deletePassangers={hapusPenumpang}
        data={data}
        loading={insertLoading || loading || loadingDelete}
        error={error}
      />
      <PassengerInput data={data} addPassanger={tambahPenumpang} />
    </div>
  );
}

export default Home;
