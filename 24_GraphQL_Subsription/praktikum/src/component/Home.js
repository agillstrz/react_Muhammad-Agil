import Header from "./Header";
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";
import React from "react";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { GetAllPassengers } from "../graphql/Query";
import { DeletePassangers, InsertPassangers } from "../graphql/Mutations";
import { Passenger } from "../graphql/Subscriptions";

function Home() {
  const { data, loading, error } = useSubscription(Passenger);
  console.log(data);
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
    InsertPassangers({
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
